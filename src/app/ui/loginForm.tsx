'use client';

import {
  AtSymbolIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const logIn = () => { }

  return (
    <form action={logIn} className="space-y-3">
      <div className="flex-1 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-2xl`}>
          Login
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-200"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div className="mt-4 mb-10">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-200"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 py-3 text-lg font-semibold text-white hover:bg-indigo-700 transition cursor-pointer"
        >
          Log in
        </button>

        <Link
          href="/"
          className="mt-3 block w-full rounded-lg bg-gray-600 py-3 text-lg font-semibold text-white text-center hover:bg-gray-700 transition cursor-pointer"
        >
          Back
        </Link>

      </div>
    </form >
  );
}

