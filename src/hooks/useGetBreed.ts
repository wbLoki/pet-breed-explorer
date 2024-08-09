export const fetchData = async (url: string) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

const useGetBreeds = async (): Promise<Breed[]> => {
    const catBreeds = await fetchData(`${process.env.CAT_API_URL}/breeds?limit=10`);
    const dogBreeds = await fetchData(`${process.env.DOG_API_URL}/breeds?limit=10`);
    return [...catBreeds, ...dogBreeds];
};

export const useGetBreed = async (id: string | number): Promise<Breed> => {
    const url = typeof id === 'string' 
        ? `${process.env.CAT_API_URL}/breeds/${id}` 
        : `${process.env.DOG_API_URL}/breeds/${id}`
    return await fetchData(url);
};

export const useGetBreedImage = async (id: string | number, num: number): Promise<BreedImage[]> => {
    const url = typeof id === 'string' 
        ? `${process.env.CAT_API_URL}/images/search?breed_ids=${id}&limit=${num}` 
        : `${process.env.DOG_API_URL}/images/search?breed_ids=${id}&limit=${num}`;
    return await fetchData(url);
};

export default useGetBreeds;