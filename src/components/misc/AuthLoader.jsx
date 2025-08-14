import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { logOut } from "@/redux/features/auth/AuthSlice";

export default function AuthLoader({ children }) {
  const { token } = useSelector((state) => state.authR);
  const dispatch = useDispatch();
  const { error, isLoading } = useGetMeQuery(undefined, {
    refetchOnMountOrArgChange: false,
    refetchOnFocus: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    if (!isLoading && error) {
      if (error?.status === 403 && token) {
        dispatch(logOut());
      }
    }
  }, [error, isLoading, dispatch]);

  return children;
}
