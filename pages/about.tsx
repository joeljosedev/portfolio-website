import type { NextPage } from "next";
import styles from "../styles/about.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>About Me</div>
      <div id={styles.para1}>
        I am a software developer based in Kochi, India. My areas of expertise
        include web development, Linux system administration and configuring
        SOHO network infrastructure.
      </div>
      <div id={styles.para2}>
        I also have experience creating and configuring Windows and Linux
        virtual machines on VMware Workstation and Oracle VirtualBox.
      </div>
      <div id={styles.para3}>
        Programming languages, frameworks and tools I am proficient in:
      </div>
      <ul id={styles.list}>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C</li>
        <li>Git</li>
      </ul>
    </div>
  );
};

export default About;
