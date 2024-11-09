import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import styles from "./education.module.css";

const Education = () => {
  const education = [
    {
      collegeName: "Government Pakistan Degree College Saeedpur",
      date: "April 2020",
      field: "Matriculation",
      details:
        "Completed my Matric education from Government Pakistan Degree College Saeedpur in April 2020. During this time, I developed a strong foundation in subjects such as science, mathematics, and social studies, while also actively participating in extracurricular activities. This experience enhanced my critical thinking and problem-solving skills, preparing me for further academic pursuits.",
    },
    {
      collegeName: "Government Pakistan Degree College Saeedpur",
      date: "April 2022",
      field: "Intermediate",
      details:
        "Completed my Intermediate education from Government Pakistan Degree College Saeedpur in April 2022. During this time, I developed a strong foundation in subjects such as science, mathematics, and social studies, while also actively participating in extracurricular activities. This experience enhanced my critical thinking and problem-solving skills, preparing me for further academic pursuits.",
    },
  ];

  return (
    <Card data-aos="zoom-in" className={styles.card}>
      <CardHeader>
        <CardTitle className={styles["card-title"]}>Education</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="-my-8 divide-y-2 divide-gray-100">
          {education.map((item, i) => (
            <div key={i} className={styles["education-item"]}>
              <div className={styles["date-container"]}>
                <span className={styles["field-title"]}>{item.field}</span>
                <span className={styles.date}>{item.date}</span>
              </div>
              <div className={styles["education-details"]}>
                <h2 className={styles["college-name"]}>{item.collegeName}</h2>
                <p className={styles.details}>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
