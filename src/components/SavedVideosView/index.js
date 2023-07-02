import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import {OuterContainer, InnerContainer} from './styledComponents'

const SavedVideosView = () => (
  <OuterContainer>
    <Navbar />
    <InnerContainer>
      <Sidebar />
      <p>SavedVideosView</p>
    </InnerContainer>
  </OuterContainer>
)

export default SavedVideosView
