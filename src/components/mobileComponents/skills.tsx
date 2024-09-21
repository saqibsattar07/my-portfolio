import { FaCheckSquare } from "react-icons/fa";

const MobileSkills = () => {
  // My Skills Here
  let skills = [
    {
      name: "HTML",
      percentage: 90,
    },
    {
      name: "CSS",
      percentage: 85,
    },
    {
      name: "TypeScript/JS",
      percentage: 80,
    },
    {
      name: "React",
      percentage: 90,
    },
    {
      name: "Node.js",
      percentage: 70,
    },
    {
      name: "Next.js",
      percentage: 85,
    },
    {
      name: "Tailwind CSS",
      percentage: 80,
    },
    {
      name: "GitHub",
      percentage: 90,
    },
  ];
  return (
    <div className="w-full p-5">
      <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Skills
      </h2>
      <div className="mt-4 flex flex-wrap -m-4">
        {/* Progress Bar Here */}
        {skills.map((skill, i) => (
          <div key={i} className="p-4 w-full md:w-1/3">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                <FaCheckSquare className="text-white text-lg" />
              </div>
              <h2 className="text-lg font-semibold tracking-tight">
                {skill.name}
              </h2>
            </div>
            <div className="w-full h-1 rounded-lg bg-gray-500">
              <div
                style={{ width: `${skill.percentage}%` }}
                className="h-1 bg-blue-500 rounded-lg"
              />
            </div>
            <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">
              {skill.percentage}%
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileSkills;
