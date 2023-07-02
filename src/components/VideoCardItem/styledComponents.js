import styled from 'styled-components'

export const VideoCardContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 260px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  padding: 0;
  margin: 0;
`

export const TitleAndChannelLogoContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
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
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
