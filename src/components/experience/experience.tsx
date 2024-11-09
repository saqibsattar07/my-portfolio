import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import styles from "./experience.module.css";

const Experience = () => {
  const experience = [
    {
      companyName: "CodSoft",
      dateStart: "April 2023",
      dateEnd: "April 24",
      position: "Web Developer",
      details: "",
      work: [
        "Developed their official website",
        "Created an e-commerce website for a client",
        "Contributed to team tasks",
      ],
    },
    {
      companyName: "GIAIC",
      dateStart: "February 2024",
      dateEnd: "Present",
      position: "Front End Developer",
      details: "",
      work: ["Learned React.js", "Learned Next.js", "Learned Tailwind CSS"],
    },
  ];

  return (
    <Card data-aos="zoom-in" className={styles.card}>
      <CardHeader>
        <CardTitle className={styles["card-title"]}>Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="-my-8 divide-y-2 divide-gray-100">
          {experience.map((item, i) => (
            <div key={i} className={styles["experience-item"]}>
              <div className={styles["position-container"]}>
                <span className={styles["position-title"]}>
                  {item.position}
                </span>
                <span
                  className={styles.date}
                >{`${item.dateStart} - ${item.dateEnd}`}</span>
              </div>
              <div className={styles["company-details"]}>
                <h2 className={styles["company-name"]}>{item.companyName}</h2>
                <ul className={styles["work-list"]}>
                  {item.work.map((workItem, i) => (
                    <li key={i}>{workItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
