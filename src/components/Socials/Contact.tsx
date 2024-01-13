import React from "react";
import { Container, Heading, InViewContainer } from "..";
import { mail, mediaLinks } from "@/utils";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <Container className="py-7 mb-6 overflow-x-hidden">
      <div id="contact">
        <Heading>Socials</Heading>
      </div>
      <InViewContainer
        onViewClassName="from-right"
        offViewClassName="invisible"
        className="flex gap-10 flex-wrap justify-center items-center"
      >
        <ContactCard
          label="Email"
          href={`mailto:${mail}`}
          img="/svg/email.svg"
        />

        {mediaLinks.map((i) => (
          <ContactCard key={i.name} label={i.name} href={i.url} img={i.img} />
        ))}
      </InViewContainer>
    </Container>
  );
};

export default Contact;
