import { cn } from "@/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Heading = ({ children, className }: Props) => {
  return (
    <h1 className={cn("text-2xl my-6 font-semibold " + className)}>
      {children}
    </h1>
  );
};

export default Heading;
