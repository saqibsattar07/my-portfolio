import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css";

const Projects = () => {
  const projects = [
    {
      name: "Music School",
      image: "music-school.png",
      description:
        "A platform designed for learning music, featuring an engaging and interactive interface.",
      link: "https://github.com/saqibsattar07/music-school.git",
    },
    {
      name: "Real EState",
      image: "real-estate.png",
      description:
        "Discover properties with this responsive, modern real estate website.",
      link: "https://github.com/saqibsattar07/real-estate-website.git",
    },
    {
      name: "Todo App",
      image: "todo-app.png",
      description:
        "A minimalist todo app for efficient task management and organization.",
      link: "https://github.com/saqibsattar07/todo-app.git",
    },
    {
      name: "Weather Widget",
      image: "weather-widget.png",
      description:
        "A real-time weather widget displaying accurate and up-to-date weather information.",
      link: "https://github.com/saqibsattar07/Frontend-Projects.git",
    },
    {
      name: "Countdown Timer",
      image: "countdown-timer.png",
      description:
        "A customizable countdown timer for tracking important events with precision.",
      link: "https://github.com/saqibsattar07/Frontend-Projects.git",
    },
  ];

  return (
    <Card data-aos="zoom-in" className={styles.cardContainer}>
      <CardHeader>
        <CardTitle className={styles.cardTitle}>Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className={styles.projectsGrid}>
          {projects.map((project, i) => (
            <div key={i} className={styles.projectItem}>
              <div className={styles.imageContainer}>
                <Image
                  alt="gallery"
                  width={1000}
                  height={1000}
                  className={styles.image}
                  src={`/assets/projects/${project.image}`}
                />
                <div className={styles.overlay}>
                  <h2 className={styles.projectTitle}>{project.name}</h2>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <Link href={project.link} target="_blank">
                    <p className={styles.viewProjectLink}>View Project</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
