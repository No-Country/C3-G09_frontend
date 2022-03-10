import React from 'react'
import { useState } from 'react'
import {
  SocialContainer, 
  BoxSocial, 
  ContainerLoginNuevo, 
  ImgBannerLogin, 
  SupDiv, 
  FormLog, 
  DivInput, 
  ShowPass,
  InputPass,
  ButtonLog,
  NoTiene,
SpanLogin
 } from '../components/elements'
import LoginGoogle from '../components/LoginGoogle'
import {parking, fb, google, apple} from '../global/img/images'
import {Link} from 'react-router-dom'


const Login = () => {
  const [show, setShow] = useState(true)

  return (

    <div >
        <ContainerLoginNuevo>
            <ImgBannerLogin>
                <img src={parking} alt=""/>
                <SupDiv><h1>PARKING</h1></SupDiv>
            </ImgBannerLogin>
            <SocialContainer>
              <p>Iniciar sesión con redes sociales:</p>
                <BoxSocial>
                  <img src={fb} alt="Facebook" />
                  <LoginGoogle />
                  <img src={apple} alt="Apple" />
                </BoxSocial>
                <hr/>
            </SocialContainer>
              <FormLog>
                <p>Iniciar sesión con cuenta existente:</p>
                <DivInput>
                  <span>Email</span>
                  <input type="email"placeholder='Ingresa tu correo electrónico' />
                </DivInput>
                <DivInput>
                  <span>Contraseña</span>
                  <input type={show ? 'password' : 'text'} placeholder='Introduce tu contraseña' />
                  <ShowPass onClick={()=>setShow(!show)}/>
                </DivInput>

                <NoTiene>
                <div className='center'>
                  <Link className='linkComp' to='/home'>
                    <ButtonLog>Iniciar sesión</ButtonLog>
                  </Link>
                  <br /><br /><br />
                 
                  <span>¿No tienes cuenta?<Link to='/register'><a href="">Registrate</a></Link></span>
                  </div> 
                  <hr />  
                  <SpanLogin>
                  <div className="center">
                 
                  <span><a href="">Politica de Privacidad</a></span>  
                 </div>
                 </SpanLogin>
                 </NoTiene>
              </FormLog>


        </ContainerLoginNuevo>
              
    </div>
  )
}

export default Login