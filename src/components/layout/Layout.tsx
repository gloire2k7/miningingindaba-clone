import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <TopBar />
      <Navbar />
      {/* Main content below fixed top bar + navbar */}
      <main className="pt-[180px] px-4">
        {children}
      </main>
    </>
  );
};

export default Layout;
