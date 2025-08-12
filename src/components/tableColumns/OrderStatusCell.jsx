import { useUpdateOrderStatusMutation } from "@/redux/features/order/orderApi";

import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

const OrderStatusCell = ({ order }) => {
  const [updateOrder] = useUpdateOrderStatusMutation();

  const statuses = [
    { label: "Processing", color: "bg-accent text-accent-foreground" },
    { label: "Shipped", color: "bg-purple-100 text-purple-800" },
    { label: "Delivered", color: "bg-green-100 text-green-800" },
    { label: "Cancelled", color: "bg-red-100 text-red-800" },
  ];

  const currentStatus = order.orderStatus;
  const currentColor =
    statuses.find((s) => s.label === currentStatus)?.color ||
    "bg-accent text-accent-foreground";

  const handleChangeStatus = async (orderStatus) => {
    console.log(order._id, orderStatus);
    try {
      await updateOrder({
        orderId: order._id,
        orderStatus: orderStatus,
      }).unwrap();
      toast.success("Order status updated!");
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${currentColor}`}
        >
          {currentStatus}
          <span className="ml-1">▼</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {statuses.map((orderStatus) => (
          <DropdownMenuItem
            key={orderStatus.label}
            onClick={() => handleChangeStatus(orderStatus.label)}
          >
            {orderStatus.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OrderStatusCell;
