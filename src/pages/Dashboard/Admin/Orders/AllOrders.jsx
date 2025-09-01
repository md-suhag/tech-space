import { DashboardTable } from "@/components/shared/Table";
import { useGetAllOrdersQuery } from "@/redux/features/order/orderApi";
import React from "react";
import { allOrdersTableColumns } from "../../../../components/tableColumns/allOrdersTableColumn";

const AllOrders = () => {
  const { data, isLoading } = useGetAllOrdersQuery();
  return (
    <section className="min-h-screen p-4 bg-accent">
      <div className="max-w-5xl mx-auto">
        <h2 className="my-2 text-3xl mb-4">AllOrders</h2>

        <DashboardTable
          data={data?.data || []}
          columns={allOrdersTableColumns}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
};

export default AllOrders;
