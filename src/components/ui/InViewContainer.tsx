"use client";
import { ReactNode } from "react";
import { useInView } from "@/hooks";

type Props = {
  children?: ReactNode;
  className?: string;
  onViewClassName?: string;
  offViewClassName?: string;
};

const InViewContainer = ({
  children,
  className = "",
  onViewClassName = "",
  offViewClassName = "",
}: Props) => {
  const [isInView, elementRef] = useInView();
  return (
    <span className="" ref={elementRef}>
      <div
        className={`${className} ${
          isInView ? onViewClassName : offViewClassName
        }`}
      >
        {children}
      </div>
    </span>
  );
};

export default InViewContainer;
