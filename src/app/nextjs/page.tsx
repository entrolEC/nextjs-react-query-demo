'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <p className="text-4xl font-bold">This is Next.js Home Page</p>
      <Link href="nextjs/time" className="text-xl underline">
        go
      </Link>
      <Link href="/" className="text-xl underline">
        Home
      </Link>
    </div>
  );
}
