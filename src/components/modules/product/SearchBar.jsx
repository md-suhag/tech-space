import React from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchBar = React.memo(({ query, setQuery }) => {
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
        placeholder="Type here to search products..."
        value={query.search}
        onChange={(e) =>
          setQuery((prev) => ({ ...prev, search: e.target.value }))
        }
      />
    </div>
  );
});

export default SearchBar;
