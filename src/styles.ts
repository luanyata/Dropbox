import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

export const AppContent = styled.div`
  padding: 36px 64px 0;
  width: 100%;
  max-width: 1440px;
`

export const FilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 18px;

  > div:not(:nth-child(3n)) {
    margin-right: 24.5px;
  }

  > div {
    margin-bottom: 18px;
  }
`
