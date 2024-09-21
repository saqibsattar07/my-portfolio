import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  // My Experience Here
  let experience = [
    {
      companyName: "CodSoft",
      dateStart: "April 2023",
      dateEnd: "April 24",
      position: "Front End Developer",
      details:
        "Completed my Intermediate education from Government Pakistan Degree College Saeedpur in April 2022. During this time, I developed a strong foundation in subjects such as science, mathematics, and social studies, while also actively participating in extracurricular activities. This experience enhanced my critical thinking and problem-solving skills, preparing me for further academic pursuits.",
      work: [
        "develop their official website",
        "maked e-commerce website for client",
        "have contributed on the team task",
      ],
    },
    {
      companyName: "CodSoft",
      dateStart: "April 2023",
      dateEnd: "April 24",
      position: "Front End Developer",
      details:
        "Completed my Intermediate education from Government Pakistan Degree College Saeedpur in April 2022. During this time, I developed a strong foundation in subjects such as science, mathematics, and social studies, while also actively participating in extracurricular activities. This experience enhanced my critical thinking and problem-solving skills, preparing me for further academic pursuits.",
      work: ["develop their official website"],
    },
    {
      companyName: "CodSoft",
      dateStart: "April 2023",
      dateEnd: "April 24",
      position: "Front End Developer",
      details:
        "Completed my Intermediate education from Government Pakistan Degree College Saeedpur in April 2022. During this time, I developed a strong foundation in subjects such as science, mathematics, and social studies, while also actively participating in extracurricular activities. This experience enhanced my critical thinking and problem-solving skills, preparing me for further academic pursuits.",
      work: [
        "develop their official website",
        "maked e-commerce website for client",
      ],
    },
  ];
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {/* Data Here */}
          {experience.map((item, i) => (
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700 uppercase">
                  {item.position}
                </span>
                <span className="mt-1 text-gray-500 text-sm">{`${item.dateStart} - ${item.dateEnd}`}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                  {item.companyName}
                </h2>

                <ul className="ml-4 list-disc mr-1">
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
