import { useGetProductReviewsQuery } from "@/redux/features/product/productApi";
import { Star } from "lucide-react";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ReviewList = ({ id, totalReview }) => {
  const { data: reviewsData = {}, isLoading } = useGetProductReviewsQuery({
    id,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <Skeleton className="h-[125px] w-full rounded-xl" />
      </div>
    );
  }

  return (
    <section className="py-6 border-t">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Customer Reviews ({totalReview})
      </h2>

      <div className="space-y-4">
        {/* Single Review */}
        {reviewsData?.reviews?.map((review) => (
          <div key={review._id} className="border rounded-md p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i <= Math.floor(review?.rating)
                      ? "fill-yellow-400 stroke-yellow-400"
                      : "stroke-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm ">{review?.comment}</p>
            <p className="text-xs  mt-1">— {review?.userId?.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewList;
