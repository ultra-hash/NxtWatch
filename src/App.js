import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import LoginView from './components/LoginView'
import HomeView from './components/HomeView'
import GamingView from './components/GamingView'
import SavedVideosView from './components/SavedVideosView'
import TrendingView from './components/TrendingView'
import NotFoundView from './components/NotFoundView'
import VideoDetailsView from './components/VideoDetailsView'
import VideoCardItem from './components/VideoCardItem'

import ThemeContext from './context/themeContext'
import VideosContext from './context/videosContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
    likedVideosList: [],
    dislikedVideosList: [],
  }

  onToggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onToggleSave = videoId => {
    this.setState(prevState => {
      const {savedVideosList} = prevState
      const index = savedVideosList.indexOf(videoId)
      if (index === -1) {
        savedVideosList.push(videoId)
      } else {
        savedVideosList.splice(index, 1)
      }
      return {savedVideosList: [...savedVideosList]}
    })
  }

  onToggleLike = videoId => {
    this.setState(prevState => {
      const {likedVideosList, dislikedVideosList} = prevState
      const likedIndex = likedVideosList.indexOf(videoId)
      const disLikedIndex = dislikedVideosList.indexOf(videoId)
      if (likedIndex === -1) {
        likedVideosList.push(videoId)
      } else {
        likedVideosList.splice(likedIndex, 1)
      }

      if (disLikedIndex !== -1) {
        dislikedVideosList.splice(disLikedIndex, 1)
      }
      return {
        likedVideosList: [...likedVideosList],
        dislikedVideosList: [...dislikedVideosList],
      }
    })
  }

  onToggleDislike = videoId => {
    this.setState(prevState => {
      const {likedVideosList, dislikedVideosList} = prevState
      const likedIndex = likedVideosList.indexOf(videoId)
      const disLikedIndex = dislikedVideosList.indexOf(videoId)
      if (disLikedIndex === -1) {
        dislikedVideosList.push(videoId)
      } else {
        dislikedVideosList.splice(disLikedIndex, 1)
      }

      if (likedIndex !== -1) {
        likedVideosList.splice(likedIndex, 1)
      }
      return {
        dislikedVideosList: [...dislikedVideosList],
        likedVideosList: [...likedVideosList],
      }
    })
  }

  render() {
    const {
      isDarkTheme,
      savedVideosList,
      likedVideosList,
      dislikedVideosList,
    } = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.onToggleTheme}}
      >
        <Switch>
          <Route path="/login" exact component={LoginView} />
          <ProtectedRoute path="/" exact component={HomeView} />
          <ProtectedRoute path="/trending" exact component={TrendingView} />
          <ProtectedRoute path="/gaming" exact component={GamingView} />
          <ProtectedRoute path="/video-card" exact component={VideoCardItem} />
          <VideosContext.Provider
            value={{
              savedVideosList,
              likedVideosList,
              dislikedVideosList,
              toggleSave: this.onToggleSave,
              toggleLike: this.onToggleLike,
              toggleDislike: this.onToggleDislike,
            }}
          >
            <ProtectedRoute
              path="/saved-videos"
              exact
              component={SavedVideosView}
            />
            <ProtectedRoute
              path="/videos/:id"
              exact
              component={VideoDetailsView}
            />
          </VideosContext.Provider>
          <Route path="/not-found" component={NotFoundView} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
