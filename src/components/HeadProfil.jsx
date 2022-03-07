import React from 'react'
import {useNavigate} from 'react-router-dom'
import { IconBack, HeadProfile} from './elements'
import Data from'../global/provisionalDate.json'

const HeadProfil = (props) => {
const history = useNavigate()

  return(
        <HeadProfile>
            <h1>{props.namePage}</h1>
            <IconBack onClick={()=>history(-1)}/>            
            <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="" />
            <span>{Data.user.name}</span>
        </HeadProfile>  
    
  )
}

export default HeadProfil