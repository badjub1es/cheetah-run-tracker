import React from "react";
import isEmail from "validator/lib/isEmail";
import type { NextPage } from "next";
import { signIn } from "next-auth/react";
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

  const handleCreateAccount = async (email: string, password: string) => {
    const res = await fetch(`${process.env.BASE_URL}/api/user/create`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      signIn("credentials", {
        email,
        password,
        callbackUrl: "/home",
      });
    } else {
      // display error messaging
    }
  };

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
      handleCreateAccount(email, password);
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
      <div className="flex flex-col items-center justify-center gap-5 px-10 py-16">
        Sign up page
      </div>
      <div className="flex flex-col gap-3">
        <input placeholder="Enter email" onChange={handleEmailChange} />
        {hasSubmitted && errors?.invalidEmail && (
          <p className="text-red-700">Invalid Email</p>
        )}
        <input placeholder="Enter password" onChange={handlePasswordChange} />
        {hasSubmitted && errors?.invalidPassword && (
          <p className="text-red-700">Password sucks</p>
        )}
        <input
          placeholder="Verify password"
          onChange={handleVerifyPasswordChange}
        />
        {hasSubmitted && errors?.mismatchPassword && (
          <p className="text-red-700">Passwords do not match</p>
        )}
      </div>
      <button onClick={submitCreate}>Create Account</button>

      {/* <button onClick={handleClick}>fake sign up</button> */}
      {/* <button onClick={handleLogin}>fake log in</button> */}
    </div>
  );
};

export default SignUp;
