import { DashboardTable } from "@/components/shared/Table";
import { useGetMyOrdersQuery } from "@/redux/features/order/orderApi";
import React from "react";
import { myOrdersTableColumns } from "./../../../../components/tableColumns/myOrdersTableColumn";

const MyOrders = () => {
  const { data, isLoading } = useGetMyOrdersQuery();
  return (
    <section className="min-h-screen p-4 bg-accent">
      <div className="max-w-5xl mx-auto">
        <h2 className="my-2 text-3xl mb-4">My Orders</h2>
        {!isLoading && (
          <DashboardTable
            data={data?.data || []}
            columns={myOrdersTableColumns}
          />
        )}
      </div>
    </section>
  );
};

export default MyOrders;
