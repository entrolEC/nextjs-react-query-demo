'use client'
import Link from "next/link";

export default function Home() {
    return (
        <div className='flex h-full w-full justify-center items-center flex-col gap-4'>
            <p className='font-bold text-4xl'>This is Query SSR Home Page</p>
            <Link href='query-ssr/time' className='underline text-xl'>query time</Link>
        </div>
    );
}
