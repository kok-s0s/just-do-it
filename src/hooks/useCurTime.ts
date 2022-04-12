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

    const handleStr = (numStr: string) => {
        if (parseInt(numStr) < 10) return '0' + numStr
        else return numStr
    }

    const hour = handleStr(curTime.getHours().toString())
    const minute = handleStr(curTime.getMinutes().toString())
    const seconds = handleStr(curTime.getSeconds().toString())

    return [hour, minute, seconds]
}
