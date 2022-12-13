import Link from "next/link";
import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import styles from "../styles/NavbarMobile.module.css";
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
        <Link href="/">
          <div className={styles.name}>Joel Jose</div>
        </Link>
        <div className={styles.menu} onClick={() => setShowModal(true)}>
          <MenuIcon />
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
