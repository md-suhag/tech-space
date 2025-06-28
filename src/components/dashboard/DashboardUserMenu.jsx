import { logOut } from "@/redux/features/auth/AuthSlice";

import { UserIcon } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

const DashboardUserMenu = () => {
  const dispatch = useDispatch();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="w-8 h-8  rounded-full p-1 cursor-pointer bg-primary/90  text-white"
      >
        <UserIcon className=" " />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <Link to="/">
            <DropdownMenuItem className="cursor-pointer">Home</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => dispatch(logOut())}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardUserMenu;
