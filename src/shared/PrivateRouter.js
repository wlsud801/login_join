import React from 'react'
import { Navigate, Route } from 'react-router'

function PrivateRouter({children}) {
  
  if(document.cookie.length > 0){
    console.log(data)
    return children;
  }
  
  return <Navigate to='/' replace= {true}/>
}

export default PrivateRouter