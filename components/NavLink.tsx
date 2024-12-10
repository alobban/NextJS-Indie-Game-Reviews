'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface NavLinkProps {
  children: ReactNode;
  href: string;
  prefetch?: boolean;
}

export default function NavLink({
  children,
  href,
  prefetch,
}: NavLinkProps): ReactNode {
  const pathname = usePathname();
  if (pathname === href) {
    return <span className="text-orange-800 cursor-default">{children}</span>;
  }

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className="text-orange-800 hover:underline"
    >
      {children}
    </Link>
  );
}
