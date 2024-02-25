"use client";

import {
  ChatBubbleLeftEllipsisIcon,
  UserIcon,
  MoonIcon,
  SunIcon
} from "@heroicons/react/16/solid";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Header() {

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
    <header className="flex justify-between dark:bg-dark_4 bg-light_2 text-dark_1 dark:text-light_1">
      <div className="flex items-center gap-2 p-4">
        <h1 className="font-bold text-2xl">Zephyr</h1>
        <ChatBubbleLeftEllipsisIcon className="w-9 h-9 text-zephyr_blue" />
      </div>

      {theme == "dark" ? (
          <MoonIcon
            onClick={toggleTheme}
            className={`h-8 w-8 dark:text-light_1 text-dark_1 inline m-4 mb-0 cursor-pointer animate-jump`}
          />
        ) : (
          <SunIcon
            onClick={toggleTheme}
            className={`h-8 w-8 dark:text-light_1 text-dark_1 inline m-4 mb-0 cursor-pointer animate-jump`}
          />
        )}

      <div className="flex items-center gap-2 p-4">
        <p className="font-bold">John Doe</p>
        <UserIcon className="w-9 h-9" />
      </div>
    </header>
  );
}
