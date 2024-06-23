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
  const [isExpanded, setIsExpanded] = useState(false);
  const expandSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  const closeSidebar = () => {
    setIsExpanded(false);
    setIsSidebarOpen(false);
  };
  const toggleSidebarInMobile = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsExpanded(!isExpanded);
  };
  return (
    <main>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isExpanded={isExpanded}
        expandSidebar={expandSidebar}
        closeSidebar={closeSidebar}
      />
      <section className="md:ml-20 h-dvh overflow-y-auto">
        <Header
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebarInMobile}
        />
        <section className="px-4 md:px-8">{children}</section>
      </section>
    </main>
  );
};

export default WithSidebarLayout;
