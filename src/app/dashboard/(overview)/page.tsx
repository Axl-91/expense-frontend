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
  })

  return (
    <div className=" p-4 bg-gray-50 border-3 border-gray-400 rounded-md text-black">
      {user ? (
        <>
          <div className="">
            <h1 className=" text-xl md:text-2xl font-bold border-b-2 border-gray-400">
              Welcome to your dashboard, {user.username}
            </h1>
          </div>
          <div>
            <h2 className="text-xl font-bold"> Reports:</h2>
          </div>
        </>
      ) : (
        <h1 className=" text-xl md:text-2xl font-bold border-b-2 border-gray-400">
          Loading your dashboard...
        </h1>
      )}
    </div>
  )
}

export default DashboardPage;
