import {Route, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const {history} = props
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    history.replace('/login')
  }
  return <Route {...props} />
}

export default withRouter(ProtectedRoute)
