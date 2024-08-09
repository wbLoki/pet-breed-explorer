import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get('breed_ids')
    const type = searchParams.get('type')
    console.log(typeof id);
    const url = type === 'cat' 
        ? `${process.env.CAT_API_URL}/images/search?breed_ids=${id}&limit=1` 
        : `${process.env.DOG_API_URL}/images/search?breed_ids=${id}&limit=1`;
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data: BreedImage[] = await res.json()
    return Response.json({data})
  }