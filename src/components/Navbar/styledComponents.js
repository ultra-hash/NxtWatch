import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.nav`
  padding: 10px;
  background-color: ${props => (props.dark ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const AppLogoImg = styled.img`
  width: 100px;
`
export const Button = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
`

export const CloseBtnContainer = styled.div`
  text-align: right;
  padding: 20px;
`

export const UnOrderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: auto 0;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  background-color: ${props => {
    const {active, dark} = props
    if (active) {
      return dark ? '#212121' : '#ebebeb'
    }
    return 'transparent'
  }};
`

export const MenuParagraphItem = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  min-width: 60px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`
export const LinkForLogo = styled(Link)`
  text-decoration: none;
`
