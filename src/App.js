import {Route, Redirect, Switch} from 'react-router-dom'
import {Component} from 'react'
import LoginView from './components/LoginView'
import HomeView from './components/HomeView'
import GamingView from './components/GamingView'
import SavedVideosView from './components/SavedVideosView'
import TrendingView from './components/TrendingView'

import ThemeContext from './context/themeContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  onToggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.onToggleTheme}}
      >
        <Switch>
          <Route path="/login" exact component={LoginView} />
          <Route path="/" exact component={HomeView} />
          <Route path="/trending" exact component={TrendingView} />
          <Route path="/gaming" exact component={GamingView} />
          <Route path="/saved-videos" exact component={SavedVideosView} />
          <Redirect to="/login" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
