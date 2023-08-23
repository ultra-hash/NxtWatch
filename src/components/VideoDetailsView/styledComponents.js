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
export const VideoDetailsSection = styled.div`
  height: calc(100vh - 67px);
  width: 100%;
  overflow: auto;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`

export const Heading = styled.h1`
  font-size: 24px;
`

export const SuccessViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
`

export const ResultsContainer = styled.div`
  flex-grow: 1;
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
export const VideoPlayerContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
`
export const VideoTitle = styled.p`
  font-size: 24px;
  padding: 0;
  margin: 0;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`
export const Paragraph = styled.p`
  font-size: 14px;
  color: ${props => (props.color ? props.color : '#94a3b8')}};
  vertical-align: center;
  margin: 5px 0;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: ${props => (props.row ? 'row' : 'column')};
    justify-content: ${props => (props.row ? 'space-between' : 'flex-start')};
    align-items: ${props => (props.row ? 'center' : 'flex-start')};
  }
`
export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
export const InteractiveItemBtn = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  outline: none;
  background-color: transparent;
  border: 0;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  margin: 10px 0;
`

export const InteractiveParagraph = styled(Paragraph)`
 color: ${props => (props.active ? '#2563eb' : '#64748b')}};
`
export const HorizontalLine = styled.hr`
  height: 2px;
  color: #94a3b8;
`
export const ChannelThumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0;
`
export const Description = styled.p`
  font-size: 16px;
  color: #64748b;

  @media screen and (min-width: 767px) {
    margin-left: 50px;
  }
`
