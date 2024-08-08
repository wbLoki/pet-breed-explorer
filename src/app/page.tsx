import List from "@/components/List";
import useGetBreeds from "@/hooks/useGetBreed";

export default async function Home() {
  const breeds = await useGetBreeds();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <List breeds={breeds} />
    </main>
  );
}
