import Link from "next/link";


export default function Home() {
  return (
    <div className='flex h-full w-full justify-center items-center flex-col gap-4'>
        <p className='font-bold text-4xl'>This is Home Page</p>
        <Link href='/time' className='underline text-xl'>time</Link>
    </div>
  );
}
