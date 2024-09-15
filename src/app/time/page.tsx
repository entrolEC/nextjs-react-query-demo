import Link from "next/link";

type WeatherData = {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    seconds: number,
    milliSeconds: number,
    dateTime: string,
    date: string,
    time: string,
    timeZone: string,
    dayOfWeek: string,
    dstActive: false
}

export default async function Time() {

    const res = await fetch('https://timeapi.io/api/time/current/zone?timeZone=Asia/Seoul',{
        cache: 'no-cache',
    })
    if(!res.ok){ throw new Error(res.statusText); }
    const json: WeatherData = await res.json();
    const {year, month, day, hour, minute, seconds, milliSeconds} = json;

    return (
        <div className='flex h-full w-full justify-center items-center flex-col gap-4'>
            <p className='font-bold text-4xl'>This is Time Page</p>
            <p className='text-xl'>{year}년&nbsp;{month}월&nbsp;{day}일&nbsp;&nbsp;{hour}시&nbsp;{minute}분&nbsp;{seconds}.{milliSeconds}초&nbsp;</p>
            <Link href='/' className='underline text-xl'>home</Link>
        </div>
    );
}
