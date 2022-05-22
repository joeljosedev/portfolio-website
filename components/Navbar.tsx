import dynamic from "next/dynamic";
import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [width, setWidth] = useState(0);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }

  if (width == 0) {
    setWidth(window.innerWidth);
    return <></>;
  } else if (width < 768) {
    return <NavbarMobile />;
  } else {
    return <NavbarDesktop />;
  }
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
