import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({
        page = 1,
        limit = 12,
        sort = "newest",
        category = "",
        search = "",
        minPrice = 0,
        maxPrice = 1000000000,
      }) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        params.set("sort", sort);
        params.set("category", category);
        params.set("search", search);
        params.set("minPrice", String(minPrice));
        params.set("maxPrice", String(maxPrice));
        return `/products?${params.toString()}`;
      },

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
