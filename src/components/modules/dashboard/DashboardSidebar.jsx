import {
  EditIcon,
  Home,
  List,
  ListOrdered,
  ListOrderedIcon,
  Plus,
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
} from "../../ui/sidebar";
import { Link } from "react-router-dom";
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
  {
    title: "Add Product",
    url: "/dashboard/add-product",
    icon: Plus,
  },
  {
    title: "All Products",
    url: "/dashboard/all-products",
    icon: List,
  },
  {
    title: "Edit Products",
    url: "/dashboard/edit-product",
    icon: EditIcon,
  },
];
const DashboardSidebar = () => {
  const { role } = useSelector((state) => state.authR.user);

  return (
    <Sidebar className=" shadow-xl">
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
