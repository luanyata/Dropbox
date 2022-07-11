import styled from 'styled-components'

export const UpgradePlainContainer = styled.div`
  width: 11.375rem;
  height: 16.625rem;
  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1);
  padding: 25px 24px 25px 17px;
  border-radius: 20px;
`
export const UpgradeButton = styled.button`
  width: 8.813rem;
  height: 2.5rem;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.blue500};

  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  line-height: 20px;
  text-align: center;
  font-weight: 700;
`
