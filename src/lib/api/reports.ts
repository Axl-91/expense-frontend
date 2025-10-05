'use server'

import { getUser } from "./users.server"

export type Report = {
  id: string,
  source: string,
  amount: number,
  createdAt: Date,
  type: "income" | "expense"
}

export async function fetchReportsForUser() {
  const user = await getUser();

  const response =
    await fetch(
      `http://localhost:4000/report/user/${user.id}`
    )

  const reports: Report[] = await response.json();
  return reports
}
