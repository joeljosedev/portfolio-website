import type { NextPage } from "next";
import dataList from "../DataList.json";
import styles from "../styles/socials.module.css";

interface SocialCardPropsType {
  id: number;
  name: string;
  url: string;
}

const SocialCard = (props: SocialCardPropsType) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <div
        className={styles.card}
        style={{
          animation: `${styles.load} 1s forwards ease-in ${
            0.25 * (props.id + 1)
          }s`,
        }}
      >
        {props.name}
      </div>
    </a>
  );
};

const Socials: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>My Socials</div>
      <div className={styles.cardContainer}>
        {dataList.data.socials.map((social, index) => {
          return (
            <SocialCard
              key={index}
              id={index + 1}
              name={social.name}
              url={social.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
