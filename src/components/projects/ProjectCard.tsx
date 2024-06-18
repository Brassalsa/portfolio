import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  img?: string;
  label: string;
  children?: ReactNode;
  github: string;
  live?: string;
};

const ProjectCard = (p: Props) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-80 w-60 hover:opacity-90 transition-all duration-200 p-4 rounded-md bg-white/10 relative group overflow-y-hidden">
      <Image
        src={p.img || "/svg/default.svg"}
        height={200}
        width={200}
        alt=""
        className="justify-self-start h-auto w-auto"
      />

      <div className="break-words flex flex-col gap-2 justify-center items-center">
        <h4 className="font-semibold text-lg">{p.label}</h4>
        {p.children}
      </div>
      <div className="absolute translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-700 bg-black/75 h-full w-full flex gap-4 justify-center items-center">
        <Link
          href={p.github}
          className="flex flex-col gap-2 justify-center items-center h-full hover:bg-white/20 transition-all duration-300 flex-1"
          target="_blank"
        >
          <Image src={"/svg/code.svg"} height={50} width={50} alt="github" />
          <span>Visit Github</span>
        </Link>

        {p.live && (
          <Link
            href={p.live}
            className="flex flex-col gap-2 justify-center items-center h-full hover:bg-white/20 transition-all duration-300 flex-1"
            target="_blank"
          >
            <Image src={"/svg/browse.svg"} height={50} width={50} alt="live" />
            <span>Live Preview</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
