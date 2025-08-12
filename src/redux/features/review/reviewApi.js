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
    addReview: builder.mutation({
      query: (payload) => ({
        url: `/reviews/${payload.productId}`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Review"],
    }),
  }),
});

export const { useAddReviewMutation, useGetProductReviewsQuery } = reviewApi;
