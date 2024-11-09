import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./education/education";
import Experience from "./experience/experience";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Contact from "./contact/contact";

export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-5">
        {/* Tabs Trigger Button */}
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      {/* Tabs Content here */}
      {/* Education */}
      <TabsContent value="education">
        <Education />
      </TabsContent>
      {/* Experience */}
      <TabsContent value="experience">
        <Experience />
      </TabsContent>
      {/* Skills */}
      <TabsContent value="skills">
        <Skills />
      </TabsContent>
      {/* Projects */}
      <TabsContent value="projects">
        <Projects />
      </TabsContent>
      {/* Contact */}
      <TabsContent value="contact">
        <Contact />
      </TabsContent>
    </Tabs>
  );
}
