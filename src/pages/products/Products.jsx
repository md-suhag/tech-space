import React, { useEffect, useState } from "react";
import ProductCard from "@/components/modules/product/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";

import { Button } from "@/components/ui/button";

import SearchBar from "../../components/modules/product/SearchBar";
import ProductsFilter from "../../components/modules/product/ProductsFilter";
import ProductCardSkeleton from "@/components/modules/product/ProductCardSkeleton";
import { PriceRangeSlider } from "../../components/modules/product/PriceRangeSlider";
import Container from "@/components/shared/Container";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@/hooks/useDebounce";

const Products = () => {
  const [searchParams] = useSearchParams();

  const queryCategory = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const [query, setQuery] = useState({
    page: 1,
    limit: 12,
    sort: "newest",
    category: queryCategory ?? "all",
    minPrice: 0,
    maxPrice: 200000,
    search: "",
  });

  const debouncedMinPrice = useDebounce(query.minPrice, 500);
  const debouncedMaxPrice = useDebounce(query.maxPrice, 500);
  const debouncedSearch = useDebounce(query.search, 500);

  // Fetch data with RTK Query
  const { data, isLoading, isFetching, error } = useGetAllProductsQuery({
    page: query.page,
    limit: query.limit,
    sort: query.sort,
    ...(query.category !== "all" && { category: query.category }),
    debouncedSearch,
    debouncedMinPrice,
    debouncedMaxPrice,
  });

  useEffect(() => {
    setQuery((prev) => ({ ...prev, page: 1 }));
    setProducts([]);
  }, [debouncedMinPrice, debouncedMaxPrice, debouncedSearch]);

  useEffect(() => {
    if (!data?.data) return;
    if (data.currentPage != query.page) return;

    setProducts((prev) => {
      const combined = query.page === 1 ? data.data : [...prev, ...data.data];

      //  Deduplicate by `_id`
      const unique = Array.from(
        new Map(combined.map((p) => [p._id, p])).values()
      );

      return unique;
    });

    if (query.page === 1 && data.data.length === 0) {
      setHasMore(false);
    } else if (data.totalPages) {
      setHasMore(query.page < data.totalPages);
    } else {
      setHasMore(false);
    }
  }, [data, query.page]);

  return (
    <Container>
      {isLoading && query.page === 1 && <ProductCardSkeleton />}

      {!isLoading && (
        <>
          <div className="flex flex-col gap-2 items-center justify-center  p-4">
            <h1 className=" text-2xl md:text-4xl font-bold mt-2 text-primary">
              All Products
            </h1>
            <SearchBar query={query} setQuery={setQuery} />
          </div>

          <div className="flex flex-col lg:flex-row justify-between  items-center   py-4 gap-4">
            <PriceRangeSlider
              query={query}
              onChange={([newMin, newMax]) => {
                setQuery((prev) => ({
                  ...prev,
                  minPrice: newMin,
                  maxPrice: newMax,
                }));
              }}
            />
            <ProductsFilter
              query={query}
              setQuery={setQuery}
              setProducts={setProducts}
            />
          </div>

          <p className=" text-muted-foreground">
            {data?.total > 0 && <span>Total {data?.total} products found</span>}
            {!data?.total && <span>No products found</span>}
          </p>
          {isFetching && query.page === 1 && <ProductCardSkeleton />}

          <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  my-5">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}

            {error && (
              <p className="text-red-500">
                Can't load products from database. Please try again later or
                refresh the page
              </p>
            )}
          </section>

          {isFetching && query.page > 1 && <ProductCardSkeleton />}

          <div className="flex justify-center">
            {hasMore && !isLoading && !isFetching && products.length > 0 && (
              <Button
                className="my-4"
                onClick={() =>
                  setQuery((prev) => ({ ...prev, page: prev.page + 1 }))
                }
              >
                Load more...
              </Button>
            )}
          </div>
        </>
      )}
    </Container>
  );
};

export default Products;
