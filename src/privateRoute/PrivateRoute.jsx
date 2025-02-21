import React, { useContext } from 'react'
import { AuthContexts } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router'
import Loading from '../components/Loading'

export default function PrivateRoute({children}) {
  const {user,loading} = useContext(AuthContexts)
  const location = useLocation()
  if(loading){
    return <Loading />
  }

  if(user){
    return children
  }
  return <Navigate to={`/login`} state={location?.pathname}></Navigate>
}
