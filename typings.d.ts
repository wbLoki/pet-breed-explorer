type BreedImage = {
    url: string,
    width: number,
    height: number,
}
type Breed = {
    id: string | number,
    name: string,
    reference_image_id: string,
    weight?: {metric: string},
    temperament?: string,
    origin?: string,
    description?: string,
    life_span?: string,
    wikipedia_url?: string,
}