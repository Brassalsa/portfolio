import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex gap-2">
      <span className="flex-1">
        <Link className="fancy" href={"/#top"}>
          Portfolio
        </Link>
      </span>
      <Link className="fancy" href={"/#skills"}>
        Skills
      </Link>
      <Link className="fancy" href={"/#projects"}>
        Projects
      </Link>
      <Link className="fancy" href={"/#contact"}>
        Socials
      </Link>
    </nav>
  );
};

export default NavBar;
