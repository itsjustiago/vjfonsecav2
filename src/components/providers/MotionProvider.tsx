"use client";

import { MotionConfig } from "framer-motion";

/**
 * Force framer-motion to ignore the OS-level `prefers-reduced-motion` setting.
 *
 * Some users (Firefox + Windows accessibility "Animation effects" off, or
 * privacy.resistFingerprinting) end up with reduced motion forced on, which
 * makes the site feel completely flat. We want the entrance/hover motion to
 * play for everyone — the animations here are short, opacity/transform-based,
 * and pose no vestibular risk.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
