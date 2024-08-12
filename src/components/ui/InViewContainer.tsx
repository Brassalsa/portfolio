"use client";
import {
  createContext,
  forwardRef,
  PropsWithChildren,
  ReactNode,
  Ref,
  useContext,
  useRef,
} from "react";
import { useInView } from "framer-motion";

type Props = {
  children?: ReactNode;
  className?: string;
  onViewClassName?: string;
  offViewClassName?: string;
};

const InViewCtx = createContext<{ isInView: boolean } | null>(null);
const useInViewCtx = () => {
  const ctx = useContext(InViewCtx);
  if (!ctx) {
    throw new Error("useInViewCtx must be used inside InViewContainer");
  }
  return ctx;
};

const InViewContainer = (
  {
    children,
    className = "",
    onViewClassName = "",
    offViewClassName = "",
  }: Props,
  ref: Ref<HTMLElement>
) => {
  const divRef = useRef<HTMLDivElement>(null);
  //@ts-expect-error
  const isInView = useInView(ref ? ref : divRef);
  return (
    <InViewCtx.Provider value={{ isInView }}>
      <div className="max-w-full" ref={divRef}>
        <div
          className={`${className} ${
            isInView ? onViewClassName : offViewClassName
          }`}
        >
          {children}
        </div>
      </div>
    </InViewCtx.Provider>
  );
};

export const ShowOnlyInView = ({ children }: PropsWithChildren) => (
  <>
    {useInViewCtx().isInView ? (
      children
    ) : (
      <div style={{ visibility: "hidden" }}>{children}</div>
    )}
  </>
);

export default forwardRef(InViewContainer);
