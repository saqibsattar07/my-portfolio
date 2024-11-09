"use client";
import { useEffect } from "react";
// for animate on scroll library
import AOS from "aos";
import "aos/dist/aos.css";
// my components
import { Sidebar } from "./sidebar/sidebar";
import { Detail } from "./detail";
import MobileCard from "./mobileComponents/card";
import MobileSkills from "./mobileComponents/skills";
import MobileEducation from "./mobileComponents/education";
import MobileExperience from "./mobileComponents/experience";
import MobileProjects from "./mobileComponents/projects";
import MobileContact from "./mobileComponents/contact";

const MainPage = () => {
  // useEffect for animate on scroll library
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div>
      {/* Mobile View */}
      <div className="overflow-x-hidden bg-white h-screen md:hidden">
        {/* card */}
        <MobileCard />
        {/* education */}
        <MobileEducation />
        {/* experience */}
        <MobileExperience />
        {/* skills */}
        <MobileSkills />
        {/* projects */}
        <MobileProjects />
        {/* contact */}
        <MobileContact />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex md:overflow-hidden md:h-screen">
        {/* side bar */}
        <div className="w-1/5">
          <Sidebar />
        </div>
        {/* main */}
        <div className="w-full">
          <Detail />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
