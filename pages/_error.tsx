import { NextPage, NextPageContext } from "next";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/_error.module.css";

interface ErrorPropsType {
  statusCode?: number;
}

const insertErrorMessage = (statusCode?: number) => {
  var message;

  if (statusCode === 404) {
    message = "Sorry, this page does not exist.";
  } else {
    message = "Sorry, an error occurred on the server.";
  }

  document.getElementById("message")!.innerHTML = message;
};

const Error: NextPage<ErrorPropsType> = ({ statusCode }) => {
  useEffect(() => {
    insertErrorMessage(statusCode);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.code}>{statusCode}</div>
      <div id="message" className={styles.message}></div>
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
