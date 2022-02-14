import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import styled from 'styled-components'

export const LoadIcon = styled(AiOutlineLoading3Quarters)`
font-size:100px;
animation-name: rotation;
animation-duration: 1s;
animation-iteration-count: infinite;
animation-timing-function: linear;
}
    @keyframes rotation {
    0%{ transform: rotate(0deg);}
    100%{ transform: rotate(360deg)}
    }
`
export const Button = styled.button`
    background:red;
    heigth:35px;
`