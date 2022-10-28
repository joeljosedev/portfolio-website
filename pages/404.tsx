import Link from "next/link";
import styles from "../styles/404.module.css";

const Error404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.code}>404</div>
      <div className={styles.message}>Sorry, this page does not exist.</div>
      <Link href="/">
        <div className={styles.button}>Go to homepage</div>
      </Link>
    </div>
  );
};

export default Error404;
