import type { NextPage } from "next";
import styles from "../styles/pages/about.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>About Me</div>
      <div className={styles.para1}>
        I am a passionate AWS Data Engineer, and since July 2023, I have been
        deeply involved in AWS Glue Scripting and designing innovative data
        solutions using a variety of AWS tools and technologies. My journey in
        this field has enabled me to create efficient ETL pipelines and optimize
        SQL queries, all aimed at enhancing performance and creating seamless
        data workflows.
      </div>
      <div className={styles.para2}>
        My enthusiasm for data engineering is complemented by a commitment to
        continuous learning. I enjoy tackling new challenges and exploring
        different technologies to stay at the forefront of this dynamic field.
        This drive has inspired me to develop creative solutions that streamline
        data processing and empower organizations with valuable insights.
      </div>
      <div className={styles.para3}>
        Throughout my career, I have had the opportunity to integrate diverse
        data sources and implement advanced ETL processes, transforming raw data
        into actionable intelligence. This approach supports business strategies
        and fosters a culture in which data drives decision-making, ensuring the
        reliability and performance of data systems.
      </div>
      <div className={styles.para4}>
        Collaboration is central to my work. I take pride in working seamlessly
        with cross-functional teams and stakeholders, enhancing the performance
        of data systems and contributing to overall business success. My
        analytical mindset and structured approach to problem-solving have
        earned me a reputation as a dependable and resourceful team member.
      </div>
      <div className={styles.para5}>
        My career as an AWS Data Engineer is characterized by a combination of
        technical excellence, strategic thinking, and a passion for leveraging
        data to drive innovation. As I continue to grow in this field, I am
        excited to make a lasting impact on the organizations I serve and to
        advance the field of data engineering.
      </div>
    </div>
  );
};

export default About;
