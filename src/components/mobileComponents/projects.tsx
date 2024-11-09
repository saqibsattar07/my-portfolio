import Image from "next/image";
import Link from "next/link";

const MobileProjects = () => {
  // My Projects Here
  const projects = [
    {
      name: "Ecommerce Website",
      image: "Divisima.jpg",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, ipsa odit. Odio magni ullam expedita, beatae eos perspiciatis aperiam tempore dignissimos doloribus similique harum non est accusantium autem, eaque hic.",
      link: "#",
    },
    {
      name: "Ecommerce Website",
      image: "Divisima.jpg",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, ipsa odit. Odio magni ullam expedita, beatae eos perspiciatis aperiam tempore dignissimos doloribus similique harum non est accusantium autem, eaque hic.",
      link: "#",
    },
    {
      name: "Ecommerce Website",
      image: "Divisima.jpg",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, ipsa odit. Odio magni ullam expedita, beatae eos perspiciatis aperiam tempore dignissimos doloribus similique harum non est accusantium autem, eaque hic.",
      link: "#",
    },
    {
      name: "Ecommerce Website",
      image: "Divisima.jpg",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, ipsa odit. Odio magni ullam expedita, beatae eos perspiciatis aperiam tempore dignissimos doloribus similique harum non est accusantium autem, eaque hic.",
      link: "#",
    },
    {
      name: "Ecommerce Website",
      image: "Divisima.jpg",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, ipsa odit. Odio magni ullam expedita, beatae eos perspiciatis aperiam tempore dignissimos doloribus similique harum non est accusantium autem, eaque hic.",
      link: "#",
    },
    {
      name: "Ecommerce Website",
      image: "Divisima.jpg",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, ipsa odit. Odio magni ullam expedita, beatae eos perspiciatis aperiam tempore dignissimos doloribus similique harum non est accusantium autem, eaque hic.",
      link: "#",
    },
    {
      name: "Ecommerce Website",
      image: "Divisima.jpg",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, ipsa odit. Odio magni ullam expedita, beatae eos perspiciatis aperiam tempore dignissimos doloribus similique harum non est accusantium autem, eaque hic.",
      link: "#",
    },
    {
      name: "Ecommerce Website",
      image: "Divisima.jpg",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, ipsa odit. Odio magni ullam expedita, beatae eos perspiciatis aperiam tempore dignissimos doloribus similique harum non est accusantium autem, eaque hic.",
      link: "#",
    },
  ];
  return (
    <div className="w-full p-5">
      <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Projects
      </h2>
      <div className="mt-4 flex flex-wrap -m-4">
        {/* My Projects Here */}
        {projects.map((project, i) => (
          <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-64">
              <Image
                alt="gallery"
                width={1000}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={`/assets/projects/${project.image}`}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
                <h2 className="text-lg font-semibold tracking-tight">
                  {project.name}
                </h2>
                <p className="mt-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-sm font-medium tracking-tight hover:text-blue-500 hover:underline"
                >
                  <p className="mt-3">View Project</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileProjects;
