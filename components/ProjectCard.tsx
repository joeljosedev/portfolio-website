import styles from "../styles/ProjectCard.module.css";

interface ProjectCardPropsType {
  id: number;
  title: string;
  description: string;
  libraries: Array<string>;
  url: string;
}

const ProjectCard = (props: ProjectCardPropsType) => {
  const cardId = "card" + props.id.toString();

  return (
    <div id={styles[cardId]} className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.library}>
        Libraries used:
        <ul className={styles.libraryList}>
          {props.libraries.map((library) => {
            return (
              <li key={library} className={styles.libraryListItem}>
                {library}
              </li>
            );
          })}
        </ul>
      </div>
      <a
        className={styles.link}
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.open}>Open</div>
      </a>
    </div>
  );
};

export default ProjectCard;
