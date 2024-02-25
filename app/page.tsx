"use client";

import Signup from "./components/auth/Signup";

import { useTheme } from "next-themes";

export default function Page() {
  const { systemTheme, theme, setTheme } = useTheme();

  const toggleTheme = (): void => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <Signup theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}
