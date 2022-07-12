import { CounterContainer } from './styles'

type CounterProps = {
  value: number
}

export function Counter({ value }: CounterProps) {
  return <CounterContainer>{value}</CounterContainer>
}
