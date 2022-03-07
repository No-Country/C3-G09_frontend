import {AiOutlineLoading3Quarters, AiOutlineEdit} from 'react-icons/ai'
import {MdOutlineRemoveRedEye, MdArrowBackIosNew} from 'react-icons/md'
import styled from 'styled-components'
import img from '../global/img/parking.jpg'

export const IconBack = styled(MdArrowBackIosNew)`
    position:absolute;
    top: 30%;
    left:5%;
    color: #000;
    font-size: 35px;
`

export const LoadIcon = styled(AiOutlineLoading3Quarters)`
font-size:100px;
color: #2E4053;
animation-name: rotation;
animation-duration: 1s;
animation-iteration-count: infinite;
animation-timing-function: linear;
}
    @keyframes rotation {
    0%{ 
        transform: rotate(0deg);
        
        }
    100%{ 
        transform: rotate(360deg);
        
    }
    }
`;
export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  /* background:blue; */
  margin: 0;
  display: grid;
  grid-template-columns: 25px 1fr 25px;
  grid-template-rows: 200px 3fr 9fr 1fr;

  p {
    width: 100%;
    height: 100%;
    font-family:roboto;
    margin:0;
    display:grid;
    grid-template-columns: 18px 1fr 18px;
    grid-template-rows: repeat(18, 1fr);

    p{
        width:100%;
        left: 30%;
        font-size:20px;
    }
    hr{        
        border: 0.5px solid rgba(120, 118, 118, 0.65);
        background:rgba(120, 118, 118, 0.65);
    }
    span{
        font-size:0.5em;
    }
    `

export const ImgBanner = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  background: red;
  position: relative;
  grid-column: 1/4;

    padding:0;
    margin-top:0;
    width:100%;
    height:100%;
    position: relative;
    grid-column:1/4;
    grid-row:1/5;

    h2{
        margin-top:54px;
        font-size:0.8em;
        width:100%;
        text-align:center;
    }
    h1{        
        grid-column:1/4;
        font-size:0.8em;
        text-align:center;
        margin-top:130px;
        
    }
    
    @supports(object-fit:cover){
        img{
            margin:0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center center;
        }}
     
`
export const SupDiv = styled.div`
        position:absolute;
        top:0;
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:end;
        font-size:20px;
        color:#fff;
`
export const SocialContainer = styled.div`
    grid-column: 2/3;
    grid-row: 5/9;
    font-family:roboto;
    font-weight:400;
    
       
`
export const BoxSocial = styled.div`
        padding : 10px;
        display:flex;
        align-items:center;
        justify-content: space-around; 
       
        img{
            width:64px;
            height:64px;
        }
`
export const FormLog = styled.form`
        grid-column: 2/3;
        grid-row:9/18;
`
export const DivInput = styled.div`
    display: flex;
    flex-direction:column;
    grid-row-gap:15px; 
    padding-bottom:15px;   
        input{
            position:relative;
            width: 100%;
            line-height: 70px;
            font-size:14px;
            background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.23);
            box-sizing: border-box;
            border-radius: 4px;
            height:44px;

            &:focus{
                outline:none;
                border: #4888E9 solid 2px; 
            }
        }
`
export const DivCheckBox = styled.div`
        width:100%;
        display:flex;
        align-items:center;
        justify-content: space-around;
        input{
            height:20px;
            width:20px;
            line-height: 35px;
        }
`
export const ShowPass = styled(MdOutlineRemoveRedEye)`
        width:25px;
        height:25px;
        color:rgba(120, 118, 118, 0.65);
        margin-top:48px;
        position:absolute;
        right:8%;
        cursor:pointer;
        
`
export const ButtonLog = styled.button`
        background-color:#4888E9;
        height: 52px;
        width: 197px;
        border:none;
        color:#fff;
        font-size: 0.6em;        
        &:hover{
            opacity: .5;
        }
`
export const FormLogCount = styled.div`
    grid-column:2/3;
    grid-row: 4/18;

`
export const Padre = styled.div`
  grid-column: 2/3;
  grid-row:10/18;
  margin-top:10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap:15px;
    a{
        width:100%;
        display:flex;
        padding:0;
        justify-content:center; 
        align-items:center;
        text-decoration:none;
        font-family: roboto;            
    }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  background: #e5e5e5;
  font-size: 0.5em;
  color: #073f94;
  font-weight: bolder;
  border: none;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  grid-gap:15px;

    svg{
        font-size:2.5em;
    }
`;

export const Bienvenida = styled.div`
  grid-column: 2/3;
  grid-row:5/7;
  width:100%;
  height: 80px;
  margin-top:10px;
  background: #e5e5e5;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  position: relative;
  font-size: 0.5em;
  font-family: roboto;
  color: #073f94;
  font-weight: 600;
`;

export const Saldo = styled.div`
  grid-column: 2/3;
  grid-row:7/10;
  margin-top:10px;
  text-align: center;
  position: relative;
  font-size: 1.1em;
  font-family: roboto;
  background: #e5e5e5;
  color: #073f94;
  font-weight: bolder;
`;

export const HeadProfile = styled.div`
position:relative;
grid-column: 2/3;
grid-row: 1/5;
height: 80%;
display:flex;
align-items: center;
justify-content: end;
flex-direction:column;
grid-gap: 15px;
        img{
            width: 80px;
            height: 80px;
            border-radius:50%;
        }
        span{
            font-weight: 700;
            font-size:0.8;
            color: #073F94;
            margin-bottom:30px;
        }
`
export const ButtonsBox = styled.div`
grid-column: 2/3;
grid-row: 4/14;
display:flex;
flex-direction:column;
        ul{
            height:70%;
            padding-left:0;
            display:grid;
            grid-template-rows: repeat(5, 1fr);
            list-style:none;
        }
        li{
            heigth:100%;
            width:100%;
            display:flex;
            align-items:center;
            justify-content:space-between;
            font-weight:700;
            font-size:0.6em;
            border-top: 2px solid #C4C4C4;
        }
        li:last-child{
            border-bottom: 2px solid #C4C4C4;
        }
        li span{
            font-size:1.5em;
            padding-right: 10px;
        }
`
export const CloseSesion = styled.div`
    grid-row:12/14;
    grid-column: 2/3;
    display:flex;
    align-items:center;
    font-size:0.6em;
    font-weight:700;
        a{
            line-height: 90px;
        }
        span{
            font-size:1.5em;
            padding-right:30px;
        }        
`
export const DtInputBox = styled.div`
    grid-row: 4/18;
    grid-column:2/3;
    grid-gap:15px;
       
`
export const DtInput = styled.input`
    position:relative;
    margin-top:20px;
    width: 100%;
    height: 44px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.23);
    box-sizing: border-box;
    border-radius: 4px;
    font-size:0.7em;
    padding-top:20px;
    padding-left:10px;
    &:focus{
        outline:none;
        border: #4888E9 solid 2px; 
    }
    
`
export const WrapDiv = styled.div`
    margin-top:20px;
    margin-left:10px;
    position:absolute;
    width:90%;
    display:flex;
    justify-content:space-between;
    z-index:2;
    font-size:0.5em;
    svg{
        margin-top:8px;
        margin-right:10px;
        font-size:2em;
        color:rgba(0, 0, 0, 0.6);
    }

`
