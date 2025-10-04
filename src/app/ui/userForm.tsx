'use client';

import { handleLogin, handleSignup } from '@/lib/actions/auth';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function UserForm() {
  const [hasError, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const pathname = usePathname();
  const isSignup = pathname === '/signup'

  const handleSubmit =
    async (formEvent: FormEvent<HTMLFormElement>) => {
      formEvent.preventDefault();
      setIsPending(true);

      const formData = new FormData(formEvent.currentTarget);
      const errMsg = isSignup ? await handleSignup(formData) : await handleLogin(formData)

      if (errMsg) {
        setError(errMsg);
        setIsPending(false);
        return;
      }
      router.push('/dashboard')
    }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex-1 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 px-6 pb-4 pt-8" >
        <h1 className={`mb-3 text-2xl`}>
          {isSignup ? 'Sign Up' : 'Login'}
        </h1>
        {hasError && (
          <div className="flex justify-center mt-4">
            <div className="flex items-center justify-center gap-2 rounded-lg border border-red-300 bg-red-100 py-2 w-full max-w-sm">
              <ExclamationCircleIcon className="h-6 w-6 text-red-600" />
              <p className="text-sm font-medium text-red-700">{hasError}</p>
            </div>
          </div>
        )}

        {isSignup && (
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-200"
              >
                Username
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  required
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
        )}

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
          type='submit'
          className="w-full rounded-lg bg-indigo-600 py-3 text-lg font-semibold text-white hover:bg-indigo-700 transition cursor-pointer"
          aria-disabled={isPending}
        >
          {isSignup ? 'Sign Up' : 'Login'}
        </button>

        <Link
          href="/"
          className="mt-3 block w-full rounded-lg bg-gray-600 py-3 text-lg font-semibold text-white text-center hover:bg-gray-700 transition cursor-pointer"
        >
          Back
        </Link>

      </div >
    </form >
  );
}

