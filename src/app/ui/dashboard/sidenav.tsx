'use client'

import { PowerIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import ExpenseLogo from "../expenseLogo";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { handleLogout } from "@/lib/actions/auth";
import NavLinks from "./navlinks";


export default function SideNav() {
  const router = useRouter();

  const submitLogout =
    async (formEvent: FormEvent<HTMLFormElement>) => {
      formEvent.preventDefault();

      await handleLogout();
      router.push('/')
    }
  return (
    <div className="flex h-full flex-col  bg-white/5 border border-slate-700 px-3 py-4 md:px-2 shadow-inner">
      <Link
        href="/dashboard"
        className="mb-3 flex items-center justify-start h-20 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 p-2 shadow-sm border border-indigo-700"
      >
        <ExpenseLogo />
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow md:block" />
        <form onSubmit={submitLogout}>
          <button
            type="submit"
            className="flex h-[44px] w-full items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-300 font-medium 
             hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-200 
             transition-all duration-150 shadow-sm md:justify-start md:px-4 cursor-pointer"
          >
            <PowerIcon className="w-5 h-5" />
            <span className="hidden md:block">Sign Out</span>
          </button>

        </form>
      </div>
    </div>
  )

}

