'use client'

import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

import { useState } from "react";
import { useTheme } from "next-themes";

export default function Page() {

  const { systemTheme, theme, setTheme } = useTheme();

  const toggleTheme = (): void => {
    if (theme == 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  if (!theme) return <div>Loading...</div>

  return (
    <>
      <section className="md:w-2/5 w-3/5 flex flex-col justify-center m-auto h-screen gap-6">
        <h1 className="m-0 p-0 font-extrabold text-4xl">
          Welcome to <span className="text-zephyr_blue">Zephyr.</span> <br />
          Let's hang out and chat.
        </h1>
        <Signup />
      </section>
    </>
  );
}
