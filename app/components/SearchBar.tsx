"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [location, setLocation] = useState("");

  const router = useRouter();

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
  const handleLocationClick = () => {
    if (location === "banana") return;
    router.push("/search");
  };
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={handleLocationChange}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={handleLocationClick}
      >
        Let's go
      </button>
    </div>
  );
}

export default SearchBar;
