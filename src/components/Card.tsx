import { useGetBreedImage } from '@/hooks/useGetBreed'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    breed: Breed,
}

async function Card ({breed}: Props) {
    const breedImage = await useGetBreedImage(breed.id as string, 1);
    return (
    <Link
    href={`/${breed?.id}`}
    className='flex flex-col justify-around gap-4 p-4 bg-slate-500 rounded-lg'>
        <div>
            <Image className='object-cover rounded-xl h-full' src={breedImage[0]?.url} width={breedImage[0]?.width} height={breedImage[0]?.height} alt={breed.name} />
        </div>
        <span className='text-center text-xs md:text-lg'>
            {breed?.name}
        </span>
    </Link>
    )
}

export default Card