import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import VideoCardItem from '../VideoCardItem'

import {
  OuterContainer,
  InnerContainer,
  HomeSection,
  BannerContainer,
  BannerCloseContainer,
  AppLogoInsideBanner,
  Button,
  BannerCloseBtn,
  Paragraph,
  HomeSectionBody,
  SearchInputContainer,
  SearchInput,
  SearchBtn,
  ResultsContainer,
  LoaderContainer,
  SuccessViewContainer,
  ViewContainer,
  FailureImage,
  Heading,
  RetryButton,
  LinkToVideo,
} from './styledComponents'

import ThemeContext from '../../context/themeContext'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeView extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    isLoading: true,
    showBanner: true,
    searchInput: '',
    videosList: '',
    search: '',
  }

  componentDidMount() {
    this.doApiCall()
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSuccess = videos => {
    const videosList = videos.map(item => ({
      title: item.title,
      id: item.id,
      thumbnailUrl: item.thumbnail_url,
      channel: {
        name: item.channel.name,
        profileImageUrl: item.channel.profile_image_url,
      },
      viewCount: item.view_count,
      publishedAt: item.published_at,
    }))

    this.setState({
      videosList,
      apiStatus: apiStatusConstant.success,
      isLoading: false,
    })
  }

  onFailure = () => {
    this.setState({apiStatus: apiStatusConstant.failure, isLoading: false})
  }

  doApiCall = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress, isLoading: true})
    const {search} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${jwtToken}`,
        'Content-Type': 'Application/json',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSuccess(data.videos)
    } else {
      this.onFailure(data.errorMsg)
    }
  }

  onRetry = () => {
    this.doApiCall()
  }

  onClickSearch = () => {
    const {searchInput} = this.state
    this.setState({search: searchInput}, this.doApiCall)
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <SuccessViewContainer>
        {videosList.map(item => (
          <LinkToVideo key={item.id} to={`/videos/${item.id}`}>
            <VideoCardItem details={item} />
          </LinkToVideo>
        ))}
      </SuccessViewContainer>
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
    const {
      isLoading,
      showBanner,
      apiStatus,
      searchInput,
      videosList,
    } = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <OuterContainer>
              <Navbar />
              <InnerContainer>
                <Sidebar />
                <HomeSection dark={isDarkTheme} data-testid="home">
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <BannerCloseContainer>
                        <AppLogoInsideBanner
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerCloseBtn
                          onClick={this.onCloseBanner}
                          data-testid="close"
                        >
                          <AiOutlineClose />
                        </BannerCloseBtn>
                      </BannerCloseContainer>
                      <Paragraph>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </Paragraph>
                      <Button outline padding="10px 20px">
                        GET IT NOW
                      </Button>
                    </BannerContainer>
                  )}
                  <HomeSectionBody>
                    <SearchInputContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchBtn
                        type="button"
                        dark={isDarkTheme}
                        data-testid="searchButton"
                        onClick={this.onClickSearch}
                      >
                        <AiOutlineSearch />
                      </SearchBtn>
                    </SearchInputContainer>

                    <ResultsContainer>
                      {apiStatus === apiStatusConstant.success &&
                        videosList.length !== 0 &&
                        this.renderSuccessView()}

                      {apiStatus === apiStatusConstant.success &&
                        videosList.length === 0 &&
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
                  </HomeSectionBody>
                </HomeSection>
              </InnerContainer>
            </OuterContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeView
