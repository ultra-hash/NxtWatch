import {Component} from 'react'

import {HiFire} from 'react-icons/hi'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import VideoCardItem from '../VideoCardItem'
import ThemeContext from '../../context/themeContext'
import VideosContext from '../../context/videosContext'

import {
  OuterContainer,
  InnerContainer,
  TrendingSection,
  TitleSection,
  SuccessViewContainer,
  LinkToVideo,
  ResultsContainer,
  ViewContainer,
  Heading,
  FailureImage,
} from './styledComponents'

class SavedVideosView extends Component {
  renderNoVideosVideos = () => (
    <ViewContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <Heading>No saved videos found</Heading>
      <p>You can save your videos while watching them</p>
    </ViewContainer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const iconStyle = {
            backgroundColor: isDarkTheme ? '#0f0f0f' : '#e1e9f0',
            padding: '10px',
            borderRadius: '50%',
          }
          return (
            <OuterContainer>
              <Navbar />
              <InnerContainer>
                <Sidebar />
                <TrendingSection data-testid="savedVideos" dark={isDarkTheme}>
                  <TitleSection dark={isDarkTheme}>
                    <HiFire color="#ff0000" style={iconStyle} size={50} />
                    <h1>Saved Videos</h1>
                  </TitleSection>
                  <ResultsContainer>
                    <VideosContext.Consumer>
                      {videosContextValue => {
                        const {savedVideosList} = videosContextValue
                        return (
                          <SuccessViewContainer>
                            {savedVideosList.length !== 0 &&
                              savedVideosList.map(item => (
                                <LinkToVideo
                                  key={item.id}
                                  to={`/videos/${item.id}`}
                                  color={isDarkTheme ? '#ffffff' : '#000000'}
                                >
                                  <VideoCardItem details={item} row={1} />
                                </LinkToVideo>
                              ))}
                            {savedVideosList.length === 0 &&
                              this.renderNoVideosVideos()}
                          </SuccessViewContainer>
                        )
                      }}
                    </VideosContext.Consumer>
                  </ResultsContainer>
                </TrendingSection>
              </InnerContainer>
            </OuterContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SavedVideosView
