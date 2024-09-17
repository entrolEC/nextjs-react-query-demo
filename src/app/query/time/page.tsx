'use client'

import {useQuery} from "@tanstack/react-query";
import Link from "next/link";
import Loading from "@/app/time/loading";
import {getWeather} from "@/lib/fetcher";

export default function Time() {
    const timeZone = 'Asia/Seoul'
    const {data, isLoading} = useQuery({
        queryKey: ['weather', timeZone],
        queryFn: () => getWeather('Asia/Seoul')
    })

    if (isLoading || !data) {
        return Loading();
    }

    const {year, month, day, hour, minute, seconds, milliSeconds} = data;

    return (
        <div className='flex h-full w-full justify-center items-center flex-col gap-4'>
            <p className='font-bold text-4xl'>This is Query Time Page</p>
            <p className='text-xl'>{year}년&nbsp;{month}월&nbsp;{day}일&nbsp;&nbsp;{hour}시&nbsp;{minute}분&nbsp;{seconds}.{milliSeconds}초&nbsp;</p>
            <Link href='/query' className='underline text-xl'>query home</Link>
        </div>
    );
}