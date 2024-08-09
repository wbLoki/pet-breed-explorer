import { useGetBreed, useGetBreedImage } from '@/hooks/useGetBreed';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function Breed({ params }: { params: { slug: string } }) {
    const breed = await useGetBreed(params.slug);
    const breedImage = await useGetBreedImage(breed.id as string, 1);
  return (
    <div className='flex min-h-screen flex-col items-center gap-4 p-24'>
        <h1 className='text-2xl md:text-3xl'>{breed?.name}</h1>
        <Image className='object-cover rounded-xl w-[30dvh]' src={breedImage[0]?.url} width={breedImage[0]?.width} height={breedImage[0]?.height} alt={breed.name} />
        <div className='capitalize flex flex-col rounded-md bg-gray-900 p-4 max-w-3xl text-xs md:text-lg gap-2'>
          <span>Weight: {breed?.weight?.metric}</span>
          <span>temperament: {breed?.temperament}</span>
          <span>origin: {breed?.origin}</span>
          <span>life span: {breed?.life_span}</span>
          <span>description: {breed?.description}</span>
          <span>For more information <Link className='text-blue-500' href={breed.wikipedia_url ?? ''}>click here</Link></span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
          {breedImage.length > 1 && breedImage.slice(1).map((image, key) => {
            return <Image key={key} className='object-cover rounded-xl w-[30dvh]' src={image.url} width={image.width} height={image.height} alt={breed.name} />
          })}
        </div>
    </div>
  )
}

export default Breed