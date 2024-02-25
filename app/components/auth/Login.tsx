"use client";
import {
  ChatBubbleLeftEllipsisIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import Signup from "./Signup";

import { useState } from "react";
import { useTheme } from "next-themes";

export default function Login(props: any) {

  return (
    <section className="dark:bg-dark_4 bg-light_1">
      <section className="md:w-2/5 w-4/5 flex flex-col justify-center m-auto h-screen gap-6 ">
        <div className="p-0 m-0 text-end">
          {props.theme == "dark" ? (
            <MoonIcon
              onClick={props.toggleTheme}
              className="h-10 w-10 dark:text-light_1 text-dark_3 inline m-4 mb-0 cursor-pointer"
            />
          ) : (
            <SunIcon
              onClick={props.toggleTheme}
              className="h-10 w-10 dark:text-light_1 text-dark_3 inline m-4 mb-0 cursor-pointer"
            />
          )}
        </div>
        <h1 className="m-0 p-0 font-black text-4xl text-dark_3 dark:text-light_1">
          Welcome to <span className="text-zephyr_blue">Zephyr</span>
          <ChatBubbleLeftEllipsisIcon className="h-10 w-10 inline mx-2" />{" "}
          <br />
          Let&apos;s hang out and chat.
        </h1>
        <form action="" className="font-semibold ">
          <div>
            <label
              htmlFor="user_name"
              className="text-dark_3 dark:text-light_1"
            >
              Username
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="rounded-lg block w-full p-2.5 bg-light_2 dark:bg-dark_1 text-dark_3 dark:text-light_1 dark:placeholder-gray-400 "
            />

            <label htmlFor="password" className="text-dark_3 dark:text-light_1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-lg block w-full bg-light_2 dark:bg-dark_1 p-2.5 text-dark_3 dark:text-light_1 dark:placeholder-gray-400 "
            />

            <Link href="/dashboard">
              <button
                className="btn border-0 block mt-4 bg-zephyr_blue text-slate-50"
                type="submit"
              >
                Log in
              </button>
            </Link>
            <Link href="/">
              <button className="btn border-0 mt-4 bg-zephyr_pink text-slate-50">
                Want to join? Sign up
              </button>
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
}
