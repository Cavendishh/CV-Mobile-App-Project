// Designer, Developer, and Author - Janne Kavander
// Student number 1903048

import React, { useState, useEffect, useContext } from 'react'
import { auth } from '../Firebase'

// Auth Context using React Context API
const AuthContext = React.createContext()

// This returns the context of this Auth context
export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  // Connect to firebase and sign up with email and password
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  // Connect to firebase and log in with email and password
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  // Connect to firebase and log out from current user
  const logout = () => {
    return auth.signOut()
  }

  // This sets the current user and it only is only activated once
  useEffect(() => {
    // Once done, unsubscribe
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  // Value contains all the states and functions we want to bring to authentication system
  const value = {
    currentUser,
    signup,
    login,
    logout,
  }

  // We return the AuthContext provider with all the values. It brings them to children
  // elements (To App and all its children)
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
