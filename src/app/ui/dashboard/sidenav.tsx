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
    <div className="flex h-full flex-col bg-gray-50 border-r-3 border-gray-400 px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex items-center justify-start h-20 border-3 border-indigo-800 rounded-md bg-indigo-600 hover:bg-indigo-700 p-2"
        href="/dashboard"
      >
        < ExpenseLogo />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-1">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <form onSubmit={submitLogout}>
          <button
            type="submit"
            className="flex h-[48px] w-full grow border-2 border-gray-400 items-center justify-center gap-2 rounded-md bg-gray-200 text-black p-3 text-sm font-medium hover:bg-sky-100 hover:text-indigo-600 md:flex-none md:justify-start md:p-2 md:px-3 cursor-pointer">
            <PowerIcon className="w-6" />
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}

