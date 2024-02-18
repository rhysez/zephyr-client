"use client";

export default function Signup() {
  return (
    <form action="" className="font-semibold ">
      <div>
        <label htmlFor="first_name" className="text-dark_3 dark:text-light_1">First name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          className="rounded-lg block w-full p-2.5 bg-light_2 dark:bg-dark_1 text-dark_3 dark:text-light_1 dark:placeholder-gray-400 "
        />

        <label htmlFor="last_name" className="text-dark_3 dark:text-light_1">Last name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          className="rounded-lg block w-full bg-light_2 dark:bg-dark_1 p-2.5 text-dark_3 dark:text-light_1 dark:placeholder-gray-400 "
        />

        <label htmlFor="email" className="text-dark_3 dark:text-light_1">E-mail address</label>
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-lg block w-full bg-light_2 dark:bg-dark_1 p-2.5 text-dark_3 dark:text-light_1 dark:placeholder-gray-400 "
        />

        <label htmlFor="password" className="text-dark_3 dark:text-light_1">Create a password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="rounded-lg block w-full bg-light_2 dark:bg-dark_1 p-2.5 text-dark_3 dark:text-light_1 dark:placeholder-gray-400 "
        />

        <label htmlFor="confirm_password" className="text-dark_3 dark:text-light_1">Retype your password</label>
        <input
          type="password"
          name="confirm_password"
          id="confirm_password"
          className="rounded-lg block w-full bg-light_2 dark:bg-dark_1 p-2.5 text-dark_3 dark:text-light_1 dark:placeholder-gray-400 "
        />

        <button className="btn border-0 block mt-4 bg-zephyr_blue text-slate-50" type="submit">Join Zephyr</button>
        <button className="btn border-0 mt-4 bg-zephyr_pink text-slate-50">Already joined? Log in</button>
      </div>
    </form>
  );
}
