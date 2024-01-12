import {
  About,
  Contact,
  Container,
  Hero,
  ProjectList,
  Skills,
} from "@/components";

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Skills />
      <ProjectList />
      <Contact />
    </Container>
  );
}
