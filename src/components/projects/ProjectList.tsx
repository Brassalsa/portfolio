import React from "react";
import { Container, Heading, InViewContainer, ProjectCard } from "..";
import { projects } from "@/utils";

const ProjectList = () => {
  return (
    <Container>
      <div id="projects">
        <Heading>Projects</Heading>
        <div className="flex gap-4 flex-wrap justify-center ">
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
