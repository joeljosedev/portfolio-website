import Image from "next/image";
import Link from "next/link";
import styles from "../styles/NavbarDesktop.module.css";
import { NavbarPropsType } from "./Navbar";

const NavbarDesktop = (props: NavbarPropsType) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.linkContainer}>
          <div className={styles.logo}>
            <Image
              src="/android-chrome-512x512.png"
              alt="Logo"
              width={512}
              height={512}
            />
          </div>
          <div className={styles.name}>Joel Jose</div>
        </div>
      </Link>
      <Link href="/">
        <div
          className={props.active === "home" ? styles.activeTab : styles.tab}
        >
          Home
        </div>
      </Link>
      <Link href="/about">
        <div
          className={props.active === "about" ? styles.activeTab : styles.tab}
        >
          About
        </div>
      </Link>
      <Link href="/projects">
        <div
          className={
            props.active === "projects" ? styles.activeTab : styles.tab
          }
        >
          Projects
        </div>
      </Link>
      <Link href="/contact">
        <div
          className={props.active === "contact" ? styles.activeTab : styles.tab}
        >
          Contact
        </div>
      </Link>
    </div>
  );
};

export default NavbarDesktop;
