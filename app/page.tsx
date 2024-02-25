"use client";

import Signup from "./components/auth/Signup";
import { useState, useEffect } from 'react'
import { useTheme } from "next-themes";

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
