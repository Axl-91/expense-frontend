import { getUser } from "@/lib/api/users.server";

async function DashboardPage() {
  const user = await getUser();

  return (
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
  )
}

export default DashboardPage;
