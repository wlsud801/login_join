import React from 'react'
import { Navigate, Route } from 'react-router'
import { Redirect } from 'react-router-dom';

function PublicRouter({children}) {
  if(document.cookie.length > 0){
    return <Navigate to='/Main' replace= {true}/>
  }
    return children;
}

export default PublicRouter