"use client";

import { ReactLenis } from "lenis/react";

export function Providers({ children }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
