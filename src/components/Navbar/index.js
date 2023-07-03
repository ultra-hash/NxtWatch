import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {BiSun} from 'react-icons/bi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineClose, AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  NavbarContainer,
  ButtonContainer,
  AppLogoImg,
  Button,
  CloseBtnContainer,
  UnOrderedList,
  ListItem,
  MenuParagraphItem,
  NavLink,
  LinkForLogo,
  LogoutBtn,
  ProfileIcon,
  LogoutModalContainer,
  LogoutOptionsModalContainer,
  Paragraph,
} from './styledComponents'

import ThemeContent from '../../context/themeContext'

class Navbar extends Component {
  state = {}

  render() {
    return (
      <ThemeContent.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const onToggleTheme = () => {
            toggleTheme()
          }

          const openMenu = () => {
            console.log('menu open')
          }

          const {match} = this.props
          const {path} = match

          const contentStyles = {
            backgroundColor: isDarkTheme ? '#000000' : '#ffffff',
            color: isDarkTheme ? '#ffffff' : '#000000',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }

          const LogoutOverlayStyles = {
            backgroundColor: '#00000080',
          }

          return (
            <NavbarContainer dark={isDarkTheme}>
              <LinkForLogo to="/">
                <AppLogoImg
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </LinkForLogo>
              <ButtonContainer>
                <Button
                  type="button"
                  onClick={onToggleTheme}
                  data-testid="theme"
                >
                  {isDarkTheme && <BiSun size={24} color="#ffffff" />}
                  {!isDarkTheme && <FaMoon size={24} />}
                </Button>

                <Popup
                  modal
                  trigger={
                    <Button type="button" onClick={openMenu} onlyInSmall>
                      <GiHamburgerMenu
                        size={24}
                        color={isDarkTheme ? '#ffffff' : '#000000'}
                      />
                    </Button>
                  }
                  position="center center"
                  contentStyle={contentStyles}
                >
                  {close => {
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
                      <>
                        <CloseBtnContainer>
                          <Button type="button" onClick={close}>
                            <AiOutlineClose
                              size={32}
                              color={isDarkTheme ? '#ffffff' : '#000000'}
                            />
                          </Button>
                        </CloseBtnContainer>
                        <UnOrderedList>
                          <ListItem dark={isDarkTheme} active={path === '/'}>
                            <NavLink to="/">
                              <AiFillHome color={getColorForMenuIcon('/')} />{' '}
                              <MenuParagraphItem dark={isDarkTheme}>
                                Home
                              </MenuParagraphItem>
                            </NavLink>
                          </ListItem>
                          <ListItem
                            dark={isDarkTheme}
                            active={path === '/trending'}
                          >
                            <NavLink to="/trending">
                              <HiFire
                                color={getColorForMenuIcon('/trending')}
                              />{' '}
                              <MenuParagraphItem dark={isDarkTheme}>
                                Trending
                              </MenuParagraphItem>
                            </NavLink>
                          </ListItem>
                          <ListItem
                            dark={isDarkTheme}
                            active={path === '/gaming'}
                          >
                            <NavLink to="/gaming">
                              <SiYoutubegaming
                                color={getColorForMenuIcon('/gaming')}
                              />{' '}
                              <MenuParagraphItem dark={isDarkTheme}>
                                Gaming
                              </MenuParagraphItem>
                            </NavLink>
                          </ListItem>
                          <ListItem
                            dark={isDarkTheme}
                            active={path === '/saved-videos'}
                          >
                            <NavLink to="/saved-videos">
                              <MdPlaylistAdd
                                color={getColorForMenuIcon('/saved-videos')}
                              />{' '}
                              <MenuParagraphItem dark={isDarkTheme}>
                                Saved
                              </MenuParagraphItem>
                            </NavLink>
                          </ListItem>
                        </UnOrderedList>
                      </>
                    )
                  }}
                </Popup>
                <ProfileIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Button type="button" onClick={openMenu} onlyInSmall>
                  <FiLogOut
                    size={22}
                    color={isDarkTheme ? '#ffffff' : '#000000'}
                  />
                </Button>

                <Popup
                  modal
                  trigger={
                    <LogoutBtn
                      type="button"
                      dark={isDarkTheme}
                      onClick={openMenu}
                    >
                      Logout
                    </LogoutBtn>
                  }
                  position="center center"
                  overlayStyle={LogoutOverlayStyles}
                >
                  {close => (
                    <LogoutModalContainer dark={isDarkTheme}>
                      <Paragraph>Are you sure, you want to Logout?</Paragraph>
                      <LogoutOptionsModalContainer>
                        <Button
                          type="button"
                          onClick={close}
                          padding="10px 15px"
                          border
                          dark={isDarkTheme}
                          color="#94a3b8"
                          BRadius="5px"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="button"
                          onClick={openMenu}
                          padding="10px 15px"
                          bgColor="#3b82f6"
                          color="#ffffff"
                          BRadius="5px"
                        >
                          Logout
                        </Button>
                      </LogoutOptionsModalContainer>
                    </LogoutModalContainer>
                  )}
                </Popup>
              </ButtonContainer>
            </NavbarContainer>
          )
        }}
      </ThemeContent.Consumer>
    )
  }
}

export default withRouter(Navbar)
