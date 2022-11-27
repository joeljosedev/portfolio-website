import type { NextPage } from "next";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/projects.module.css";

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>My Projects</div>
      <ProjectCard
        id="card1"
        title="Portfolio Website"
        description="My portfolio website built with Next.js and Tailwind CSS."
        libraries={["Next.js", "Tailwind CSS"]}
        url="https://github.com/joeljosedev/portfolio-website"
      />
      <ProjectCard
        id="card2"
        title="Titanic Data Analysis"
        description="Analysis of passenger data of the RMS Titanic."
        libraries={["NumPy", "Pandas", "Matplotlib"]}
        url="https://github.com/joeljosedev/Titanic-Data-Analysis"
      />
    </div>
  );
};

export default Projects;
