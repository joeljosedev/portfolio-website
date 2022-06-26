import styles from "../styles/projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>My Projects</div>
      <div className={styles.card}>
        <div className={styles.cardTitle}>
          <a
            className={styles.cardTitleLink}
            href="https://github.com/joeljosedev/portfolio-website"
            target="_blank"
          >
            Portfolio Website
          </a>
        </div>
        <div className={styles.cardDescription}>
          My portfolio website built with Next.js and Tailwind CSS.
        </div>
        <div className={styles.cardLibrary}>
          Libraries used:
          <ul className={styles.cardLibraryList}>
            <li className={styles.cardLibraryListItem}>Next.js</li>
            <li className={styles.cardLibraryListItem}>Tailwind CSS</li>
          </ul>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardTitle}>
          <a
            className={styles.cardTitleLink}
            href="https://github.com/joeljosedev/Titanic-Data-Analysis"
            target="_blank"
          >
            Titanic Data Analysis
          </a>
        </div>
        <div className={styles.cardDescription}>
          Analysis of passenger data of the RMS Titanic.
        </div>
        <div className={styles.cardLibrary}>
          Libraries used:
          <ul className={styles.cardLibraryList}>
            <li className={styles.cardLibraryListItem}>NumPy</li>
            <li className={styles.cardLibraryListItem}>Pandas</li>
            <li className={styles.cardLibraryListItem}>Matplotlib</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
