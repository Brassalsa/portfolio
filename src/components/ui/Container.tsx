import { cn } from "@/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: Props) => {
  return (
    <section
      className={cn(
        "w-full max-w-screen-xl mx-auto overflow-x-hidden " + className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
