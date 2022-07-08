import { Text } from './styles'

type LabelProps = {
  text: string
}

export function Title({ text }: LabelProps) {
  return <Text>{text}</Text>
}
