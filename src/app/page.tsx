"use client"
import List from "@/components/List";
import { useEffect, useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState<Breed[]>([]);
  const [filteredData, setFilteredData] = useState<Breed[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  // let filteredData: Breed[] = data;
    const handleChange = (e: { target: { value: string }; }) => {
      setSearchValue(e.target.value)
      const names = data.map((breed) => breed.name.toLowerCase().includes(e.target.value.toLowerCase()) ? breed.name.toLowerCase() : "")
      if(e.target.value === "") {
        setSuggestions([])
        setFilteredData(data);
      } else {
        // filteredData = data.filter(breed => names.includes(breed.name.toLowerCase()))
        setSuggestions(names)
      }
    }
    const handleSuggestionClick = (suggestion: string) => {
      setSearchValue(suggestion);
      setFilteredData(data.filter(breed => breed.name.toLowerCase() == suggestion));
      console.log(filteredData);
      setSuggestions([]);
    }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api', { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const { data } = await response.json();
        setData(data);
        setFilteredData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
      <input type="text" id="search-input" placeholder="Search..."
        className='text-slate-950'
        value={searchValue} onChange={handleChange}/>
        <div>
        {suggestions.map((suggestion, index) => (
          <div key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</div>
        ))}
      </div>
      {data.length !== 0 && <List breeds={filteredData} />}
    </main>
  );
}
