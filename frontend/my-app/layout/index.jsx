import React from "react";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <>
      <main className={` ${manrope.className}`}>{children}</main>
    </>
  );
};

export default Layout;
