import { Link } from "react-router-dom";

import DeleteReviewCell from "./DeleteReviewCell";

export const myReviewsTableColumns = [
  {
    accessorFn: (row) => row.productId?.name,
    id: "name",
    header: "Product Name",
    cell: ({ row }) => {
      return (
        <div>
          {" "}
          <Link to={`/products/${row.original.productId}`}>
            {row.original.productId?.name}
          </Link>
        </div>
      );
    },
  },

  {
    accessorKey: "rating",
    header: "Rating",
  },
  {
    accessorKey: "comment",
    header: "Comment",
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => <DeleteReviewCell review={row.original} />,
  },
];
