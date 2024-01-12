import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  img: string;
  label: string;
};

const ContactCard = (p: Props) => {
  return (
    <div className="group flex flex-col gap-3 justify-center items-center">
      <Link
        href={p.href}
        className="group-hover:scale-105 transition-all duration-300"
        target="_blank"
      >
        <Image src={p.img} width={50} height={50} alt={p.label + " img"} />
      </Link>

      <h3 className="text-lg">{p.label}</h3>
    </div>
  );
};

export default ContactCard;
