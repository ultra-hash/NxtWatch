import styled from 'styled-components'

export const OuterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const InnerContainer = styled.div`
  flex-grow: 1;
  display: flex;
`
export const NotFoundSection = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  overflow: auto;
`
export const NotFoundImage = styled.img`
  width: 80%;
  max-width: 300px;
`

export const Heading = styled.h1`
  font-size: 20px;
`
