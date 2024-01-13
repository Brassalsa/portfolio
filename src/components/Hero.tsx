import React from "react";
import { Container, InViewContainer } from ".";
import Image from "next/image";

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
      <InViewContainer
        onViewClassName="from-right"
        offViewClassName="invisible"
      >
        <h3 className="text-2xl text-red-400">Saurav Chauhan</h3>
        <h2 className="text-3xl sm:text-4xl">
          Full Stack developer <br /> and a Software Engineer
        </h2>
      </InViewContainer>
    </Container>
  );
};

export default Hero;
