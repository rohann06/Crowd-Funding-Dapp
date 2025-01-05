import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { TbPigMoney } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className=" bg-[#000000] w-full flex justify-between items-center p-3 fixed">
      <div className=" text-2xl md:text-3xl font-bold text-[#FF6500] flex items-center gap-x-1">
        CrowdFunding <TbPigMoney className=" text-white font-semibold" />
      </div>

      <div>
        <ConnectButton
          label="connect"
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
          chainStatus="none"
        />
      </div>
    </div>
  );
};

export default Navbar;
