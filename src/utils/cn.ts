import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function cn(...classes: string[]) {
  return clsx(twMerge(...classes));
}

export default cn;
