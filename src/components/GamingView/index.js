import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import GameCardItem from '../GameCardItem'
import ThemeContext from '../../context/themeContext'

import {
  OuterContainer,
  InnerContainer,
  TrendingSection,
  TitleSection,
  SuccessViewContainer,
  LinkToVideo,
  ResultsContainer,
  LoaderContainer,
  ViewContainer,
  Heading,
  FailureImage,
  RetryButton,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingView extends Component {
  state = {
    gamesList: [],
    apiStatus: apiStatusConstant.initial,
    isLoading: true,
  }

  componentDidMount() {
    this.doApiCall()
  }

  onSuccess = videos => {
    const gamesList = videos.map(item => ({
      title: item.title,
      id: item.id,
      thumbnailUrl: item.thumbnail_url,
      viewCount: item.view_count,
    }))

    this.setState({
      gamesList,
      apiStatus: apiStatusConstant.success,
      isLoading: false,
    })
  }

  onFailure = () => {
    this.setState({apiStatus: apiStatusConstant.failure, isLoading: false})
  }

  doApiCall = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress, isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
        'Content-Type': 'Application/json',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.videos)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onRetry = () => {
    this.doApiCall()
  }

  renderSuccessView = () => {
    const {gamesList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <SuccessViewContainer>
              {gamesList.map(item => (
                <LinkToVideo
                  key={item.id}
                  to={`/videos/${item.id}`}
                  color={isDarkTheme ? '#ffffff' : '#000000'}
                >
                  <GameCardItem details={item} dark={isDarkTheme} />
                </LinkToVideo>
              ))}
            </SuccessViewContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderNoVideosVideos = () => (
    <ViewContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <Heading>No Search results found</Heading>
      <p>Try different key words or remove search filter</p>
      <RetryButton type="button" onClick={this.onRetry}>
        Retry
      </RetryButton>
    </ViewContainer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <ViewContainer>
            <FailureImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <Heading>Oops! Something Went Wrong</Heading>
            <p>
              We are having some trouble to complete your request. Please try
              again.
            </p>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </ViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    const {gamesList, apiStatus, isLoading} = this.state
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
                <TrendingSection data-testid="gaming" dark={isDarkTheme}>
                  <TitleSection dark={isDarkTheme}>
                    <SiYoutubegaming
                      color="#ff0000"
                      style={iconStyle}
                      size={50}
                    />
                    <h1>Gaming</h1>
                  </TitleSection>
                  <ResultsContainer>
                    {apiStatus === apiStatusConstant.success &&
                      gamesList.length !== 0 &&
                      this.renderSuccessView()}

                    {apiStatus === apiStatusConstant.success &&
                      gamesList.length === 0 &&
                      this.renderNoVideosVideos()}

                    {apiStatus === apiStatusConstant.failure &&
                      this.renderFailureView()}

                    {isLoading && (
                      <LoaderContainer data-testid="loader">
                        <Loader
                          type="ThreeDots"
                          color={isDarkTheme ? '#ffffff' : '#000000'}
                          height="50"
                          width="50"
                        />
                      </LoaderContainer>
                    )}
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
export default GamingView
