import Image from "next/image";
import styles from "../styles/NavbarMobile.module.css";
import MenuIcon from "./MenuIcon";

const NavbarMobile = () => {
  return (
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
      <div className={styles.menu}>
        <MenuIcon />
      </div>
    </div>
  );
};

export default NavbarMobile;
