import styled, {css} from 'styled-components'

export const VideoCardContainer = styled.div`
  width: 100%;
  ${props =>
    !props.version &&
    css`
      @media screen and (min-width: 768px) {
        max-width: 260px;
      }
    `}
  ${props =>
    (props.version || props.row) &&
    css`
      @media screen and (min-width: 768px) {
        display: flex;
        max-width: 600px;
      }
    `}

    @media screen and (min-width: 768px) {
    padding: 20px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  max-width: 300px;
  flex-shrink: 0;
  flex-grow: 0;
  ${props =>
    props.version &&
    css`
      @media screen and (min-width: 576px) {
        width: 50%;
      }
    `}
`

export const VideoTitle = styled.p`
  font-size: 16px;
  padding: 0;
  margin: 0;
  font-weight: bold;
`

export const TitleAndChannelLogoContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  flex-grow: 1;
`

export const ChannelThumbnail = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0;
`

export const Paragraph = styled.p`
  font-size: 14px;
  color: #94a3b8;
  vertical-align: center;
  margin: 5px 0;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
