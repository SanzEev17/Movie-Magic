"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import React, { useState } from "react";

const WithSidebarLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <main>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <section className="md:ml-20 h-dvh overflow-y-auto">
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <section className="px-4 md:px-8">{children}</section>
      </section>
    </main>
  );
};

export default WithSidebarLayout;
