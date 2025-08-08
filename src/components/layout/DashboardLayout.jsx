import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import { User2Icon } from "lucide-react";
import DashboardUserMenu from "../modules/dashboard/DashboardUserMenu";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full ">
        <div className="flex items-center justify-between px-4 py-2  border-b w-full">
          <SidebarTrigger className="w-12 h-12" />

          <DashboardUserMenu />
        </div>

        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
