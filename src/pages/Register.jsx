import React from 'react'
import { ButtonLog, ContainerLogin, DivCheckBox, FormLog, IconBack, ImgBanner } from '../components/elements'
import { DivInput } from '../components/elements'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div>
        <ContainerLogin>
            <ImgBanner>
            <Link to='/'><IconBack/></Link> 
            <h2>Crear cuenta</h2>
            </ImgBanner>
        <FormLog>
             <DivInput>
                  <span>Nombre y Apellido</span>
                  <input type="text" placeholder='Ej. María González' />
            </DivInput>
            <DivInput>
                  <span>Dominio</span>
                  <input type="text" placeholder='Ej. AE143CS' />
            </DivInput>
            <DivInput>
                  <span>Teléfono</span>
                  <input type="text" placeholder='Ej. 291-4444444' />
            </DivInput>
            <DivInput>
                  <span>Correo electrónico</span>
                  <input type="text" placeholder='Ej. mariagonzalez@gmail.com' />
            </DivInput>
            <DivInput>
                  <span>Constraseña</span>
                  <input type="password" placeholder='Escribe una contraseña' />
            </DivInput>
            <DivInput>
                  <span>Confirmar contraseña</span>
                  <input type="password" placeholder='Repetir contraseña' />
            </DivInput>
            <DivCheckBox>
                    <input type="checkbox" />
                    <span>Acepto los <a href="">terminos y condiciones</a> del servicio</span>
            </DivCheckBox>
            <div className="center">
            <ButtonLog>Registrarme</ButtonLog>
            </div>
        </FormLog>
        </ContainerLogin>
    </div>
  )
}

export default Register