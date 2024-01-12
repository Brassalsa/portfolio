import React from "react";
import { Container, Heading } from "..";
import SkillsCard from "./SkillsCard";
import { skills } from "@/utils";

const Skills = () => {
  return (
    <Container>
      <div id="skills">
        <Heading>Skills</Heading>
        <div className="flex gap-6 mx-auto w-fit flex-wrap justify-center items-center max-w-5xl">
          {skills.map((i) => (
            <SkillsCard key={i.label} label={i.label} url={i.url} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
