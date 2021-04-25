// Designer, Developer, and Author - Janne Kavander
// Student number 1903048

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

// Only authenticated and authorised users can access this route
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) => {
        // If current user is valid - let user access the route. Otherwise redirect user back to log in
        return currentUser ? <Component {...props} /> : <Redirect to='/login' />
      }}
    />
  )
}

export default PrivateRoute
