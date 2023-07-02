import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import {
  OuterContainer,
  InnerContainer,
  SavedVideosSection,
} from './styledComponents'

const SavedVideosView = () => (
  <OuterContainer>
    <Navbar />
    <InnerContainer>
      <Sidebar />
      <SavedVideosSection>
        <h1>SavedVideosView</h1>
      </SavedVideosSection>
    </InnerContainer>
  </OuterContainer>
)

export default SavedVideosView
