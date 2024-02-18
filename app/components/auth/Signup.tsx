"use client";

export default function Signup() {
  return (
    <form action="" className="font-semibold">
      <div>
        <label htmlFor="first_name">First name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          className="rounded-lg block w-full p-2.5 dark:bg-dark_1 dark:border-zephyr_blue dark:placeholder-gray-400 dark:text-white"
        />

        <label htmlFor="last_name">Last name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          className="rounded-lg block w-full p-2.5 dark:bg-dark_1 dark:border-zephyr_blue dark:placeholder-gray-400 dark:text-white"
        />

        <label htmlFor="email">E-mail address</label>
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-lg block w-full p-2.5 dark:bg-dark_1 dark:border-zephyr_blue dark:placeholder-gray-400 dark:text-white"
        />

        <label htmlFor="password">Create a password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="rounded-lg block w-full p-2.5 dark:bg-dark_1 dark:border-zephyr_blue dark:placeholder-gray-400 dark:text-white"
        />

        <label htmlFor="confirm_password">Retype your password</label>
        <input
          type="password"
          name="confirm_password"
          id="confirm_password"
          className="rounded-lg block w-full p-2.5 dark:bg-dark_1 dark:border-zephyr_blue dark:placeholder-gray-400 dark:text-white"
        />

        <button className="btn mt-4 bg-zephyr_blue text-slate-50" type="submit">Join Zephyr</button>
      </div>
    </form>
  );
}
