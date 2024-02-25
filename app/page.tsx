"use client";

import {
  ChatBubbleLeftEllipsisIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/16/solid";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

import { useState } from "react";
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
