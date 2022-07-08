import { Label } from '../Label'

type LastUpdateProps = {
  date: string
}

export function LastUpdate({ date }: LastUpdateProps) {
  return <Label text={date} />
}
