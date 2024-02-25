"use client";
import Link from "next/link";
import {
  ChatBubbleLeftEllipsisIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/16/solid";

import { useState } from "react";

export default function Signup(props: any) {

  return (
    <section className="dark:bg-dark_4 bg-light_1">
    <section className="md:w-2/5 w-4/5 flex flex-col justify-center m-auto h-screen gap-6 ">
      <div className="p-0 m-0 text-end">
        {props.theme == "dark" ? (
          <MoonIcon
            onClick={props.toggleTheme}
            className={`h-10 w-10 dark:text-light_1 text-dark_1 inline m-4 mb-0 cursor-pointer animate-jump`}
          />
        ) : (
          <SunIcon
            onClick={props.toggleTheme}
            className={`h-10 w-10 dark:text-light_1 text-dark_1 inline m-4 mb-0 cursor-pointer animate-jump`}
          />
        )}
      </div>
      <h1 className="m-0 p-0 font-black text-4xl text-dark_1 dark:text-light_1">
        Welcome to <span className="text-zephyr_blue">Zephyr</span>
        <ChatBubbleLeftEllipsisIcon className="h-10 w-10 inline mx-2 " />{" "}
        <br />
        Let&apos;s hang out and chat.
      </h1>
      <form action="" className="font-semibold ">
      <div>
        <label htmlFor="first_name" className="text-dark_1 dark:text-light_1">First name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          className="rounded-lg block w-full p-2.5 bg-light_2 dark:bg-dark_1 text-dark_1 dark:text-light_1 dark:placeholder-gray-400 "
        />

        <label htmlFor="last_name" className="text-dark_1 dark:text-light_1">Last name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          className="rounded-lg block w-full bg-light_2 dark:bg-dark_1 p-2.5 text-dark_1 dark:text-light_1 dark:placeholder-gray-400 "
        />

        <label htmlFor="email" className="text-dark_1 dark:text-light_1">E-mail address</label>
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-lg block w-full bg-light_2 dark:bg-dark_1 p-2.5 text-dark_1 dark:text-light_1 dark:placeholder-gray-400 "
        />

        <label htmlFor="password" className="text-dark_1 dark:text-light_1">Create a password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="rounded-lg block w-full bg-light_2 dark:bg-dark_1 p-2.5 text-dark_1 dark:text-light_1 dark:placeholder-gray-400 "
        />

        <label htmlFor="confirm_password" className="text-dark_1 dark:text-light_1">Retype your password</label>
        <input
          type="password"
          name="confirm_password"
          id="confirm_password"
          className="rounded-lg block w-full bg-light_2 dark:bg-dark_1 p-2.5 text-dark_1 dark:text-light_1 dark:placeholder-gray-400 "
        />

        <Link href='/dashboard'><button className="btn border-0 block mt-4 bg-zephyr_blue text-slate-50" type="submit">Join Zephyr</button></Link>
        <Link href='/login'><button className="btn border-0 mt-4 bg-zephyr_pink text-slate-50">Already joined? Log in</button></Link>
      </div>
    </form>
    </section>
  </section>
  );
}
