"use client"
import { useGetBreedImage } from '@/hooks/useGetBreed'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {
    breed: Breed,
}

function Card ({breed}: Props) {
    const [data, setData] = useState<BreedImage[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const type = typeof breed.id === 'string' ? 'cat' : 'dog';
                const response = await fetch(`/api/breedImage?breed_ids=${breed.id}&type=${type}`, { cache: 'no-store' });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const { data } = await response.json();
            setData(data);
            } catch (error) {
            console.error(error);
            }
        }
    
        fetchData();
    }, []);
    return (
    <Link
    href={`/${breed?.id}`}
    className='flex flex-col justify-around gap-4 p-4 bg-yellow-50 dark:bg-gray-900 rounded-lg'>
        <div>
            <Image className='object-cover rounded-xl h-full' src={data[0]?.url} width={data[0]?.width} height={data[0]?.height} alt={breed.name} />
        </div>
        <span className='text-center text-xs md:text-lg'>
            {breed?.name}
        </span>
    </Link>
    )
}

export default Card