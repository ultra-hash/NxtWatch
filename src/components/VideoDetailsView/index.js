import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'

import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/themeContext'
import VideosContext from '../../context/videosContext'

import {
  OuterContainer,
  InnerContainer,
  VideoDetailsSection,
  SuccessViewContainer,
  ResultsContainer,
  LoaderContainer,
  ViewContainer,
  Heading,
  FailureImage,
  RetryButton,
  VideoPlayerContainer,
  VideoTitle,
  Paragraph,
  ContainerRow,
  Container,
  InteractiveItemBtn,
  InteractiveParagraph,
  HorizontalLine,
  ChannelThumbnail,
  Description,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetailsView extends Component {
  state = {
    videoDetails: null,
    apiStatus: apiStatusConstant.initial,
    isLoading: true,
  }

  componentDidMount() {
    this.doApiCall()
  }

  onSuccess = videoData => {
    const videoDetails = {
      id: videoData.id,
      title: videoData.title,
      videoUrl: videoData.video_url,
      thumbnailUrl: videoData.thumbnail_url,
      channel: {
        name: videoData.channel.name,
        profileImageUrl: videoData.channel.profile_image_url,
        subscriberCount: videoData.channel.subscriber_count,
      },
      viewCount: videoData.view_count,
      publishedAt: videoData.published_at,
      description: videoData.description,
    }

    this.setState({
      videoDetails,
      apiStatus: apiStatusConstant.success,
      isLoading: false,
    })
  }

  onFailure = () => {
    this.setState({
      videoDetails: null,
      apiStatus: apiStatusConstant.failure,
      isLoading: false,
    })
  }

  doApiCall = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress, isLoading: true})
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
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
      this.onSuccess(data.video_details)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onRetry = () => {
    this.doApiCall()
  }

  renderSuccessView = () => {
    const {videoDetails} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <SuccessViewContainer>
              <VideosContext.Consumer>
                {videosValue => {
                  const {
                    savedVideosList,
                    likedVideosList,
                    dislikedVideosList,
                    toggleSave,
                    toggleLike,
                    toggleDislike,
                  } = videosValue

                  const onClickInteractiveItemBtn = listType => {
                    const {match} = this.props
                    const {id} = match.params

                    switch (listType) {
                      case 'Liked':
                        toggleLike(id)
                        break

                      case 'Disliked':
                        toggleDislike(id)
                        break

                      case 'Saved':
                        toggleSave(videoDetails)
                        break

                      default:
                        break
                    }
                  }

                  const checkInList = listType => {
                    const {match} = this.props
                    const {id} = match.params

                    let result = 'false'

                    switch (listType) {
                      case 'Liked':
                        result = likedVideosList.includes(id)
                        break

                      case 'Disliked':
                        result = dislikedVideosList.includes(id)
                        break

                      case 'Saved':
                        {
                          const target = savedVideosList.find(
                            eachItem => eachItem.id === id,
                          )
                          result = target !== undefined
                        }
                        break

                      default:
                        break
                    }
                    return result
                  }

                  return (
                    <>
                      <VideoPlayerContainer>
                        <ReactPlayer
                          url={videoDetails.videoUrl}
                          controls
                          width="100%"
                          height="100%"
                        />
                      </VideoPlayerContainer>
                      <Container>
                        <VideoTitle dark={isDarkTheme}>
                          {videoDetails.title}
                        </VideoTitle>
                        <Paragraph>{videoDetails.name}</Paragraph>
                        <Container row>
                          <ContainerRow>
                            <Paragraph>
                              {videoDetails.viewCount} views
                            </Paragraph>
                            <Paragraph>.</Paragraph>
                            <Paragraph>
                              {formatDistanceToNowStrict(
                                new Date(videoDetails.publishedAt),
                              )}
                            </Paragraph>
                          </ContainerRow>
                          <ContainerRow>
                            <InteractiveItemBtn
                              active={checkInList('Liked')}
                              onClick={() => onClickInteractiveItemBtn('Liked')}
                            >
                              <AiOutlineLike size={22} />{' '}
                              <InteractiveParagraph
                                active={checkInList('Liked')}
                              >
                                Like
                              </InteractiveParagraph>
                            </InteractiveItemBtn>
                            <InteractiveItemBtn
                              active={checkInList('Disliked')}
                              onClick={() =>
                                onClickInteractiveItemBtn('Disliked')
                              }
                            >
                              <AiOutlineDislike size={22} />{' '}
                              <InteractiveParagraph
                                active={checkInList('Disliked')}
                              >
                                Dislike
                              </InteractiveParagraph>
                            </InteractiveItemBtn>
                            <InteractiveItemBtn
                              active={checkInList('Saved')}
                              onClick={() => onClickInteractiveItemBtn('Saved')}
                            >
                              <MdPlaylistAdd size={22} />{' '}
                              <InteractiveParagraph
                                active={checkInList('Saved')}
                              >
                                Saved
                              </InteractiveParagraph>
                            </InteractiveItemBtn>
                          </ContainerRow>
                        </Container>

                        <HorizontalLine />
                        <Container>
                          <ContainerRow>
                            <ChannelThumbnail
                              src={videoDetails.channel.profileImageUrl}
                              alt="channel logo"
                            />
                            <div>
                              <Paragraph
                                color={isDarkTheme ? '#ffffff' : '#000000'}
                              >
                                {videoDetails.channel.name}
                              </Paragraph>
                              <Paragraph>
                                {videoDetails.channel.subscriberCount}{' '}
                                subscribers
                              </Paragraph>
                            </div>
                          </ContainerRow>
                          <Description>{videoDetails.description}</Description>
                        </Container>
                      </Container>
                    </>
                  )
                }}
              </VideosContext.Consumer>
            </SuccessViewContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

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
    const {apiStatus, isLoading} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <OuterContainer>
              <Navbar />
              <InnerContainer>
                <Sidebar />
                <VideoDetailsSection
                  data-testid="videoItemDetails"
                  dark={isDarkTheme}
                >
                  <ResultsContainer>
                    {apiStatus === apiStatusConstant.success &&
                      this.renderSuccessView()}

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
                </VideoDetailsSection>
              </InnerContainer>
            </OuterContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoDetailsView
