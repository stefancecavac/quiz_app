import React from "react";
import { Header } from "../headerComponents/Header";
import { Navbar } from "../navbarComponents/Navbar";
import { ErrorModal } from "../modal/ErrorModal";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen bg-base-100">
      <Navbar />
      <div className="flex flex-col w-full h-full">
        <Header />
        {children}
      </div>
      <ErrorModal />
    </div>
  );
};
