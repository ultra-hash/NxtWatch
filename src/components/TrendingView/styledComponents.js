import styled from 'styled-components'

export const OuterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const InnerContainer = styled.div`
  flex-grow: 1;
  display: flex;
`
export const TrendingSection = styled.div`
  flex-grow: 1;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`

export const TitleSection = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${props => (props.dark ? '#181818' : '#f1f1f1')};
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`

export const Heading = styled.h1`
  font-size: 24px;
`

export const Paragraph = styled.p`
  font-size: 14px;
`
