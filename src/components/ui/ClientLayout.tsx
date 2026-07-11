"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <>
          <CustomCursor />
          <Navbar />
          {children}
          {/* Global Noise Overlay for premium tactile feel */}
          <div className="noise-bg" />
        </>
      )}
    </>
  );
}
