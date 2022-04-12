import { useState, useEffect } from 'react'

export const useCurTime = () => {
    const [curTime, setCurTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurTime(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    const hour = curTime.getHours()
    const minute = curTime.getMinutes()
    let seconds = curTime.getSeconds().toString()

    if (parseInt(seconds) < 10) {
        seconds = '0' + seconds
    }

    return [hour, minute, seconds]
}
