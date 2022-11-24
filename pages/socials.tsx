import type { NextPage } from "next";
import styles from "../styles/socials.module.css";

const Socials: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>My Socials</div>
      <div className={styles.cardContainer}>
        <a href="https://wa.me/+919846642788" target="_blank" rel="noreferrer">
          <div className={styles.card1}>WhatsApp</div>
        </a>
        <a
          href="https://www.linkedin.com/in/joeljosedev"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.card2}>LinkedIn</div>
        </a>
        <a
          href="https://twitter.com/joeljosedev"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.card3}>Twitter</div>
        </a>
        <a href="https://t.me/joeljosedev" target="_blank" rel="noreferrer">
          <div className={styles.card4}>Telegram</div>
        </a>
      </div>
    </div>
  );
};

export default Socials;
