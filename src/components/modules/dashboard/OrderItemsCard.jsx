import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package } from "lucide-react";
import React from "react";
import ReviewDialog from "./ReviewDialog";
import { Link } from "react-router-dom";

const OrderItemsCard = ({ order }) => {
  return (
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
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
                  <div>
                    <span className="font-medium">Product Name</span>
                    <p className="font-mono text-sm underline">
                      <Link to={`/products/${item.productId}`}>
                        {item?.productName || "-"}
                      </Link>
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">Quantity</span>
                    <p>{item.quantity}</p>
                  </div>
                  <div>
                    <span className="font-medium">Price</span>
                    <p className="font-semibold">৳{item.price}</p>
                  </div>
                  <div>
                    <span className="font-medium">Review</span>
                    <div>
                      <ReviewDialog
                        productId={item.productId}
                        orderItemId={item._id}
                      />
                    </div>
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
  );
};

export default OrderItemsCard;
