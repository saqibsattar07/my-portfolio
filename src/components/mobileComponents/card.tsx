import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaCloudDownloadAlt, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const MobileCard = () => {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center">
      <div
        data-aos="zoom-in"
        className="card bg-blue-100 glass w-80 p-5 flex flex-col justify-center items-center"
      >
        <Image
          src="/assets/saqib.jpg"
          alt="profile-pic"
          width={300}
          height={300}
          className="rounded-md mx-auto"
        />

        <div className="card-body">
          {/* Name Here */}
          <h1 className="card-title text-2xl text-center font-bold tracking-tight uppercase">
            Saqib Sattar
          </h1>
          <h2 className="text-md text-center font-semibold text-blue-700">
            <Typewriter
              options={{
                strings: ["Web Developer", "UI/UX Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          {/* Social Media Accounts */}
          <div className="grid grid-cols-3 gap-2">
            {/* linkedin */}
            <div className="mt-4">
              <Link
                href="https://www.linkedin.com/in/saqib-sattar-0317b0272/"
                target="_blank"
                className="text-gray-600 hover:text-[#0077B5]"
              >
                <FaLinkedin className="text-4xl" />
              </Link>
            </div>
            {/* twitter */}
            <div className="mt-4">
              <Link
                href="https://x.com/saqib_sattar01"
                target="_blank"
                className="text-gray-600 hover:text-[#000000]"
              >
                <FaSquareXTwitter className="text-4xl" />
              </Link>
            </div>
            {/* github */}
            <div className="mt-4">
              <Link
                href="https://github.com/saqibsattar07"
                target="_blank"
                className="text-gray-600 hover:text-[#6e5494]"
              >
                <FaGithubSquare className="text-4xl" />
              </Link>
            </div>
          </div>
          {/* Download Resume Button */}
          <Link
            href={"/assets/resume/Resume.pdf"}
            className="mt-4 w-full"
            target="_blank"
          >
            <Button>
              <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
