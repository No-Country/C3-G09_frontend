import React from 'react'
import { useState } from 'react'
import {
  SocialContainer, 
  BoxSocial, 
  ContainerLogin, 
  ImgBanner, 
  SupDiv, 
  FormLog, 
  DivInput, 
  ShowPass,
  InputPass,
  ButtonLog
 } from '../components/elements'
import LoginGoogle from '../components/LoginGoogle'
import {parking, fb, google, apple} from '../global/img/images'
import {Link} from 'react-router-dom'


const Login = () => {
  const [show, setShow] = useState(true)
    
  return (
    
    <div className='container'>
        <ContainerLogin>
            <ImgBanner>
                <img src={parking} alt=""/>
                <SupDiv><h1>PARKING</h1></SupDiv>
            </ImgBanner>
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
                  <InputPass>
                  <input type={show ? 'password' : 'text'} placeholder='Introduce tu contraseña' />
                  <ShowPass onClick={()=>setShow(!show)}/>
                  </InputPass>
                </DivInput>
                <div className='center'>
                  <Link className='linkComp' to='/home'>
                    <ButtonLog>Iniciar sesión</ButtonLog>
                  </Link>
                  <span>¿No tienes cuenta?<Link to='/register'><a href="">Registrate</a></Link></span>
                  </div> 
                  <hr />  
                  <div className="center">
                <h6><a href="">Politica de Privacidad</a></h6>  
              </div>                
              </FormLog>
              
                       
        </ContainerLogin>
              
    </div>
  )
}

export default Login