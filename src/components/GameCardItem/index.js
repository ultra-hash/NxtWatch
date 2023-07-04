import {
  GameCardContainer,
  ThumbnailImage,
  Paragraph,
  ViewCountParagraph,
} from './styledComponents'

const VideoCardItem = props => {
  const {details, dark} = props
  const {thumbnailUrl, title, viewCount} = details
  return (
    <GameCardContainer>
      <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
      <Paragraph dark={dark}>{title}</Paragraph>
      <ViewCountParagraph>{viewCount} Watching Worldwide</ViewCountParagraph>
    </GameCardContainer>
  )
}

export default VideoCardItem
