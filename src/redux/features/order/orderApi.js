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
    getAllOrders: builder.query({
      query: () => ({
        method: "GET",
        url: "/orders",
      }),
      providesTags: ["AllOrders"],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ orderId, orderStatus }) => {
        return {
          url: `/orders/${orderId}/status`,
          method: "PUT",
          body: { orderStatus },
        };
      },
      invalidatesTags: (result, error, arg) => [
        { type: "AllOrders", id: arg.id },
      ],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetMyOrdersQuery,
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} = orderApi;
