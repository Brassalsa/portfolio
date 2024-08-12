import { Container, Heading, InViewContainer } from ".";
import Image from "next/image";
import { ShowOnlyInView } from "./ui/InViewContainer";
import { TextEffect } from "./ui/Text-Effect";

const About = () => {
  return (
    <Container>
      <Heading>About</Heading>
      <div className="text-lg flex flex-col md:flex-row gap-6 max-w-5xl justify-center items-center mx-auto py-10 ">
        <InViewContainer className="max-w-[500px]">
          <span className="h-10 w-full"></span>

          <ShowOnlyInView>
            <TextEffect preset="slide">
              Myself Saurav Chauhan, I am a Full Stack developer, Software
              Engineer and a BTech Graduate.I build stuff and play games in my
              free time.
            </TextEffect>
          </ShowOnlyInView>
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
