'use client'
import Link from "next/link";
import {useQuery} from "@tanstack/react-query";
import {getWeather} from "@/lib/fetcher";


export default function Home() {
    const timeZone = 'Asia/Seoul'
    useQuery({
        queryKey: ['weather', timeZone],
        queryFn: () => getWeather('Asia/Seoul')
    })
    return (
        <div className='flex h-full w-full justify-center items-center flex-col gap-4'>
            <p className='font-bold text-4xl'>This is Query Home Page</p>
            <Link href='query/time' className='underline text-xl'>query time</Link>
        </div>
    );
}
