import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/pages/index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <Image
          src="/Joel-Jose.jpg"
          alt="Photo of Joel Jose"
          width={1730}
          height={1730}
          priority
        />
      </div>
      <div className={styles.text}>
        <div className={styles.name}>Joel Jose</div>
        <div className={styles.caption}>
          <div className={styles.first}>Software developer</div>
          <div className={styles.second}>Aviation enthusiast</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
