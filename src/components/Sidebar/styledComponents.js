import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
  background-color: ${props => (props.dark ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 200px;
  flex-grow: 1;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const UnOrderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
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

export const SocialContainer = styled.div`
  padding: 20px;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`

export const Heading = styled.h1`
  font-size: 20px;
`

export const Paragraph = styled.p`
  font-size: ${props => (props.size ? props.size : '14')}px;
  font-weight: bold;
`

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 10px;
`
export const SocialIcons = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
