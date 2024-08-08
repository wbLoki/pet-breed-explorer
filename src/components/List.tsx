import React from 'react'
import Card from './Card'

type Props = {
  breeds: Breed[]
}

function List({breeds}: Props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
      {breeds.map((breed, key) => {
        return <Card key={key} breed={{
          id: breed.id,
          name: breed.name,
          reference_image_id: breed.reference_image_id
        }} />
      })}
    </div>
  )
}

export default List