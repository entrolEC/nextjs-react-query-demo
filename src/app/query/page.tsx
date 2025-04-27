'use client';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getWeather } from '@/lib/fetcher';

export default function Home() {
  const timeZone = 'Asia/Seoul';
  useQuery({
    queryKey: ['weather', timeZone],
    queryFn: () => getWeather('Asia/Seoul'),
  });
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <p className="text-4xl font-bold">This is React Query Home Page</p>
      <Link href="query/time" className="text-xl underline">
        go
      </Link>
      <Link href="/" className="text-xl underline">
        Home
      </Link>
    </div>
  );
}
