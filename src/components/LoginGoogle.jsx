import React from 'react'
import GoogleLogin from 'react-google-login'
import {google} from '../global/imges/images'

const LoginGoogle = () => {
    const responseGoogle = (respuesta)=>{
        console.log(respuesta)
    }
  return (
    <GoogleLogin
    clientId="770014844032-iv33raohnpsbdo8v5b8u3csg4i6pce09.apps.googleusercontent.com"
    render = {renderProps =>(<img src={google} onClick={renderProps.onClick }  disabled={renderProps.disabled}/>)}
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  )
}

export default LoginGoogle