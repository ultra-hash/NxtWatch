import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import {OuterContainer, InnerContainer, GamingSection} from './styledComponents'

const GamingView = () => (
  <OuterContainer>
    <Navbar />
    <InnerContainer>
      <Sidebar />
      <GamingSection>
        <h1>Gaming</h1>
      </GamingSection>
    </InnerContainer>
  </OuterContainer>
)

export default GamingView
