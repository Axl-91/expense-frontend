'use server'

import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { User } from "./users.client";

export async function getUser() {
  const jwtCookie = await getCookie('jwt', { cookies })

  const res = await fetch("http://localhost:4000/user", {
    headers: {
      Cookie: `jwt=${jwtCookie}`,
    },
  })

  const user: User = await res.json();
  return user;
}
