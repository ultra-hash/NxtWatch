import styled from 'styled-components'

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
export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
`
