import type { NextPage } from "next";
import dynamic from "next/dynamic";
import ProjectCard from "../components/ProjectCard";
import dataList from "../DataList.json";
import styles from "../styles/projects.module.css";

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>My Projects</div>
      {dataList.data.projects.reverse().map((project, index) => {
        return (
          <ProjectCard
            key={index}
            id={index + 1}
            title={project.title}
            description={project.description}
            libraries={project.libraries}
            url={project.url}
          />
        );
      })}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Projects), { ssr: false });
