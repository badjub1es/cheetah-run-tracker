import { signIn } from "next-auth/react";

export const createAccount = async (email: string, password: string) => {
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
    return res;
  } else {
    return res;
  }
};
