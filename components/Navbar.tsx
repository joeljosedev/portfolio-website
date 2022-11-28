import dynamic from "next/dynamic";
import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export interface NavbarPropsType {
  active: string;
}

const getActiveTab = () => {
  const path = window.location.pathname;

  if (path == "/") {
    return "home";
  } else {
    return path.substring(1);
  }
};

const Navbar = () => {
  const [width, setWidth] = useState(0);
  const activeTab = getActiveTab();

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  if (width == 0) {
    setWidth(window.innerWidth);
    return <></>;
  } else if (width < 1024) {
    return <NavbarMobile active={activeTab} />;
  } else {
    return <NavbarDesktop active={activeTab} />;
  }
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
