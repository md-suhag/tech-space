import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/orders",
        body: data,
      }),
    }),
    getMyOrders: builder.query({
      query: () => ({
        method: "GET",
        url: "/orders/customer",
      }),
      providesTags: ["Orders"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetMyOrdersQuery } = orderApi;
