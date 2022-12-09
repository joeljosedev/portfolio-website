import type { NextPage } from "next";
import data from "../Data.json";
import styles from "../styles/socials.module.css";

interface SocialCardPropsType {
  id: number;
  name: string;
  url: string;
}

const SocialCard = (props: SocialCardPropsType) => {
  const cardClass = "card" + props.id.toString();

  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <div className={styles[cardClass]}>{props.name}</div>
    </a>
  );
};

const Socials: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>My Socials</div>
      <div className={styles.cardContainer}>
        {data.data.socials.map((social, index) => {
          return (
            <SocialCard id={index + 1} name={social.name} url={social.url} />
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
