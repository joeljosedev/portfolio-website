import Image from "next/image";
import { useState } from "react";
import styles from "../styles/NavbarMobile.module.css";
import MenuIcon from "./MenuIcon";
import { NavbarPropsType } from "./Navbar";
import PageModal from "./PageModal";

const NavbarMobile = (props: NavbarPropsType) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PageModal
        active={props.active}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/android-chrome-512x512.png"
            alt="Logo"
            width={512}
            height={512}
          />
        </div>
        <div className={styles.name}>Joel Jose</div>
        <div className={styles.menu} onClick={() => setShowModal(true)}>
          <MenuIcon />
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
