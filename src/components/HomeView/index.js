import {Component} from 'react'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

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
    isLoading: false,
    showBanner: true,
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {isLoading, showBanner} = this.state
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
                    <BannerContainer>
                      <BannerCloseContainer>
                        <AppLogoInsideBanner
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerCloseBtn onClick={this.onCloseBanner}>
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
                      <SearchInput type="search" placeholder="Search" />
                      <SearchBtn dark={isDarkTheme}>
                        <AiOutlineSearch />
                      </SearchBtn>
                    </SearchInputContainer>

                    <ResultsContainer>
                      <li>Home</li>
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
