import { Line } from 'rc-progress'
import filesImage from '../../assets/files.svg'
import { theme } from '../../styles/theme'
import {
  UpgradePlainContainer,
  UpgradeButton,
  InUseSpacerPercentage,
  InUseSpacerNumbers,
} from './styles'

export function UpgradePlain() {
  return (
    <UpgradePlainContainer>
      <img src={filesImage} alt="" />
      <InUseSpacerPercentage>75% In User</InUseSpacerPercentage>
      <Line percent={75} strokeWidth={4} strokeColor={theme.colors.blue900} />
      <InUseSpacerNumbers>
        <p>600Gb</p> <p>800gb</p>
      </InUseSpacerNumbers>

      <UpgradeButton>Upgrade</UpgradeButton>
    </UpgradePlainContainer>
  )
}
