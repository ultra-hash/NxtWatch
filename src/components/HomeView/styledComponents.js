import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const OuterContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const InnerContainer = styled.div`
  height: calc(100% - 40px);
  display: flex;
`
export const HomeSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  overflow: auto;
`
export const BannerContainer = styled.div`
  padding: 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  color: #000000;
`

export const BannerCloseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const AppLogoInsideBanner = styled.img`
  width: 200px;
`
export const Button = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  border: ${props => (props.outline ? '1px solid black' : 0)};
  padding: ${props => (props.padding ? props.padding : 0)};
  font-weight: bold;
`
export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: bold;
`
export const BannerCloseBtn = styled(Button)`
  align-self: flex-start;
`

export const HomeSectionBody = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const SearchInputContainer = styled.div`
  display: flex;
`

export const SearchInput = styled.input`
  padding: 5px 10px;
  width: 80%;
  max-width: 300px;
  border: 1px solid #cccccc;
  background-color: transparent;
  flex-shrink: 1;
`
export const SearchBtn = styled.button`
  border: 1px solid #cccccc;
  outline: none;
  padding: 5px 20px;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  background-color: ${props => (props.dark ? '#313031' : '#f4f4f4')};
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
export const SuccessViewContainer = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  list-style-type: none;
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

export const Heading = styled.h1`
  font-size: 20px;
`

export const RetryButton = styled.button`
  padding: 10px 20px;
  background-color: #4a47e0;
  border-radius: 5px;
  border: 0;
  outline: none;
  color: #ffffff;
`

export const LinkToVideo = styled(Link)`
  text-decoration: none;
`
