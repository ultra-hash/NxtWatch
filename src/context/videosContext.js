import React from 'react'

const VideosContext = React.createContext({
  savedVideosList: [],
  likedVideosList: [],
  dislikedVideosList: [],
  toggleSave: () => {},
  toggleLike: () => {},
  toggleDislike: () => {},
})

export default VideosContext
