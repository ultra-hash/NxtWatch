import {Component} from 'react'

import {
  OuterContainer,
  InnerContainer,
  FormContainer,
  LabelItem,
  InputItem,
  InputAndLabelContainer,
  FormButton,
  ErrorMsg,
  LogoImage,
  LogoContainer,
} from './styledComponents'
import ThemeContext from '../../context/themeContext'

class LoginView extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onChangeInput = event => {
    if (event.target.id === 'username') {
      this.setState({username: event.target.value})
    } else {
      this.setState({password: event.target.value})
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {username, password, errorMsg} = this.state
          const {isDarkTheme} = value

          return (
            <OuterContainer dark={isDarkTheme}>
              <InnerContainer dark={isDarkTheme}>
                <LogoContainer>
                  <LogoImage
                    src={
                      isDarkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                  />
                </LogoContainer>
                <FormContainer>
                  <InputAndLabelContainer>
                    <LabelItem dark={isDarkTheme}>UserName</LabelItem>
                    <InputItem
                      type="text"
                      placeholder="username"
                      value={username}
                      id="username"
                      onChange={this.onChangeInput}
                      dark={isDarkTheme}
                    />
                  </InputAndLabelContainer>
                  <InputAndLabelContainer>
                    <LabelItem dark={isDarkTheme}>Password</LabelItem>
                    <InputItem
                      dark={isDarkTheme}
                      type="password"
                      placeholder="password"
                      value={password}
                      id="password"
                      onChange={this.onChangeInput}
                    />
                  </InputAndLabelContainer>
                  <FormButton type="button" dark={isDarkTheme}>
                    Submit
                  </FormButton>
                </FormContainer>
                <ErrorMsg dark={isDarkTheme}>{errorMsg}</ErrorMsg>
              </InnerContainer>
            </OuterContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginView
