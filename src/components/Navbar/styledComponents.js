import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.nav`
  padding: 15px;
  background-color: ${props => (props.dark ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const AppLogoImg = styled.img`
  width: 120px;
`
export const Button = styled.button`
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  border: ${props => (props.border ? '1px solid #000000' : 0)};
  border-color: #94a3b8;
  border-radius: ${props => (props.BRadius ? props.BRadius : 0)};
  outline: none;
  padding: ${props => (props.padding ? props.padding : 0)};
  color: ${props => (props.color ? props.color : 'inherited')};
  @media screen and (min-width: 768px) {
    display: ${props => (props.onlyInSmall ? 'none' : 'inline')};
  }
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
export const LogoutBtn = styled.button`
  border: ${props => (props.dark ? '#ffffff' : '#000000')} 1px solid;
  outline: none;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  padding: 10px 20px;
  background-color: transparent;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutModalContainer = styled.div`
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  padding: 20px;
  border-radius: 10px;
`
export const LogoutOptionsModalContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const Paragraph = styled.p`
  font-size: 14px;
`
