import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.webp";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
});
const Navbar = () => {
  return (
    <div className="bg-neutral-200/25 p-2">
      <div className="max-w-5xl m-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative w-40 h-14 md:w-40 md:h-12 lg:w-44 lg:h-14">
            <Image
              src={logo}
              fill
              alt="College Vidya Logo"
              className="object-contain"
            />
          </div>
          <small
            className={cn("hidden md:block m-0 font-normal", poppins.className)}
          >
            #ChunoApnaSahi
          </small>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
