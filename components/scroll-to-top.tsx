"use client";

import { useEffect } from "react";

const ScrollToTop = () => {
    useEffect(() => {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo(0, 0);
    }, []);
}

export default ScrollToTop;