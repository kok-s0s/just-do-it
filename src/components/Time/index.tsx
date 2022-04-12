import { TimeCard } from './styles'
import { useCurTime } from '../../hooks/useCurTime'

export function Time() {
    const [hour, minute, seconds] = useCurTime()

    return (
        <TimeCard>
            {hour}:{minute}:{seconds}
        </TimeCard>
    )
}
