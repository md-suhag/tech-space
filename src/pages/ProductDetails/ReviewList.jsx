import { useGetProductReviewsQuery } from "@/redux/features/review/reviewApi";
import { Star } from "lucide-react";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ReviewList = ({ id, totalReview }) => {
  const { data: reviewsData = {}, isLoading } = useGetProductReviewsQuery({
    id,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-4">
        <Skeleton className="h-32 w-full rounded-2xl" />
        <Skeleton className="h-32 w-full rounded-2xl" />
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Customer Reviews ({totalReview})
      </h2>

      <div className="space-y-6">
        {/* Single Review */}
        {reviewsData?.reviews?.length > 0 ? (
          reviewsData.reviews.map((review) => (
            <div
              key={review._id}
              className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
            >
              <div className="flex items-center space-x-2 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i <= Math.floor(review?.rating)
                        ? "fill-yellow-400 stroke-yellow-400"
                        : "fill-gray-200 stroke-gray-200"
                    } transition-colors duration-200`}
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-7">{review?.comment}</p>
              <p className="text-sm text-gray-500 mt-2 font-medium">
                — {review?.userId?.name}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No reviews yet.</p>
        )}
      </div>
    </section>
  );
};

export default ReviewList;
