import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>About Me</div>
      <div className={styles.paragraph}>
        My journey into software engineering began when I got my first laptop
        about a week before the first semester classes of my bachelor&apos;s
        degree in Computer Science and Engineering commenced.
      </div>
      <div className={styles.paragraph}>
        I had learnt a little C++ in school and was looking forward to learning
        more about programming in college. I was busy with college work in the
        first semester, so I could not find time to learn anything outside the
        course curriculum.
      </div>
      <div className={styles.paragraph}>
        Then COVID hit and lockdowns ensued.
      </div>
      <div className={styles.paragraph}>
        During lockdowns, I spent time reading documentation and learning more
        about programming. I also began experimenting with Linux distributions
        by creating VMs and tinkering with them.
      </div>
      <div className={styles.paragraph}>
        By the end of the second semester, I was comfortable working on Linux
        machines on the command line. I had also learnt Python by doing online
        courses on Coursera, followed by a data analysis project which I then
        uploaded to GitHub.
      </div>
      <div className={styles.paragraph}>
        In the third semester, I tried learning web development and decided to
        build a portfolio website for myself. So, I bought a domain and began
        learning HTML, CSS and JavaScript. By the end of the fourth semester, I
        decided to build the website with Next.js and Tailwind CSS.
      </div>
      <div className={styles.paragraph}>
        During the fifth semester of the bachelor&apos;s program, I was
        interested in learning Linux kernel programming and writing device
        drivers. I am currently in the sixth semester of the program, learning C
        and building the portfolio website.
      </div>
    </div>
  );
};

export default About;
