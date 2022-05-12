import { useCurTime } from '../../hooks/useCurTime'
import { TimeCard } from './styles'

export function Time() {
  const [hour, minute, seconds] = useCurTime()

  return (
    <TimeCard>
      {hour}:{minute}:{seconds}
    </TimeCard>
  )
}
