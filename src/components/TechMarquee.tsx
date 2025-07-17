"use client";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiVercel,
  SiRender,
  SiMysql,
  SiTailwindcss,
  SiNetlify,
  SiAmazon,
} from "react-icons/si";

const icons = [
  // Frontend
  { icon: FaHtml5, color: "text-orange-500", title: "HTML5" },
  { icon: FaCss3Alt, color: "text-blue-500", title: "CSS3" },
  { icon: FaJsSquare, color: "text-yellow-400", title: "JavaScript" },
  { icon: FaReact, color: "text-cyan-400", title: "React" },
  { icon: SiNextdotjs, color: "text-black dark:text-white", title: "Next.js" },
  { icon: SiTailwindcss, color: "text-sky-400", title: "Tailwind CSS" },

  // Backend
  { icon: FaNodeJs, color: "text-green-600", title: "Node.js" },
  { icon: SiExpress, color: "text-gray-600", title: "Express.js" },
  { icon: FaJava, color: "text-red-600", title: "Java" },

  // Database
  { icon: FaDatabase, color: "text-purple-500", title: "SQL" },
  { icon: SiMysql, color: "text-blue-700", title: "MySQL" },
  { icon: SiMongodb, color: "text-green-500", title: "MongoDB" },

  // Deployment
  { icon: SiVercel, color: "text-black dark:text-white", title: "Vercel" },
  { icon: SiRender, color: "text-blue-400", title: "Render" },
  { icon: SiNetlify, color: "text-green-600", title: "Netlify" },
  { icon: SiAmazon, color: "text-orange-500", title: "AWS" },

  // Tools
  { icon: FaGitAlt, color: "text-orange-600", title: "Git" },
  { icon: FaGithub, color: "text-black dark:text-white", title: "GitHub" },
];

const TechMarquee = () => {
  return (
    <Marquee pauseOnHover speed={40} gradient={false} className="py-4">
      {[...icons, ...icons].map(({ icon: Icon, color, title }, index) => (
        <div
          key={index}
          className={`mx-10 text-4xl ${color} transition-transform hover:scale-110`}
          title={title}
        >
          <Icon />
        </div>
      ))}
    </Marquee>
  );
};

export default TechMarquee;
