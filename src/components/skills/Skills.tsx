import React from "react";
import { Container, Heading, InViewContainer } from "..";
import SkillsCard from "./SkillsCard";
import { skills } from "@/utils";

const Skills = () => {
  return (
    <Container>
      <div id="skills">
        <Heading>Skills</Heading>
        <div className="flex gap-6 mx-auto w-fit flex-wrap justify-center items-center max-w-5xl">
          {skills.map((i) => (
            <InViewContainer
              key={i.label}
              onViewClassName="from-right"
              offViewClassName="invisible"
            >
              <SkillsCard label={i.label} url={i.url} />
            </InViewContainer>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
