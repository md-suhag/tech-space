import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import OrderStatusCell from "./OrderStatusCell";

export const allOrdersTableColumns = [
  // Transaction ID
  {
    accessorFn: (row) => row.paymentInfo?.transactionId,
    id: "transactionId",
    header: "Transaction ID",
    cell: ({ row }) => (
      <code className="text-xs bg-muted px-1 py-0.5 rounded">
        {row.original.paymentInfo?.transactionId || "—"}
      </code>
    ),
  },
  // Created Date
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("createdAt");
      return format(new Date(date), "dd MMM yyyy, p");
    },
    enableSorting: true,
  },

  // Total Price
  {
    accessorKey: "totalPrice",
    header: "Amount",
    cell: ({ row }) => {
      const amount = row.getValue("totalPrice");
      return <span>৳{amount.toFixed(2)}</span>;
    },
    enableSorting: true,
  },

  // Payment Status
  {
    accessorFn: (row) => row.paymentInfo?.status,
    id: "paymentStatus",
    header: "Payment Status",
    cell: ({ row }) => {
      const status = row.original.paymentInfo?.status;
      return (
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            status === "Paid"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </span>
      );
    },
    enableSorting: true,
    enableColumnFilter: true,
  },
  {
    accessorKey: "orderStatus",
    header: "Status",
    cell: ({ row }) => <OrderStatusCell order={row.original} />,
    enableSorting: true,
    enableColumnFilter: true,
  },

  {
    id: "details",
    header: "Details",
    cell: ({ row }) => {
      const order = row.original;
      return (
        <div className="flex items-center gap-2">
          <Link to={`/dashboard/all-orders/${order._id}`} state={order}>
            <Button size="sm" variant="outline">
              View
            </Button>
          </Link>
        </div>
      );
    },
  },
];
