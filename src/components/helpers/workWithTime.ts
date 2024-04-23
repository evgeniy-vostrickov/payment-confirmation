export const convertMinutesToSeconds = (minutes: number): number => minutes * 60
export const convertTimeToString = (time: number): string => time < 10 ? '0' + time.toString() : time.toString()
const getMinutes = (time: number) => Math.floor(time / 60)
const getSeconds = (time: number) => time % 60
export const getCurrentTime = (currentTime: number) => [convertTimeToString(getMinutes(currentTime)), convertTimeToString(getSeconds(currentTime))]
export const displayTime = (time: { minutes: string, seconds: string }) => time.minutes + ':' + time.seconds