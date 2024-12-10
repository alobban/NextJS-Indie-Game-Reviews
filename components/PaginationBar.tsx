import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { ReactNode } from 'react';

interface PaginationBarProps {
  href: string;
  page: number;
  pageCount: number;
}

interface PaginationLinkProps {
  children: ReactNode;
  href: string;
  enabled: boolean;
}

export default function PaginationBar({
  href,
  page,
  pageCount,
}: PaginationBarProps): ReactNode {
  return (
    <div className="flex gap-2 pb-3">
      <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
        <ChevronLeftIcon className="h-5 w-5" />
        <span className="sr-only">Previous Page</span>
      </PaginationLink>
      <span>
        Page {page} of {pageCount}
      </span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        enabled={page < pageCount}
      >
        <ChevronRightIcon className="h-5 w-5" />
        <span className="sr-only">Next Page</span>
      </PaginationLink>
    </div>
  );
}

function PaginationLink({
  children,
  href,
  enabled,
}: PaginationLinkProps): ReactNode {
  if (!enabled) {
    return (
      <span className="border cursor-not-allowed rounded text-slate-300 text-sm">
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="border rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
    >
      {children}
    </Link>
  );
}
