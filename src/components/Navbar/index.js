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
  AppLogoImg,
  Button,
  CloseBtnContainer,
  UnOrderedList,
  ListItem,
  MenuParagraphItem,
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

          return (
            <NavbarContainer dark={isDarkTheme}>
              <AppLogoImg
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
              <div>
                <Button type="button" onClick={onToggleTheme}>
                  {isDarkTheme && <BiSun size={18} color="#ffffff" />}
                  {!isDarkTheme && <FaMoon size={18} />}
                </Button>

                <Popup
                  modal
                  trigger={
                    <Button type="button" onClick={openMenu}>
                      <GiHamburgerMenu
                        size={20}
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
                              size={30}
                              color={isDarkTheme ? '#ffffff' : '#000000'}
                            />
                          </Button>
                        </CloseBtnContainer>
                        <UnOrderedList>
                          <ListItem dark={isDarkTheme} active={path === '/'}>
                            <AiFillHome color={getColorForMenuIcon('/')} />{' '}
                            <MenuParagraphItem dark={isDarkTheme}>
                              Home
                            </MenuParagraphItem>
                          </ListItem>
                          <ListItem
                            dark={isDarkTheme}
                            active={path === '/trending'}
                          >
                            <HiFire color={getColorForMenuIcon('/trending')} />{' '}
                            <MenuParagraphItem dark={isDarkTheme}>
                              Trending
                            </MenuParagraphItem>
                          </ListItem>
                          <ListItem
                            dark={isDarkTheme}
                            active={path === '/gaming'}
                          >
                            <SiYoutubegaming
                              color={getColorForMenuIcon('/gaming')}
                            />{' '}
                            <MenuParagraphItem dark={isDarkTheme}>
                              Gaming
                            </MenuParagraphItem>
                          </ListItem>
                          <ListItem
                            dark={isDarkTheme}
                            active={path === '/saved-videos'}
                          >
                            <MdPlaylistAdd
                              color={getColorForMenuIcon('/saved-videos')}
                            />{' '}
                            <MenuParagraphItem dark={isDarkTheme}>
                              Saved
                            </MenuParagraphItem>
                          </ListItem>
                        </UnOrderedList>
                      </>
                    )
                  }}
                </Popup>
                <Button type="button" onClick={openMenu}>
                  <FiLogOut
                    size={20}
                    color={isDarkTheme ? '#ffffff' : '#000000'}
                  />
                </Button>
              </div>
            </NavbarContainer>
          )
        }}
      </ThemeContent.Consumer>
    )
  }
}

export default withRouter(Navbar)
