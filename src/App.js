import {Route, Redirect, Switch} from 'react-router-dom'
import {Component} from 'react'
import LoginView from './components/LoginView'

import ThemeContext from './context/themeContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider value={{isDarkTheme}}>
        <Switch>
          <Route path="/login" exact component={LoginView} />
          <Redirect to="/login" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
