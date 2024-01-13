import { cn } from "@/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Heading = ({ children, className }: Props) => {
  return (
    <h1
      className={cn(
        "text-2xl sm:text-3xl my-6 font-semibold  heading " + className
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
