"use client";

import { Badge } from "@/components/ui/badge";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiFramer,
  SiClerk,
  SiAuth0,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiTypescript,
  SiVisualstudiocode,
  SiNpm,
  SiReacthookform,
  SiReactrouter,
  SiPhp, 
  SiMysql
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React Native", icon: <TbBrandReactNative className="text-[#61DAFB]" /> },
      { name: "React Hook Form", icon: <SiReacthookform /> },
      { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" /> },
     
    ]
  },
  {
    title: "UI Frameworks & Libraries",
    skills: [
      { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
      { name: "Material UI", icon: <SiMui className="text-[#007FFF]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Framer Motion", icon: <SiFramer /> }
    ]
  },
  {
    title: "Authentication & Security",
    skills: [
      { name: "Clerk", icon: <SiClerk /> },
      { name: "Next-Auth", icon: <SiAuth0 /> }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> }
    ]
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "VS Code", icon: <SiVisualstudiocode className="text-[#007ACC]" /> },
      { name: "npm", icon: <SiNpm className="text-[#CB3837]" /> }
    ]
  }
];

export function SkillsWithIcons() {
  return (
    <div className="space-y-6">
      {skillCategories.map((category, index) => (
        <div key={index} className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
          <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, skillIndex) => (
              <Badge
                key={skillIndex}
                variant="secondary"
                className="text-sm py-1.5 px-3 flex items-center gap-2"
              >
                {skill.icon}
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}