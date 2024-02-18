"use client";

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

  if (!theme) return <div>Loading...</div>;

  return (
    <>
      <section className="dark:bg-dark_4 bg-light_1">
        <p className="p-0 m-0 text-end cursor-pointer" onClick={toggleTheme}>Change Theme</p>
        <section className="md:w-2/5 w-4/5 flex flex-col justify-center m-auto h-screen gap-6 ">
          <h1 className="m-0 p-0 font-black text-4xl text-dark_3 dark:text-light_1">
            Welcome to <span className="text-zephyr_blue">Zephyr.</span> <br />
            Let's hang out and chat.
          </h1>
          <Signup />
        </section>
      </section>
    </>
  );
}
