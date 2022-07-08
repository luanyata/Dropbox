import { Text } from './styles'

type LabelProps = {
  text: string
}

export function Label({ text }: LabelProps) {
  return <Text>{text}</Text>
}
