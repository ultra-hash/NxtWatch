import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
  height: calc(100vh - 67px);
  width: 100%;
  overflow: auto;
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
export const SuccessViewContainer = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  list-style-type: none;
  @media screen and (min-width: 576px) {
    display: block;
  }
`
export const LinkToVideo = styled(Link)`
  text-decoration: none;
  padding: 10px;
  color: ${props => props.color};
`
export const ResultsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
`
export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ViewContainer = styled(LoaderContainer)`
  flex-direction: column;
  padding: 20px;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 80%;
  max-width: 300px;
`

export const RetryButton = styled.button`
  padding: 10px 20px;
  background-color: #4a47e0;
  border-radius: 5px;
  border: 0;
  outline: none;
  color: #ffffff;
`
