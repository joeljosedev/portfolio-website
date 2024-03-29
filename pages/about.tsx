import type { NextPage } from "next";
import styles from "../styles/pages/about.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>About Me</div>
      <div className={styles.para1}>
        I am a software developer based in Kochi, India. My areas of expertise
        include web development, Linux system administration and configuring
        SOHO network infrastructure.
      </div>
      <div className={styles.para2}>
        I also have experience creating and configuring virtual machines on
        VMware Workstation and Oracle VirtualBox.
      </div>
      <div className={styles.para3}>
        Programming languages, frameworks and tools I am proficient in:
      </div>
      <ul className={styles.list}>
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
