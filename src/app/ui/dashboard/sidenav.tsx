import { PowerIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import ExpenseLogo from "../expenseLogo";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-800">
      <Link
        className="mb-2 flex items-center justify-start h-20 rounded-md bg-indigo-600 hover:bg-indigo-700 p-2"
        href="/dashboard"
      >
        < ExpenseLogo />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server'
            //TODO: Add logout
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-200 text-black p-3 text-sm font-medium hover:bg-sky-100 hover:text-indigo-600 md:flex-none md:justify-start md:p-2 md:px-3 cursor-pointer">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}

