export async function GET() {
    const cats = await fetch(`${process.env.CAT_API_URL}/breeds?limit=10`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const dogs = await fetch(`${process.env.DOG_API_URL}/breeds?limit=10`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    const catsData = await cats.json()
    const dogsData = await dogs.json()
    const data = [...catsData, ...dogsData];
    return Response.json({data})
  }