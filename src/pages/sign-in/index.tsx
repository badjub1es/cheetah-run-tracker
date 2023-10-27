import React from "react";
import RoutePaths from "@customTypes/routes/RoutePaths";
import { signIn } from "next-auth/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const SignIn: NextPage = () => {
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
  };

  const handleLogin = (email: string, password: string) => {
    signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: RoutePaths.home,
    }).then((res) => {
      if (res?.ok) {
        router.push(RoutePaths.home);
      } else {
        setError(true);
      }
    });
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleLogin(email, password);
    }
  };

  return (
    <div className="flex h-auto flex-col justify-center self-center justify-self-center rounded-3xl bg-neutral-200/30 shadow-md">
      <div className="flex flex-col items-center justify-center gap-5 px-10 py-10">
        <h1 className="font-extrabold text-white">Welcome back</h1>
        {error && <p className="text-red-500">Invalid credentials</p>}
        <div className="flex flex-col gap-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            onKeyDown={handleSubmit}
            onChange={handleEmailChange}
            className="block w-full rounded-lg border border-frost bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-frost focus:ring-frost dark:border-frost dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-frost dark:focus:ring-frost"
            placeholder="Enter email"
            required
          />
          <label
            htmlFor="password"
            className=" block text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            onKeyDown={handleSubmit}
            onChange={handlePasswordChange}
            className="block w-full rounded-lg border border-frost bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-frost focus:ring-frost dark:border-frost dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-frost dark:focus:ring-frost"
            placeholder="Enter password"
            required
          />
          <p className="text-black">
            Need an account?{" "}
            <span
              onClick={() => router.push(RoutePaths.emailSignUp)}
              className="cursor-pointer text-lg font-bold text-white"
            >
              Sign up
            </span>
          </p>
        </div>
        <button
          className="rounded-lg border border-white p-2.5 text-white"
          onClick={() => handleLogin(email, password)}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignIn;
