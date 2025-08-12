import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Package, CreditCard, Truck, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

const AllOrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state;

  if (!order) {
    return (
      <section className="min-h-screen  flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <p className="text-lg  mb-6">No order data available.</p>
          <Button onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-5 w-5" /> Return to Orders
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-accent p-4 ">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold">Order Details</h1>
          <Button onClick={() => navigate(-1)} className="">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Order Information */}
          <Card className="shadow-lg">
            <CardContent>
              <div className="flex items-center mb-4">
                <Receipt className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-xl font-medium ">Order Information</h2>
              </div>
              <div className="space-y-3 ">
                <div className="flex justify-between">
                  <span className="font-medium">Order ID</span>
                  <span className="font-mono text-sm">{order._id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status</span>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      order.orderStatus === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.orderStatus === "Cancelled"
                        ? "bg-red-100 text-red-800"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {order.orderStatus}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total Price</span>
                  <span className="font-semibold">৳{order.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Order Date</span>
                  <span>
                    {format(new Date(order.createdAt), "dd MMM yyyy, p")}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card className=" shadow-lg">
            <CardContent>
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-xl font-medium">Payment Information</h2>
              </div>
              <div className="space-y-3 ">
                <div className="flex justify-between">
                  <span className="font-medium">Transaction ID</span>
                  <span className="font-mono text-sm">
                    {order.paymentInfo?.transactionId || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Payment Status</span>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      order.paymentInfo?.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.paymentInfo?.status || "Pending"}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Address */}
          <Card className="shadow-lg">
            <CardContent>
              <div className="flex items-center mb-4">
                <Truck className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-xl font-medium">Shipping Address</h2>
              </div>
              <p className="">
                {order.shippingAddress || "No shipping address provided"}
              </p>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card className="shadow-lg lg:col-span-2">
            <CardContent>
              <div className="flex items workloads-center mb-4">
                <Package className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-xl font-medium ">Order Items</h2>
              </div>
              {order.orderItems?.length > 0 ? (
                <div className="space-y-4">
                  {order.orderItems.map((item) => (
                    <div
                      key={item._id}
                      className="border-b border-gray-200 pb-4 last:border-b-0"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                        <div>
                          <span className="font-medium">Product ID</span>
                          <p className="font-mono text-sm">{item.productId}</p>
                        </div>
                        <div>
                          <span className="font-medium">Quantity</span>
                          <p>{item.quantity}</p>
                        </div>
                        <div>
                          <span className="font-medium">Price</span>
                          <p className="font-semibold">৳{item.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="">No items in this order.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AllOrderDetails;
