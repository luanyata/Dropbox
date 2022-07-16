import { Text } from './styles'

type CategoryProps = {
  title: string
}

export function Category({ title }: CategoryProps) {
  return <Text>{title}</Text>
}
