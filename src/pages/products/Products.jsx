import React, { useEffect, useState } from "react";
import ProductCard from "@/components/modules/product/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";

import { Button } from "@/components/ui/button";

import SearchBar from "./SearchBar";
import ProductsFilter from "./ProductsFilter";
import ProductCardSkeleton from "@/components/modules/product/ProductCardSkeleton";
import { PriceRangeSlider } from "../../components/modules/product/PriceRangeSlider";
import Container from "@/components/shared/Container";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [hasMore, setHasMore] = useState(true);

  // Filters
  const [sort, setSort] = useState("newest");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(25000);

  // Fetch data with RTK Query
  const { data, isLoading, isFetching, error } = useGetAllProductsQuery({
    page,
    limit,
    sort,
    ...(category !== "all" && { category }),
    search,
    minPrice,
    maxPrice,
  });

  useEffect(() => {
    if (!data?.data) return;
    if (data.currentPage != page) return;

    setProducts((prev) => {
      const combined = page === 1 ? data.data : [...prev, ...data.data];

      //  Deduplicate by `_id`
      const unique = Array.from(
        new Map(combined.map((p) => [p._id, p])).values()
      );

      return unique;
    });

    if (page === 1 && data.data.length === 0) {
      setHasMore(false);
    } else if (data.totalPages) {
      setHasMore(page < data.totalPages);
    } else {
      setHasMore(false);
    }
  }, [data, page]);

  return (
    <Container>
      {isLoading && page === 1 && <ProductCardSkeleton />}

      <div className="flex flex-col gap-2 items-center justify-center  p-4">
        <h1 className=" text-2xl font-semibold mt-2">All Products</h1>
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className="flex flex-col lg:flex-row justify-between  items-center   py-4 gap-4">
        <PriceRangeSlider
          minPrice={minPrice}
          maxPrice={maxPrice}
          onChange={([newMin, newMax]) => {
            setMinPrice(newMin);
            setMaxPrice(newMax);
            setPage(1);
            setProducts([]);
          }}
        />
        <ProductsFilter
          sort={sort}
          setSort={setSort}
          category={category}
          setCategory={setCategory}
          limit={limit}
          setLimit={setLimit}
          setPage={setPage}
          setProducts={setProducts}
        />
      </div>

      <p className=" text-muted-foreground">
        Total {data?.total} products found
      </p>
      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  my-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}

        {error && <p className="text-red-500">Error loading products</p>}
      </section>

      {isFetching && page > 1 && <ProductCardSkeleton />}

      <div className="flex justify-center">
        {hasMore && !isLoading && !isFetching && products.length > 0 && (
          <Button className="my-4" onClick={() => setPage((prev) => prev + 1)}>
            Load more...
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Products;
