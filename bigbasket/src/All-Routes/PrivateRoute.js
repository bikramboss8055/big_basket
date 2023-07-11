import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
/*
Dont make any changes to this file
*/
function PrivateRoute({children}) {
  let logged_user= JSON.parse(localStorage.getItem('user'))
  const authState = useSelector((state)=>state.auth)

  let authorized= authState.auth_sucess || logged_user

  if(!authorized){
    return <Navigate to={'/login'} />
  }
  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateRoute
