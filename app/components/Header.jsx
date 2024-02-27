import Image from "next/image";
import React from "react";
import logo from "/public/logo.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-center">
        <Image width={550} src={logo} alt="logo" />
      </div>
    </>
  );
};

export default Header;
