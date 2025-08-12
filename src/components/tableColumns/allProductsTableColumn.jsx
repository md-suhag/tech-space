import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

export const allProductsTableColumns = [
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
      const image = row.getValue("imageUrl");
      return <img src={image} className="w-12" />;
    },
    enableSorting: true,
  },
  {
    accessorKey: "name",

    header: "Name",
  },

  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const amount = row.getValue("price");
      return <span>৳{amount.toFixed(2)}</span>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },

  {
    id: "edit",
    header: "Edit",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className="flex items-center gap-2">
          <Link to={`/dashboard/edit-product`} state={product}>
            <Button size="sm" variant="outline">
              Edit
            </Button>
          </Link>
        </div>
      );
    },
  },
];
