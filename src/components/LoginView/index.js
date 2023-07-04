import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

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
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showPassword: false,
    showErrorMsg: false,
  }

  onChangeInput = event => {
    if (event.target.id === 'username') {
      this.setState({username: event.target.value})
    } else {
      this.setState({password: event.target.value})
    }
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onLoginFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    }

    const response = await fetch(loginUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      const {history} = this.props
      history.replace('/')
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            username,
            password,
            errorMsg,
            showPassword,
            showErrorMsg,
          } = this.state
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
                    alt="website logo"
                  />
                </LogoContainer>
                <FormContainer onSubmit={this.onLoginFormSubmit}>
                  <InputAndLabelContainer>
                    <LabelItem htmlFor="username" dark={isDarkTheme}>
                      USERNAME
                    </LabelItem>
                    <InputItem
                      type="text"
                      placeholder="Username"
                      value={username}
                      id="username"
                      onChange={this.onChangeInput}
                      dark={isDarkTheme}
                    />
                  </InputAndLabelContainer>
                  <InputAndLabelContainer>
                    <LabelItem htmlFor="password" dark={isDarkTheme}>
                      PASSWORD
                    </LabelItem>
                    <InputItem
                      dark={isDarkTheme}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      id="password"
                      onChange={this.onChangeInput}
                    />
                  </InputAndLabelContainer>
                  <div>
                    <InputItem
                      type="checkbox"
                      id="showPassword"
                      onChange={this.onClickShowPassword}
                    />
                    <LabelItem dark={isDarkTheme} htmlFor="showPassword">
                      {' '}
                      Show Password
                    </LabelItem>
                  </div>

                  <FormButton type="submit" dark={isDarkTheme}>
                    Login
                  </FormButton>
                </FormContainer>
                {showErrorMsg && (
                  <ErrorMsg dark={isDarkTheme}>*{errorMsg}</ErrorMsg>
                )}
              </InnerContainer>
            </OuterContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginView
