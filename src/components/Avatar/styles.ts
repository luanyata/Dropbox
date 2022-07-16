import styled from 'styled-components'

export const ImageContainer = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.625rem;
  color: ${(props) => props.theme.colors.blue900};
`
