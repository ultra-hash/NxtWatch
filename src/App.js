import {Route, Redirect, Switch} from 'react-router-dom'
import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import LoginView from './components/LoginView'
import HomeView from './components/HomeView'
import GamingView from './components/GamingView'
import SavedVideosView from './components/SavedVideosView'
import TrendingView from './components/TrendingView'
import NotFoundView from './components/NotFoundView'

import ThemeContext from './context/themeContext'

import './App.css'
import VideoCardItem from './components/VideoCardItem'

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
          <ProtectedRoute path="/" exact component={HomeView} />
          <ProtectedRoute path="/trending" exact component={TrendingView} />
          <ProtectedRoute path="/gaming" exact component={GamingView} />
          <ProtectedRoute
            path="/saved-videos"
            exact
            component={SavedVideosView}
          />
          <ProtectedRoute path="/video-card" exact component={VideoCardItem} />
          <Route path="/not-found" exact component={NotFoundView} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
