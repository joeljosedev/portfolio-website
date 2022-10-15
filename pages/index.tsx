import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <Image
          src="/Joel-Jose.jpg"
          alt="Photo of Joel Jose"
          width={1730}
          height={1730}
        />
      </div>
      <div className={styles.text}>
        <div className={styles.name}>Joel Jose</div>
        <div className={styles.caption}>
          Next.js developer | Linux enthusiast
        </div>
      </div>
      <a href="mailto:mail@joeljose.dev" rel="noreferrer">
        <div className={styles.contact}>Contact me</div>
      </a>
    </div>
  );
};

export default Home;
