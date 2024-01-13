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
    <div className="max-w-full" ref={elementRef}>
      <div
        className={`${className} ${
          isInView ? onViewClassName : offViewClassName
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default InViewContainer;
