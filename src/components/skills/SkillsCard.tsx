import Image from "next/image";
import React from "react";
import { InViewContainer } from "..";
type Props = {
  label: string;
  url: string;
};

const SkillsCard = ({ label, url }: Props) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-fit h-fit hover:opacity-80 hover:scale-95 transition-all duration-300 cursor-pointer">
      <Image src={url} height={70} width={70} alt={label} />
      <span>{label}</span>
    </div>
  );
};

export default SkillsCard;
