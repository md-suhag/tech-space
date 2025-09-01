import { DashboardTable } from "@/components/shared/Table";
import { allProductsTableColumns } from "@/components/tableColumns/allProductsTableColumn";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const AllProducts = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllProductsQuery({ page });
  return (
    <section className="min-h-screen p-4 bg-accent">
      <div className="max-w-5xl mx-auto">
        <h2 className="my-2 text-3xl mb-4">All Products</h2>

        <DashboardTable
          data={data?.data || []}
          columns={allProductsTableColumns}
          isLoading={isLoading}
        />

        <div className="flex justify-between mt-2">
          <Button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span>
            Page {data?.currentPage ?? 1} of {data?.totalPages ?? 1}
          </span>
          <Button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page == (data?.totalPages ?? 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
