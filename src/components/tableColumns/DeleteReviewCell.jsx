import { useState } from "react";

import { toast } from "sonner";
import DeleteReviewAlert from "../modules/dashboard/DeleteReviewAlert";
import { useDeleteMyReviewMutation } from "@/redux/features/review/reviewApi";
import { Button } from "../ui/button";

const DeleteReviewCell = ({ review }) => {
  const [open, setOpen] = useState(false);
  const [deleteReview] = useDeleteMyReviewMutation();

  const handleDelete = async () => {
    try {
      toast.loading("Deleting review...", { id: "delete" });
      await deleteReview({ reviewId: review._id }).unwrap();
      setOpen(false);
      toast.success("Review deleted successfully", { id: "delete" });
    } catch (error) {
      toast.error(error?.data?.message || "Failed to delete review", {
        id: "delete",
      });
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Delete</Button>
      <DeleteReviewAlert
        open={open}
        onOpenChange={setOpen}
        onDelete={handleDelete}
      />
    </>
  );
};

export default DeleteReviewCell;
