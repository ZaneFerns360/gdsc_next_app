"use client"

import { useState } from "react";
import Button from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Button variant="ghost" size="sm" onClick={handleThemeToggle}>
      <div className="relative w-6 h-6">
        <Icons.sun className="absolute top-0 left-0 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icons.moon className="absolute top-0 left-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
