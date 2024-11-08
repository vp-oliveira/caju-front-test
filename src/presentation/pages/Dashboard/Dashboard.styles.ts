import styled from 'styled-components'

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  margin: 16px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 185px);
`
export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
`
