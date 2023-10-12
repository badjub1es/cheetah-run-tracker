import React from "react";
import isEmail from "validator/lib/isEmail";
import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { createAccount } from "data/fetch";
import { validateStrongPassword } from "utils/validateStrongPassword";

const SignUp: NextPage = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [verifiedPassword, setVerifiedPassword] = React.useState("");
  const [isValidForm, setIsValidForm] = React.useState(false);
  const [hasSubmitted, setHasSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState({
    invalidPassword: false,
    invalidEmail: false,
    mismatchPassword: false,
    missingEmail: false,
    missingPassword: false,
    missingVerifiedPassword: false,
  });

  const handleLogin = async (email: string, password: string) => {
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/home",
    });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
  };

  const handleVerifyPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const verifiedPassword = event.target.value;
    setVerifiedPassword(verifiedPassword);
  };

  const validateForm = (
    email: string,
    password: string,
    verifiedPassword: string
  ): boolean => {
    const values = new Set(Object.values(errors));
    return values.has(true);
  };

  const submitCreate = () => {
    setHasSubmitted(true);
    if (isValidForm) {
      createAccount(email, password);
    }
  };

  React.useEffect(() => {
    setErrors({
      invalidPassword: !validateStrongPassword(password),
      invalidEmail: !isEmail(email),
      mismatchPassword: password !== verifiedPassword,
      missingEmail: email == "",
      missingPassword: password == "",
      missingVerifiedPassword: verifiedPassword == "",
    });
    setIsValidForm(validateForm(email, password, verifiedPassword));
  }, [email, password, verifiedPassword]);

  return (
    <div className="flex h-auto flex-col justify-center rounded-3xl bg-neutral-200/30 shadow-md">
      <div className="flex flex-col items-center justify-center gap-5 px-10 py-10">
        <h1 className="font-extrabold text-white">Sign up</h1>
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
            onChange={handleEmailChange}
            className="block w-full rounded-lg border border-frost bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-frost focus:ring-frost dark:border-frost dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-frost dark:focus:ring-frost"
            placeholder="Enter email"
            required
          />
          {hasSubmitted && errors?.invalidEmail && (
            <p className="text-red-700">Invalid Email</p>
          )}
          <label
            htmlFor="password"
            className=" block text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={handlePasswordChange}
            className="block w-full rounded-lg border border-frost bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-frost focus:ring-frost dark:border-frost dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-frost dark:focus:ring-frost"
            placeholder="Enter password"
            required
          />
          {hasSubmitted && errors?.invalidPassword && (
            <p className="text-red-700">Password sucks</p>
          )}
          <label
            htmlFor="verify-password"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Verify password
          </label>
          <input
            type="password"
            id="verify-password"
            onChange={handleVerifyPasswordChange}
            className="block w-full rounded-lg border border-frost bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-frost focus:ring-frost dark:border-frost dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-frost dark:focus:ring-frost"
            placeholder="Verify password"
            required
          />
          {hasSubmitted && errors?.mismatchPassword && (
            <p className="text-red-700">Passwords do not match</p>
          )}
        </div>
        <button
          className="rounded-lg border border-white p-2.5 text-white"
          onClick={submitCreate}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
