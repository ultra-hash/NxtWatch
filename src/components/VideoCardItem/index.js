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
  const {details, version} = props
  const {thumbnailUrl, title, channel, publishedAt, viewCount} = details
  const {profileImageUrl, name} = channel
  return (
    <VideoCardContainer version={version}>
      <Thumbnail src={thumbnailUrl} alt="video thumbnail" version={version} />
      <TitleAndChannelLogoContainer version={version}>
        <ChannelThumbnail src={profileImageUrl} alt="channel logo" />
        <Container version={version}>
          <VideoTitle>{title}</VideoTitle>
          {!version && (
            <>
              {' '}
              <Paragraph>{name}</Paragraph>
              <ContainerRow>
                <Paragraph>{viewCount} views</Paragraph>
                <Paragraph>.</Paragraph>
                <Paragraph>
                  {formatDistanceToNowStrict(new Date(publishedAt))}
                </Paragraph>
              </ContainerRow>
            </>
          )}
          {version && (
            <ContainerRow>
              <Paragraph>{name}</Paragraph>
              <Paragraph>.</Paragraph>
              <Paragraph>{viewCount} views</Paragraph>
              <Paragraph>.</Paragraph>
              <Paragraph>
                {formatDistanceToNowStrict(new Date(publishedAt))}
              </Paragraph>
            </ContainerRow>
          )}
        </Container>
      </TitleAndChannelLogoContainer>
    </VideoCardContainer>
  )
}

export default VideoCardItem
