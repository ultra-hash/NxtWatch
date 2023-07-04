import styled from 'styled-components'

export const GameCardContainer = styled.div`
  width: 100%;
  max-width: 140px;
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const Paragraph = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  font-size: 14px;
`
export const ViewCountParagraph = styled(Paragraph)`
  color: #7ba3b4;
`
