import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    getSingleProduct: builder.query({
      query: (payload) => ({
        url: `/products/${payload.id}`,
        method: "GET",
      }),
    }),
    getProductReviews: builder.query({
      query: (payload) => ({
        url: `/reviews/${payload.id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetProductReviewsQuery,
} = productApi;
