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

export async function getWeather(timeZone: string): Promise<WeatherData> {
    return await fetch(`https://timeapi.io/api/time/current/zone?timeZone=${timeZone}`)
        .then(res => res.json())
}
