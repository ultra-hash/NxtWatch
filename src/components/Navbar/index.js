import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import {BiSun} from 'react-icons/bi'
import {FaMoon} from 'react-icons/fa'
import {NavbarContainer, AppLogoImg, ThemeButton} from './styledComponents'

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

              <ThemeButton type="button" onClick={onToggleTheme}>
                {isDarkTheme && <BiSun size={18} color="#ffffff" />}
                {!isDarkTheme && <FaMoon size={18} />}
              </ThemeButton>
            </NavbarContainer>
          )
        }}
      </ThemeContent.Consumer>
    )
  }
}

export default withRouter(Navbar)
