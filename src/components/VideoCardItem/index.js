import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import {
  VideoCardContainer,
  Thumbnail,
  TitleAndChannelLogoContainer,
  ChannelThumbnail,
  VideoTitle,
  Container,
  Paragraph,
} from './styledComponents'

const VideoCardItem = props => {
  const {details} = props
  const {thumbnailUrl, title, channel, publishedAt, viewCount} = details
  const {profileImageUrl, name} = channel
  return (
    <VideoCardContainer>
      <Thumbnail src={thumbnailUrl} alt="thumbnail" />
      <TitleAndChannelLogoContainer>
        <ChannelThumbnail src={profileImageUrl} alt="profile" />
        <Container>
          <VideoTitle>{title}</VideoTitle>
          <Paragraph>{name}</Paragraph>
          <Paragraph>
            <span>{viewCount}</span> views .{' '}
            <span>{formatDistanceToNowStrict(new Date(publishedAt))}</span>
          </Paragraph>
        </Container>
      </TitleAndChannelLogoContainer>
    </VideoCardContainer>
  )
}

export default VideoCardItem
