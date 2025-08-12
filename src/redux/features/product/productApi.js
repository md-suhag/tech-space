import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({
        page = 1,
        limit = 12,
        sort = "newest",
        category = "",
        debouncedSearch = "",
        debouncedMinPrice = 0,
        debouncedMaxPrice = 50000,
      }) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        params.set("sort", sort);
        params.set("category", category);
        params.set("search", debouncedSearch);
        params.set("minPrice", String(debouncedMinPrice));
        params.set("maxPrice", String(debouncedMaxPrice));
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

    addProduct: builder.mutation({
      query: (payload) => ({
        url: `/products`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: (payload) => ({
        url: `/products/${payload.id}`,
        method: "PUT",
        body: payload.formData,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
} = productApi;
