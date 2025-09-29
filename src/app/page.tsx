import Link from "next/link";
import ExpenseLogo from "./ui/expenseLogo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex flex-col justify-end rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-800 p-6 md:h-40 shadow-lg border border-indigo-800">
        <ExpenseLogo />
      </div>

      <div className="mt-5 flex grow gap-4 justify-center">
        <div className="flex flex-col justify-center items-center gap-6 w-full bg-gray-700 rounded-2xl shadow-xl border border-gray-800 text-center">
          <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-indigo-500  hover:shadow-2xl transition ease-in-out hover:animate-pulse" />
          <p className="text-xl md:text-3xl md:leading-relaxed text-gray-100">
            <strong className="text-white text-3xl md:text-4xl">Welcome to Expense App</strong>
            <br />
            Track your <span className="text-green-400 font-semibold">incomes</span> and <span className="text-red-400 font-semibold">expenses</span> in one place, generate detailed reports, and stay fully in control of your finances.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/login"
              className="root-button rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="root-button border border-gray-300 text-gray-100 hover:bg-gray-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
