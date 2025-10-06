'use client';

import { FaceFrownIcon } from '@heroicons/react/16/solid';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <FaceFrownIcon height={200} color='yellow' className='mb-10' />
      <h2 className="text-center font-bold text-2xl mb-5">Something went wrong!</h2>
      <button
        className="root-button rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}


