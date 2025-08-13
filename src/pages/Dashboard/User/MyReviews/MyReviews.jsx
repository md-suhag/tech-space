import { DashboardTable } from "@/components/shared/Table";
import { myReviewsTableColumns } from "@/components/tableColumns/myReviewsTableColumn";
import { useGetMyReviewsQuery } from "@/redux/features/review/reviewApi";
import React from "react";

const MyReviews = () => {
  const { data, isLoading } = useGetMyReviewsQuery();
  return (
    <section className="min-h-screen p-4 bg-accent">
      <div className="max-w-5xl mx-auto">
        <h2 className="my-2 text-3xl mb-4">My Reviews</h2>
        {!isLoading && (
          <DashboardTable
            data={data?.data || []}
            columns={myReviewsTableColumns}
          />
        )}
      </div>
    </section>
  );
};

export default MyReviews;
