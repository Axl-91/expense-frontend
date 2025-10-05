import { getUser } from "@/lib/api/users.server";
import Link from "next/link";

async function DashboardPage() {
  const user = await getUser();

  return (
    <div className="flex flex-1 flex-col h-full">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight border-b border-slate-700 pb-2">
          Welcome back, <span className="text-indigo-400">{user.username}</span>
        </h1>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center">
        <strong className="text-white text-3xl md:text-4xl mb-5">Dashboard messages</strong>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
          <Link
            href="/dashboard/reports"
            className="root-button rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Reports
          </Link>
          <Link
            href="#"
            className="root-button rounded-lg bg-green-600 text-white hover:bg-green-700"
          >
            Create new Report
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;
