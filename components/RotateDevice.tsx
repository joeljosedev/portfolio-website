import dynamic from "next/dynamic";
import { useState } from "react";
import PortraitPhone from "../icons/PortraitPhone";
import styles from "../styles/RotateDevice.module.css";

const RotateDevice = () => {
  const [height, setHeight] = useState(1000);

  window.addEventListener("resize", () => {
    setHeight(window.innerHeight);
  });

  if (height == 1000) {
    setHeight(window.innerHeight);
    return <></>;
  } else if (screen.orientation.type === "landscape-primary" && height < 768) {
    return (
      <div className={styles.container}>
        <PortraitPhone />
        <div className={styles.text}>
          Please rotate your device to portrait mode to view this webpage.
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default dynamic(() => Promise.resolve(RotateDevice), { ssr: false });
