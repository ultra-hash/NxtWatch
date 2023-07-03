import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import {
  VideoCardContainer,
  Thumbnail,
  TitleAndChannelLogoContainer,
  ChannelThumbnail,
  VideoTitle,
  Container,
  ContainerRow,
  Paragraph,
} from './styledComponents'

const VideoCardItem = props => {
  const {details} = props
  const {thumbnailUrl, title, channel, publishedAt, viewCount} = details
  const {profileImageUrl, name} = channel
  return (
    <VideoCardContainer>
      <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
      <TitleAndChannelLogoContainer>
        <ChannelThumbnail src={profileImageUrl} alt="channel logo" />
        <Container>
          <VideoTitle>{title}</VideoTitle>
          <Paragraph>{name}</Paragraph>
          <ContainerRow>
            <Paragraph>{viewCount} views</Paragraph>
            <Paragraph>.</Paragraph>
            <Paragraph>
              {formatDistanceToNowStrict(new Date(publishedAt))}
            </Paragraph>
          </ContainerRow>
        </Container>
      </TitleAndChannelLogoContainer>
    </VideoCardContainer>
  )
}

export default VideoCardItem
