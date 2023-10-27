import React from "react";
import Check from "@components/Icons/Check";
import isEmail from "validator/lib/isEmail";
import LoadingSpinner from "@components/Icons/LoadingSpinner";
import type { NextPage } from "next";
import { createAccount } from "data/fetch";
import {
  hasLowercase,
  hasNumeric,
  hasSpecial,
  hasUppercase,
  validateStrongPassword,
} from "utils/validateStrongPassword";

const errorInit = {
  invalidPassword: false,
  invalidEmail: false,
  mismatchPassword: false,
  missingEmail: false,
  missingPassword: false,
  missingVerifiedPassword: false,
};

const SignUp: NextPage = () => {
  const [email, setEmail] = React.useState<string>("");
  const [errors, setErrors] = React.useState(errorInit);
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState<string>("");
  const [fetchError, setFetchError] = React.useState("");
  const [isValidForm, setIsValidForm] = React.useState(false);
  const [hasSubmitted, setHasSubmitted] = React.useState(false);
  const [passwordIsValid, setPasswordIsValid] = React.useState(false);
  const [verifiedPassword, setVerifiedPassword] = React.useState("");

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

  const validateForm = (): boolean => {
    const values = new Set(Object.values(errors));
    return values.has(true);
  };

  const resetInputs = React.useCallback(() => {
    setEmail("");
    setPassword("");
    setVerifiedPassword("");
    setHasSubmitted(false);
  }, []);

  const submitCreate = async () => {
    setHasSubmitted(true);
    if (isValidForm) {
      setLoading(true);
      const res = await createAccount(email, password);
      if (res.status !== 201) {
        const data = await res?.json();
        setLoading(false);
        setFetchError(data.body);
        resetInputs();
      }
    }
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      submitCreate();
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
    setIsValidForm(validateForm());
  }, [email, password, verifiedPassword]);

  React.useEffect(() => {
    setPasswordIsValid(validateStrongPassword(password));
  }, [password]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex h-auto flex-col justify-center self-center justify-self-center rounded-3xl bg-neutral-200/30 shadow-md">
      <div className="flex flex-col items-center justify-center gap-5 px-10 py-10">
        <h1 className="font-extrabold text-white">Sign up</h1>
        {fetchError && <p className="text-red-500">{fetchError}</p>}
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
            onKeyDown={handleSubmit}
            onChange={handlePasswordChange}
            className="block w-full rounded-lg border border-frost bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-frost focus:ring-frost dark:border-frost dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-frost dark:focus:ring-frost"
            placeholder="Enter password"
            required
          />
          {hasSubmitted && errors?.invalidPassword && (
            <p className="text-red-700">Password sucks</p>
          )}
          <div
            className={`rounded-lg border ${
              passwordIsValid ? "border-green-500" : "border-white"
            } bg-neutral-200/60 p-5 text-sm text-asphalt`}
          >
            <p>Password must contain</p>
            <ul className="list-disc px-6">
              <div className="flex">
                <li>more than 7 characters</li>
                {password?.length > 7 && <Check />}
              </div>
              <div className="flex">
                <li>one or more uppercase characters</li>
                {hasUppercase(password) && <Check />}
              </div>
              <div className="flex">
                <li>one or more lowercase characters</li>
                {hasLowercase(password) && <Check />}
              </div>
              <div className="flex">
                <li>one or more numeric values</li>
                {hasNumeric(password) && <Check />}
              </div>
              <div className="flex">
                <li>one or more special characters, i.e. $%$!</li>
                {hasSpecial(password) && <Check />}
              </div>
            </ul>
          </div>
          <label
            htmlFor="verify-password"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Verify password
          </label>
          <input
            type="password"
            id="verify-password"
            onKeyDown={handleSubmit}
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
