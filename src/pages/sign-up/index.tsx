import type { NextPage } from "next";
import { signIn } from "next-auth/react";

const SignUp: NextPage = () => {
  const handleClick = async () => {
    const res = await fetch("http://localhost:3000/api/user/create", {
      method: "POST",
      body: JSON.stringify({
        email: "some_email3@gmail.com",
        password: "sTr!O1ngpass",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
    } else {
    }
  };

  const handleLogin = async () => {
    signIn("credentials", {
      email: "some_email4@gmail.com",
      password: "sTr!O1ngpass",
      callbackUrl: "/home",
    });
  };

  return (
    <div className="flex h-auto flex-col justify-center rounded-3xl bg-neutral-200/30 shadow-md">
      <div className="flex flex-col items-center justify-center gap-5 px-10 py-16">
        Sign up page
      </div>
      <button onClick={handleClick}>fake sign up</button>
      <button onClick={handleLogin}>fake log in</button>
    </div>
  );
};

export default SignUp;
