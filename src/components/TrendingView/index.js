import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import {OuterContainer, InnerContainer} from './styledComponents'

const TrendingView = () => (
  <OuterContainer>
    <Navbar />
    <InnerContainer>
      <Sidebar />
      <p>Gaming</p>
    </InnerContainer>
  </OuterContainer>
)

export default TrendingView
