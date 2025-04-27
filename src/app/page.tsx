import Link from "next/link";


export default function Home() {
    return (
        <div className='flex h-full w-full justify-center items-center flex-col gap-4'>
            <p className='font-bold text-4xl'>This is Home Page</p>
            <Link href='/time' className='underline text-xl'>1. with Next.js loading</Link>
            <Link href='/query' className='underline text-xl'>2. with React Query</Link>
            <Link href='/query-ssr' className='underline text-xl'>2. with React Query dehydrate/hydrate</Link>
        </div>
    );
}
