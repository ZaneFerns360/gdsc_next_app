"use client"
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState("dark"); // Set the default theme to "dark"

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Apply the "dark" class to the document when the component mounts on the client side
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    // Update the "dark" class whenever the theme state changes
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);


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
