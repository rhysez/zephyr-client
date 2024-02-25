"use client"

import Login from "../components/auth/Login"
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
        <Login theme={theme} toggleTheme={toggleTheme} />
    )
}