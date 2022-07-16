import styled from 'styled-components'

export const UpgradePlainContainer = styled.div`
  width: 11.375rem;
  height: 16.625rem;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1);
  padding: 25px 24px 25px 17px;
  border-radius: 20px;
  margin: auto auto 35px auto;
`

export const InUseSpacerPercentage = styled.p`
  font-size: 1rem;
  line-height: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue900};
`

export const InUseSpacerNumbers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  p {
    font-size: 0.75rem;
    line-height: 0.875rem;
    font-weight: 400;

    + p {
      color: ${({ theme }) => theme.colors.gray500};
    }
  }
`
