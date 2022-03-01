import React from 'react'
import { ContainerLogin, ImgBanner,  DtInputBox} from '../components/elements'
import HeadProfil from '../components/HeadProfil'
import InputEdit from '../components/InputEdit'
import Data from'../global/provisionalDate.json'

const UserDate = () => {
  console.log(Data.user.name)

  return (
    <ContainerLogin>
      <ImgBanner>
        <HeadProfil namePage={'Datos de usuario'}/>
      </ImgBanner>
      <DtInputBox>
          <InputEdit label='Nombre' content={Data.user.name +" "+ Data.user.lastName}/> 
          <InputEdit label='Dominio registrado' content={Data.user.domain}/>  
          <InputEdit label='Telefóno' content={Data.user.phone}/>  
          <InputEdit label='Correo electrónico' content={Data.user.mail}/>     
      </DtInputBox>
    </ContainerLogin>
    
  )
}

export default UserDate