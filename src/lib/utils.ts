import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Typed bezier curve for Framer Motion ease transitions */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
