import { NextPage, NextPageContext } from "next";
import Link from "next/link";
import styles from "../styles/_error.module.css";

interface ErrorPropsType {
  statusCode?: number;
}

const Error: NextPage<ErrorPropsType> = ({ statusCode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.code}>{statusCode}</div>
      <div className={styles.message}>
        Sorry, an error occurred on the server.
      </div>
      <Link href="/">
        <div className={styles.button}>Go to homepage</div>
      </Link>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  var statusCode;

  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    statusCode = 404;
  }

  return { statusCode };
};

export default Error;
