import { FaRust } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { SiRabbitmq } from "react-icons/si";
import { FaSwift } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiWebassembly } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiWebrtc } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { type FC } from "react";

type TechItemProps = { tech: string };
const TechItem: FC<TechItemProps> = (props) => {
  if (props.tech === "rust") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <FaRust size={22} className="inline" /> Rust
      </span>
    );
  }
  if (props.tech === "mysql") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <GrMysql size={22} className="inline" /> MySQL
      </span>
    );
  }
  if (props.tech === "c++") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <TbBrandCpp size={22} className="inline" />
      </span>
    );
  }
  if (props.tech === "python") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <FaPython size={22} className="inline" /> Python
      </span>
    );
  }
  if (props.tech === "nextjs") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <RiNextjsFill size={22} className="inline" /> NextJS
      </span>
    );
  }
  if (props.tech === "typescript") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <SiTypescript size={20} className="inline" /> TypeScript
      </span>
    );
  }
  if (props.tech === "golang") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <FaGolang size={24} className="inline" /> Golang
      </span>
    );
  }
  if (props.tech === "swift") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <FaSwift size={22} className="inline" /> Swift
      </span>
    );
  }
  if (props.tech === "java") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <FaJava size={20} className="inline" /> Java
      </span>
    );
  }
  if (props.tech === "spring") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <SiSpring size={20} className="inline" /> Spring
      </span>
    );
  }
  if (props.tech === "mongodb") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <SiMongodb size={20} className="inline" /> MongoDB
      </span>
    );
  }
  if (props.tech === "wasm") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <SiWebassembly size={20} className="inline" /> WebAssembly
      </span>
    );
  }
  if (props.tech === "rabbitmq") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <SiRabbitmq size={16} className="inline" /> RabbitMQ
      </span>
    );
  }
  if (props.tech === "react") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <FaReact size={20} className="inline" /> React
      </span>
    );
  }
  if (props.tech === "webrtc") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <SiWebrtc size={22} className="inline" /> WebRTC
      </span>
    );
  }
  if (props.tech === "postgres") {
    return (
      <span className="inline-flex items-center gap-1 font-inter bg-white text-black px-2 py-0.5 rounded-4xl group-hover:bg-black group-hover:text-white text-sm md:text-md">
        <BiLogoPostgresql size={24} className="inline" /> Postgres
      </span>
    );
  }

  return <></>;
};

type TechStackProps = {
  tech?: string[];
};

const TechStack: FC<TechStackProps> = (props) => {
  return (
    <div className="pb-2 flex gap-2 flex-wrap">
      {props.tech && props.tech.map((tch) => <TechItem key={tch} tech={tch} />)}
    </div>
  );
};

export default TechStack;
