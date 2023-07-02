import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import {OuterContainer, InnerContainer, HomeSection} from './styledComponents'

const HomeView = () => (
  <OuterContainer>
    <Navbar />
    <InnerContainer>
      <Sidebar />
      <HomeSection>
        <h1>Home</h1>
      </HomeSection>
    </InnerContainer>
  </OuterContainer>
)

export default HomeView
