'use client'

import { getUser } from "@/lib/dal/users";
import { useEffect, useState } from "react";

type User = {
  username: string
}

function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser()
      setUser(user)
    }
    fetchUser();
  }, [])

  return (
    <div className="p-6 bg-white/5 border border-slate-700 rounded-xl shadow-md text-gray-100 h-full">
      {user ? (
        <>
          <header className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight border-b border-slate-700 pb-2">
              Welcome back, <span className="text-indigo-400">{user.username}</span>
            </h1>
          </header>

          <section>
            <h2 className="text-lg font-medium mb-3 text-indigo-300">Reports</h2>
            <p> This is where I should recollect data from reports of the users and show it </p>
          </section>
        </>
      ) : (
        <h1 className="text-2xl font-semibold tracking-tight border-b border-slate-700 pb-2">
          Loading your dashboard...
        </h1>
      )}
    </div>

  )
}

export default DashboardPage;
