import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <p className="text-4xl font-bold">This is Home Page</p>
      <Link href="/nextjs" className="text-xl underline">
        1. with Next.js loading
      </Link>
      <Link href="/query" className="text-xl underline">
        2. with React Query
      </Link>
      <Link href="/query-ssr" className="text-xl underline">
        2. with React Query dehydrate/hydrate
      </Link>
    </div>
  );
}
