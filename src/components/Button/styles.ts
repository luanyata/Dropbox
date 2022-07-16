import styled from 'styled-components'

type ButtonProps = {
  color?: string
  bg?: string
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 8.813rem;
  height: 2.5rem;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;

  font-size: 0.875rem;
  line-height: 20px;
  text-align: center;
  font-weight: 700;

  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
`
