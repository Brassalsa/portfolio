import { Container, Heading, InViewContainer } from ".";
import Image from "next/image";

const About = () => {
  return (
    <Container>
      <Heading>About</Heading>
      <div className="text-lg flex flex-col md:flex-row gap-6 max-w-5xl justify-center items-center mx-auto py-10 ">
        <InViewContainer
          onViewClassName="from-left"
          offViewClassName="invisible"
          className="max-w-[500px]"
        >
          <span className="h-10 w-full"></span>
          Myself <span className="font-semibold">Saurav Chauhan</span>, I am a
          Full Stack developer, Software Engineer and a BTech Graduate. <br />I
          build stuff and play games in my free time.
        </InViewContainer>
        <Image
          src={"/svg/about.svg"}
          height={400}
          width={400}
          alt="about"
          className="scale-up-down"
        />
      </div>
    </Container>
  );
};

export default About;
