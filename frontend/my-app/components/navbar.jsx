import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <main className="bg-white">
      <div className="container mx-auto py-3  flex items-center justify-between">
        <Image src={"/images/logo.svg"} width={150} height={35} />
        <div className="flex gap-2"></div>
      </div>
    </main>
  );
};

export default Navbar;
