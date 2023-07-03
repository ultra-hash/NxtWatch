import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

import ThemeContext from '../../context/themeContext'

import {
  OuterContainer,
  InnerContainer,
  NotFoundSection,
  NotFoundImage,
  Heading,
} from './styledComponents'

const NotFoundView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <OuterContainer>
          <Navbar />
          <InnerContainer>
            <Sidebar />
            <NotFoundSection dark={isDarkTheme}>
              <NotFoundImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <Heading>Page Not Found</Heading>
              <p>We are sorry, the page you requested could not be found.</p>
            </NotFoundSection>
          </InnerContainer>
        </OuterContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFoundView
