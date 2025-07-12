import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchBar = React.memo(({ search, setSearch }) => {
  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(searchInput);
    }, 700);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput, setSearch]);

  return (
    <div className="relative md:max-w-[500px] w-full">
      <SearchIcon
        color="green"
        height={"24px"}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
      />
      <Input
        type="search"
        className="p-3 sm:py-6 sm:px-4"
        placeholder="search products"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
});

export default SearchBar;
