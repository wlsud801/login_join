import React from 'react'
import { Navigate, Route } from 'react-router'

function PrivateRouter({children}) {
  
  if(document.cookie.length > 0){
    return children;
  }
  
  return <Navigate to='/' replace= {true}/>
}

export default PrivateRouter