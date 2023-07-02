import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import {
  OuterContainer,
  InnerContainer,
  TrendingSection,
} from './styledComponents'

const TrendingView = () => (
  <OuterContainer>
    <Navbar />
    <InnerContainer>
      <Sidebar />
      <TrendingSection>
        <h1>Trending</h1>
      </TrendingSection>
    </InnerContainer>
  </OuterContainer>
)

export default TrendingView
