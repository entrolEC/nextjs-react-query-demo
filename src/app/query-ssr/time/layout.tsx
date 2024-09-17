// app/posts/page.jsx
import {dehydrate, HydrationBoundary,} from '@tanstack/react-query'
import getQueryClient from "@/app/queryclient";
import {ReactNode} from "react";
import {getWeather} from "@/lib/fetcher";

export default async function Layout({children}: { children: ReactNode }) {
    const timeZone = 'Asia/Seoul'
    const queryClient = getQueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['weather', timeZone],
        queryFn: () => getWeather('Asia/Seoul')
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    )
}
