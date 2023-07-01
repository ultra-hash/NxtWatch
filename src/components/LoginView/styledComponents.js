import styled from 'styled-components'

export const OuterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
`
export const InnerContainer = styled.div`
  width: 90%;
  padding: 30px 20px;
  border-radius: 10px;
  border: 0;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#ffffff')};
  margin: 10px;
  @media screen and (min-width: 768px) {
    box-shadow: 0px 14px 16px 0px;
    max-width: 360px;
  }
`
export const LogoContainer = styled.div`
  text-align: center;
  margin: 20px 0 30px;
`
export const LogoImage = styled.img`
  width: 150px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const InputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const LabelItem = styled.label`
  color: ${props => (props.dark ? '#ffffff' : '#000000')}};
`

export const InputItem = styled.input`
  padding: 10px;
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  border: 1px solid #94a3b8;
  outline: none;
  background-color: transparent;
`
export const FormButton = styled.button`
  padding: 10px 20px;
  border: 0;
  border-radius: 10px;
  background-color: #4f46e5;
  color: #ffffff;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
`
