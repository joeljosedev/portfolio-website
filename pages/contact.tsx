import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title1}>My Accounts</div>
      <div className={styles.cardContainer}>
        <a href="https://wa.me/+919846642788" target="_blank">
          <div className={styles.card1}>WhatsApp</div>
        </a>
        <a href="https://www.linkedin.com/in/joeljosedev" target="_blank">
          <div className={styles.card2}>LinkedIn</div>
        </a>
        <a href="https://github.com/joeljosedev" target="_blank">
          <div className={styles.card3}>GitHub</div>
        </a>
        <a href="https://t.me/joeljosedev" target="_blank">
          <div className={styles.card4}>Telegram</div>
        </a>
      </div>
      <div className={styles.title2}>Contact Me</div>
      <div className={styles.cardContainer}>
        <a href="mailto:mail@joeljose.dev" target="_blank">
          <div className={styles.card5}>Email</div>
        </a>
        <a href="/Joel-Jose-Resume.pdf" target="_blank">
          <div className={styles.card6}>Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
