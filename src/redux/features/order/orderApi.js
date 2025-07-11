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
  }),
});

export const { useCreateOrderMutation } = orderApi;
