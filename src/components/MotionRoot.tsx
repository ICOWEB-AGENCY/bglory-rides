"use client";

import { MotionConfig } from "framer-motion";

/** Site-wide: visitors who ask their device for less motion get fades without movement. The page renders the same on the server either way. */
export default function MotionRoot({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
