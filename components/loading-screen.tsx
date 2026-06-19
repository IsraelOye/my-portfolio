"use client";

import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 900);
    const removeTimer = setTimeout(() => setVisible(false), 1300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

 return (
   <div
     className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-400 ${
       fadeOut ? "opacity-0" : "opacity-100"
     }`}
   >
     <h1 className="font-mono text-5xl font-bold text-foreground">
       IO
     </h1>
     <div className="mt-4 w-12 h-px overflow-hidden">
       <div className="h-full w-full bg-emerald-400 origin-left animate-[grow_0.8s_ease-out_forwards]" />
     </div>
     <style>{`
        @keyframes grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
     {/* <div className="mt-4 h-px w-12 bg-emerald-400 animate-pulse" /> */}
   </div>
 );
};
export default LoadingScreen;
