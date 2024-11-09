import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCheckSquare } from "react-icons/fa";
import styles from "./skills.module.css";

const Skills = () => {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "TypeScript/JS", percentage: 80 },
    { name: "React", percentage: 90 },
    { name: "Node.js", percentage: 70 },
    { name: "Next.js", percentage: 85 },
    { name: "Tailwind CSS", percentage: 80 },
    { name: "GitHub", percentage: 90 },
  ];

  return (
    <Card data-aos="zoom-in" className={styles.card}>
      <CardHeader>
        <CardTitle className={styles["card-title"]}>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={styles["skills-container"]}>
          {skills.map((skill, i) => (
            <div key={i} className={styles["skill-item"]}>
              <div className="flex items-center mb-3">
                <div className={styles["icon-container"]}>
                  <FaCheckSquare className="text-lg" />
                </div>
                <h2 className={styles["skill-name"]}>{skill.name}</h2>
              </div>
              <div className={styles["progress-bar-bg"]}>
                <div
                  style={{ width: `${skill.percentage}%` }}
                  className={styles["progress-bar"]}
                />
              </div>
              <h3 className={styles.percentage}>{skill.percentage}%</h3>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;
