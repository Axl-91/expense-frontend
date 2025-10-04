'use server'

import axios, { AxiosResponse } from "axios"
import { cookies } from "next/headers";
import { User } from "@/lib/api/users";

export type Report = {
  id: string,
  source: string,
  amount: number,
  createdAt: Date,
  type: "income" | "expense"
}

export async function fetchReportsForUser() {
  const cookieStore = await cookies()
  const cookieHeader = cookieStore.get("jwt")?.value

  const res: AxiosResponse<User> = await axios.get("http://localhost:4000/user", {
    headers: {
      Cookie: cookieHeader ? `jwt=${cookieHeader}` : "",
    },
  })
  const user = res.data;

  const response: AxiosResponse<Report[]> =
    await axios.get(
      `http://localhost:4000/report/user/${user.id}`
    )

  return response.data
}
