"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

import { Spinner } from "@/components/spinner";
import { SearchCommand } from "@/components/search-command";

import { Navigation } from "./_components/navigation";

const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed md:insert-y-0 z-[80] bg-gray-900">
          <Sidebar />
        </div>
        <main className="md:pl-72">
          <Navbar />
          {children}
        </main>
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return ( 
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
   );
}
 
export default MainLayout;