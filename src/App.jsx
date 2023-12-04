import { useMemo, useState } from "react";

import { useEffect } from "react";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";

function App() {
  const [query, setQuery] = useState("");
  const [beerData, setBeerData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.punkapi.com/v2/beers");
      const data = await res.json();
      setBeerData(data);
    }
    fetchData();
  }, []);

  if (!beerData) return <Loading />;
  const filteredBeers = beerData.filter((beer) => {
    return beer.name.toLowerCase().includes(query);
  });

  return (
    <main className="bg-amber-600 min-h-screen">
      <header className="p-4">
        <SearchBar query={query} setQuery={setQuery} />
      </header>

      <div className="flex flex-wrap gap-y-10 justify-evenly">
        {filteredBeers.length > 0 ? (
          filteredBeers.map((data) => <Card data={data} key={data.id} />)
        ) : (
          <h2 className="text-white text-2xl">
            No beers found, please modify Search
          </h2>
        )}
      </div>
    </main>
  );
}

export default App;
