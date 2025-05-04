import { useEffect, useRef, useState, type FC, type Ref } from "react";

import autoAnimate from "@formkit/auto-animate";
import TechStack from "@/components/TechStack";

type ExperienceItemProps = {
  name: string;
  duration: string;
  shortSummary: string;
  tech?: string[];
  children?: React.ReactNode;
};

const ExperienceItem = (props: ExperienceItemProps) => {
  const [open, setOpen] = useState(false);
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  return (
    <li
      ref={parent}
      className="group p-2 rounded-lg ease-in-out transition-all cursor-pointer hover:bg-white hover:text-black"
      onClick={() => setOpen((curr) => !curr)}
    >
      <h1 className="text-xl font-bold bullet relative grid grid-cols-2">
        {props.name}
        <span className="text-sm self-center justify-self-end">
          {props.duration}
        </span>
      </h1>
      <p className="pb-2">{props.shortSummary}</p>
      <TechStack tech={props.tech} />
      {open && props.children}
    </li>
  );
};

export default ExperienceItem;
