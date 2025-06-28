import {
  Home,
  ListOrdered,
  ListOrderedIcon,
  Receipt,
  UsersRoundIcon,
} from "lucide-react";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { useSelector } from "react-redux";
import { SidebarNavLink } from "./SidebarNavLink";
const customerMenu = [
  {
    title: "My Orders",
    url: "/dashboard/my-orders",
    icon: ListOrderedIcon,
  },
];

const adminMenu = [
  {
    title: "Customers",
    url: "/dashboard/customers",
    icon: UsersRoundIcon,
  },
  {
    title: "All Orders",
    url: "/dashboard/all-orders",
    icon: Receipt,
  },
];
const DashboardSidebar = () => {
  const { role } = useSelector((state) => state.authR.user);

  return (
    <Sidebar>
      <SidebarContent className="">
        <SidebarGroup>
          <Link to="/">
            {" "}
            <SidebarGroupLabel className="cursor-pointer mb-12 pl-6 pt-6 text-2xl">
              TECHSPACE
            </SidebarGroupLabel>
          </Link>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="">
                <SidebarNavLink to="/dashboard" icon={Home} title="Dashboard" />
              </SidebarMenuItem>
              {role === "customer" &&
                customerMenu.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarNavLink
                      to={item.url}
                      icon={item.icon}
                      title={item.title}
                    />
                  </SidebarMenuItem>
                ))}
              {role === "admin" &&
                adminMenu.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarNavLink
                      to={item.url}
                      icon={item.icon}
                      title={item.title}
                    />
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
