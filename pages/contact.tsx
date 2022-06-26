import styles from "../styles/contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>My Accounts</div>
      <div className={styles.cardContainer}>
        <a href="https://wa.me/+919846642788">
          <div className={styles.card}>WhatsApp</div>
        </a>
        <a href="https://www.linkedin.com/in/joeljosedev">
          <div className={styles.card}>LinkedIn</div>
        </a>
        <a href="https://github.com/joeljosedev">
          <div className={styles.card}>GitHub</div>
        </a>
        <a href="https://t.me/joeljosedev">
          <div className={styles.card}>Telegram</div>
        </a>
      </div>
      <div className={styles.title}>Contact Me</div>
      <div className={styles.cardContainer}>
        <a href="mailto:mail@joeljose.dev">
          <div className={styles.card}>Email</div>
        </a>
        <a href="/resume.pdf" target="_blank">
          <div className={styles.card}>Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
