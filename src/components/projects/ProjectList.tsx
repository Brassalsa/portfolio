import React from "react";
import { Container, Heading, InViewContainer, ProjectCard } from "..";
import { projects } from "@/utils";

const ProjectList = () => {
  return (
    <Container>
      <div id="projects">
        <Heading>Projects</Heading>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {projects.map((i) => (
            <InViewContainer
              onViewClassName="from-left"
              offViewClassName="invisible"
              key={i.label}
            >
              <ProjectCard
                img={i.img}
                label={i.label}
                live={i.live}
                github={i.github}
              >
                {i.info}
              </ProjectCard>
            </InViewContainer>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProjectList;
