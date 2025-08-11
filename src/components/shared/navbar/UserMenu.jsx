import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logOut } from "@/redux/features/auth/AuthSlice";

import { CircleUserRound, UserIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function UserMenu({ name, email }) {
  const dispatch = useDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className=" cursor-pointer">
        {name ? <CircleUserRound /> : <UserIcon className="" />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-56" align="end">
        <p className="text-sm font-normal opacity-90 px-2 pt-2">{name}</p>
        <p className="text-[12px] opacity-90 px-2">{email}</p>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <Link to="/dashboard">
            <DropdownMenuItem className="cursor-pointer">
              dashboard
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => dispatch(logOut())}
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
