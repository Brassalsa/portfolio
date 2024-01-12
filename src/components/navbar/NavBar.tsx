const NavBar = () => {
  return (
    <nav className="flex gap-2">
      <span className="flex-1">
        <a className="fancy" href={"/#top"}>
          Portfolio
        </a>
      </span>
      <a className="fancy" href={"/#skills"}>
        Skills
      </a>
      <a className="fancy" href={"/#projects"}>
        Projects
      </a>
      <a className="fancy" href={"/#contact"}>
        Socials
      </a>
    </nav>
  );
};

export default NavBar;
