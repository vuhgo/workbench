import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      aria-label={resolvedTheme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="theme-toggle"
    >
      {resolvedTheme === "light" ? "☽" : "☀"}
    </button>
  );
};
