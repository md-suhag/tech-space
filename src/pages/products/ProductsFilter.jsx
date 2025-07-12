import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const ProductsFilter = ({
  sort,
  setSort,
  category,
  setCategory,
  limit,
  setLimit,
  setPage,
  setProducts,
}) => {
  return (
    <div className=" flex flex-wrap gap-1  sm:gap-4 items-center  ">
      <div>Filter:</div>
      <Select
        value={sort}
        onValueChange={(value) => {
          setSort(value);
          setPage(1);
          setProducts([]);
        }}
      >
        <SelectTrigger className="">
          <SelectValue placeholder="sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort By</SelectLabel>
            <SelectItem value="name_asc">From A-Z</SelectItem>
            <SelectItem value="name_desc">From Z-A</SelectItem>
            <SelectItem value="price_asc">Low Price</SelectItem>
            <SelectItem value="price_desc">High Price</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        value={category}
        onValueChange={(value) => {
          setCategory(value);
          setPage(1);
          setProducts([]);
        }}
      >
        <SelectTrigger className="">
          <SelectValue placeholder="category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>

            <SelectItem value="all">All category</SelectItem>
            <SelectItem value="Computers">Computers</SelectItem>
            <SelectItem value="Smartphones">Smartphones</SelectItem>
            <SelectItem value="Headphones">Headphones</SelectItem>
            <SelectItem value="TVs">TVs</SelectItem>
            <SelectItem value="Gamings">Gamings</SelectItem>
            <SelectItem value="Cameras">Cameras</SelectItem>
            <SelectItem value="Watches">Watches</SelectItem>
            <SelectItem value="Storages">Storages</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        value={String(limit)}
        onValueChange={(value) => {
          setLimit(value);
          setPage(1);
          setProducts([]);
        }}
      >
        <SelectTrigger className="">
          <SelectValue placeholder="limit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>limit</SelectLabel>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="12">12</SelectItem>
            <SelectItem value="15">15</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductsFilter;
