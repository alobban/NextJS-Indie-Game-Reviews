import Link from 'next/link';
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
