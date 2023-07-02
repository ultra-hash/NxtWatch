import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import {OuterContainer, InnerContainer} from './styledComponents'

const HomeView = () => (
  <OuterContainer>
    <Navbar />
    <InnerContainer>
      <Sidebar />
      <p>Home</p>
    </InnerContainer>
  </OuterContainer>
)

export default HomeView
