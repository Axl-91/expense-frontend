'use client'

import {
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Reports',
    href: '/dashboard/reports',
    icon: DocumentDuplicateIcon,
  }
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[44px] items-center gap-3 rounded-lg px-3 text-sm font-medium transition-all duration-150',
              'md:justify-start md:px-4',
              isActive
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                : 'text-slate-300 hover:bg-slate-700/40 hover:text-indigo-200'
            )}
          >
            <LinkIcon className={clsx('w-5 h-5', isActive && 'text-indigo-400')} />
            <span className="hidden md:block truncate">{link.name}</span>
          </Link>
        );
      })}
    </>

  );
}

