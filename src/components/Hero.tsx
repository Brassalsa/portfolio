import React from "react";
import { Container, InViewContainer } from ".";
import Image from "next/image";
import { TextEffect } from "./ui/Text-Effect";
import { ShowOnlyInView } from "./ui/InViewContainer";

const Hero = () => {
  return (
    <Container className="flex gap-6 flex-col md:flex-row justify-center items-center h-[90svh] overflow-hidden">
      <div id="hero" className="relative h-96 w-96">
        <Image
          fill
          src={"/svg/programmer.svg"}
          alt="programmer"
          className="bounce"
          priority={true}
        />
      </div>
      <InViewContainer>
        <h3 className="text-2xl text-red-400">Saurav Chauhan</h3>

        <h2 className="text-3xl sm:text-4xl">
          <ShowOnlyInView>
            <TextEffect preset="blur">Full Stack developer</TextEffect>
            <TextEffect preset="blur">and a Software Engineer</TextEffect>
          </ShowOnlyInView>
        </h2>
      </InViewContainer>
    </Container>
  );
};

export default Hero;
