import Link from "next/link";
import styles from "../styles/components/NavbarDesktop.module.css";
import { NavbarPropsType } from "./Navbar";

const NavbarDesktop = (props: NavbarPropsType) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.name}>Joel Jose</div>
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
    </div>
  );
};

export default NavbarDesktop;
