import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  MainContainer,
  UnOrderedList,
  ListItem,
  NavLink,
  MenuParagraphItem,
  SocialIcons,
  SocialContainer,
  SocialIconsContainer,
  Paragraph,
} from './styledComponents'

import ThemeContext from '../../context/themeContext'

class Sidebar extends Component {
  state = {}

  render() {
    const {match} = this.props
    const {path} = match
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const getColorForMenuIcon = menuPath => {
            if (path === menuPath) {
              return '#ff0000'
            }
            if (isDarkTheme) {
              return '#ffffff'
            }
            return '#000000'
          }

          return (
            <MainContainer dark={isDarkTheme}>
              <UnOrderedList>
                <ListItem dark={isDarkTheme} active={path === '/'}>
                  <NavLink to="/">
                    <AiFillHome color={getColorForMenuIcon('/')} />{' '}
                    <MenuParagraphItem dark={isDarkTheme}>
                      Home
                    </MenuParagraphItem>
                  </NavLink>
                </ListItem>
                <ListItem dark={isDarkTheme} active={path === '/trending'}>
                  <NavLink to="/trending">
                    <HiFire color={getColorForMenuIcon('/trending')} />{' '}
                    <MenuParagraphItem dark={isDarkTheme}>
                      Trending
                    </MenuParagraphItem>
                  </NavLink>
                </ListItem>
                <ListItem dark={isDarkTheme} active={path === '/gaming'}>
                  <NavLink to="/gaming">
                    <SiYoutubegaming color={getColorForMenuIcon('/gaming')} />{' '}
                    <MenuParagraphItem dark={isDarkTheme}>
                      Gaming
                    </MenuParagraphItem>
                  </NavLink>
                </ListItem>
                <ListItem dark={isDarkTheme} active={path === '/saved-videos'}>
                  <NavLink to="/saved-videos">
                    <MdPlaylistAdd
                      color={getColorForMenuIcon('/saved-videos')}
                    />{' '}
                    <MenuParagraphItem dark={isDarkTheme}>
                      Saved videos
                    </MenuParagraphItem>
                  </NavLink>
                </ListItem>
              </UnOrderedList>

              <SocialContainer dark={isDarkTheme}>
                <Paragraph size={20}>CONTACT US</Paragraph>
                <SocialIconsContainer>
                  <SocialIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialIconsContainer>
                <Paragraph>
                  Enjoy! Now to see your channels and recommendations!
                </Paragraph>
              </SocialContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Sidebar)
