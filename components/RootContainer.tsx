"use client";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar/Sidebar";

const RootContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <main className="bg-zinc-50">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <section className="md:ml-20 h-dvh overflow-y-auto">
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <section className="px-4 md:px-8">{children}</section>
      </section>
    </main>
  );
};

export default RootContainer;
