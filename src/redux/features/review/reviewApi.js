import { baseApi } from "@/redux/api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductReviews: builder.query({
      query: (payload) => ({
        url: `/reviews/${payload.id}`,
        method: "GET",
      }),
      providesTags: ["Review"],
    }),
    getMyReviews: builder.query({
      query: () => ({
        url: `/reviews/customer`,
        method: "GET",
      }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map((review) => ({
                type: "MyReviews",
                id: review._id,
              })),
              { type: "MyReviews", id: "LIST" },
            ]
          : [{ type: "MyReviews", id: "LIST" }],
    }),
    addReview: builder.mutation({
      query: (payload) => ({
        url: `/reviews/${payload.productId}`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Review", "MyReviews"],
    }),
    deleteMyReview: builder.mutation({
      query: ({ reviewId }) => ({
        url: `/reviews/${reviewId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { reviewId }) => [
        { type: "MyReviews", id: reviewId },
        { type: "MyReviews", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useGetProductReviewsQuery,
  useGetMyReviewsQuery,
  useDeleteMyReviewMutation,
} = reviewApi;
