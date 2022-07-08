import { Container } from './styles'

type CounterProps = {
  value: number
}

export function Counter({ value }: CounterProps) {
  return <Container>{value}</Container>
}
