import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import styled from "styled-components";
import img from "../img/parking.jpg";

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
    left: 30%;
    font-size: 1em;
    font-weight: bold;
  }
  hr {
    margin: 30px;
    border: 1px solid rgba(120, 118, 118, 0.65);
  }
  span {
    font-size: 0.8em;
  }
`;

export const ImgBanner = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  background: red;
  position: relative;
  grid-column: 1/4;

  @supports (object-fit: cover) {
    img {
      margin: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
`;
export const SupDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 30px;
  color: #fff;
`;
export const SocialContainer = styled.div`
  grid-column: 2 / 3;
  /* background-color:red; */
`;
export const BoxSocial = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 100px;
    height: 100px;
  }
`;
export const FormLog = styled.form`
  grid-column: 2/3;
`;
export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  input {
    position: relative;
    width: 100%;
    line-height: 70px;
    font-size: 1em;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.23);
    box-sizing: border-box;
    border-radius: 4px;
    height: 70px;
    &:focus {
      outline: none;
      border: #4888e9 solid 2px;
    }
  }
`;
export const InputPass = styled.div`
  padding: 0;
`;
export const ShowPass = styled(MdOutlineRemoveRedEye)`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 8%;
  margin-top: 20px;
  cursor: pointer;
`;
/* 
export const Button = styled.button`
        margin-top:30px;
        background-color:#4888E9;
        height: 65px;
        width: 60%;
        border:none;
        color:#fff;
        font-size: 1em;
        border-radius: 4px;
        
        &:hover{
            opacity: .5;
        }
`
 */

export const Padre = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Button = styled.button`
  width: 60%;
  height: 200px;
  margin: 3vw auto;
  box-shadow: 5px 3px 3px grey;
  text-align: center;
  background: #e5e5e5;
  font-size: 3vw;
  color: #073f94;
  font-weight: bolder;
  border: 1px solid grey;
`;

export const Banner = styled.div`
  max-width: 100%;
  height: 250px;
  top: 0;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  text-align: center;
  font-size: 5vw;
  color: white;
  text-shadow: 5px 5px 10px black;
`;

export const Bienvenida = styled.div`
  max-width: 90%;
  height: 80px;
  background: #e5e5e5;
  text-align: center;
  position: relative;
  margin: 2vw auto;
  box-shadow: 5px 2px 2px grey;
  font-size: 3vw;
  color: #073f94;
  font-weight: bolder;
`;

export const Saldo = styled.div`
  max-width: 90%;
  height: 150px;
  text-align: center;
  position: relative;
  margin: 2vw auto;
  box-shadow: 5px 2px 2px grey;
  font-size: 3vw;
  background: #e5e5e5;
  color: #073f94;
  font-weight: bolder;
`;

export const Footer = styled.div`
  width: 90%;
  margin: 10vw auto;
  font-size: 3vw;
  text-align: center;
  background: #e6e5e5;
  padding: 2vw;
`;

export const ContainerPago = styled.div`
  width: 720px;
  height: 100vh;
  margin: 0;
  box-sixing: border-box;
`;

export const HeaderPago = styled.div`
  width: 719px;
  height: 150px;
  max-height: 100%;
  background: #4888e9;
  text-align: center;
  align-items: center;
  overflow: hidden;
  justify-content: center;

  p {
    margin: auto;
    padding-top: 12vw;
    width: 100%;
    color: #ffffff;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 4vw;
  }
`;

export const Hr = styled.div`
  margin: 30px;
  border: 1px solid rgba(120, 118, 118, 0.65);
`;

export const Logo = styled.div`
  text-align: center;
  margin-top: 4vw;

  .success-checkmark {
    width: 80px;
    height: 115px;
    margin: 0 auto;
    
    .check-icon {
        width: 80px;
        height: 80px;
        position: relative;
        border-radius: 50%;
        box-sizing: content-box;
       background: #5fc175;
       
   
        &::before, &::after {
            content: '';
            height: 100px;
            position: absolute;
            background: #00c853;
            transform: rotate(-45deg);
        }
        
        .icon-line {
            height: 5px;
            background-color: #ffffff;
            display: block;
            position: absolute;
            z-index: 10;
            
            &.line-tip {
                top: 46px;
                left: 14px;
                width: 25px;
                transform: rotate(45deg);
                animation: icon-line-tip 0.75s;
            }
            
            &.line-long {
                top: 38px;
                right: 8px;
                width: 47px;
                transform: rotate(-45deg);
                animation: icon-line-long 2s;
            }
        }
        
        .icon-circle {
            top: -4px;
            left: -4px;
            z-index: 10;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            position: absolute;
            box-sizing: content-box;
            border: 4px solid #5fc175;
           overflow: hidden;
        }
        
        .icon-fix {
            top: 8px;
            width: 5px;
            left: 28px;
            z-index: 1;
            height: 83px;
            position: absolute;
            transform: rotate(-45deg);
            background-color:#5fc175;
           overflow: hidden;
        }
    }
}


@keyframes icon-line-tip {
    0% {
        width: 0;
        left: 1px;
        top: 19px;
    }
    54% {
        width: 0;
        left: 1px;
        top: 19px;
    }
    70% {
        width: 50px;
        left: -8px;
        top: 37px;
    }
    84% {
        width: 17px;
        left: 21px;
        top: 48px;
    }
    100% {
        width: 25px;
        left: 14px;
        top: 45px;
    }
}

@keyframes icon-line-long {
    0% {
        width: 0;
        right: 46px;
        top: 54px;
    }
    65% {
        width: 0;
        right: 46px;
        top: 54px;
    }
    84% {
        width: 55px;
        right: 0px;
        top: 35px;
    }
    100% {
        width: 47px;
        right: 8px;
        top: 38px;
    }
}



`;

export const Monto = styled.div`
  width: 100%;
  margin-top: 15vw;
  margin-bottom: 5vw;
  text-align: center;
  font-weight: bolder;
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  p {
    margin: auto;
  }
  hr {
    margin: 30px;
  }
`;

export const CircleDiv = styled.div`
  text-align: center;

  hr {
    margin: 30px;
  }
  button {
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 10px;
    color: #000000;
    font-size: 20px;
    font-weight: 100;
    padding: 10px;
    background-color: white;
    border: solid #e5e5e5 1px;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
  }
`;
export const DatosDiv = styled.div`
  text-align: center;

  
  button {
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 10px;
    color: #000000;
    font-size: 20px;
    font-weight: 100;
    padding: 10px;
    background-color: white;
    border: solid #e5e5e5 1px;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
  }

  hr {
    margin: 30px;
  }
`;

export const ConfirmarPago = styled.button`
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
  color: #ffffff;

  font-size: 20px;
  font-weight: 100;
  margin-top: 5vw;
  margin-left: 37%;
  padding: 15px;
  background-color: #4888e9;
  border: solid #646566 1px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  left: 87px;
  top: 720px;
`;

export const ListoDiv = styled.div `
width: 720px;
`

export const Listo = styled.div `
text-align: center;

p{
  text-align: center;
 
}
`

export const AgregarDinero = styled.div `
width: 719px;
height: 1200px;
margin: 0;
padding: 0;
`

export const FormularioAddMoney = styled.form `
  margin: 3vw;
  max-width: 100%;

  h3{
    font-size: 4vw;
  }
 span{
   font-size: 3vw;
 }
 
  `

export const InputAddMoney = styled.div `
border: solid #ffffff;

width: 100%;
box-shadow: none;

`

export const Confirmar = styled.button`
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
  color: #ffffff;

  font-size: 20px;
  font-weight: 100;
  margin-top: 5vw;
  margin-left: 43%;
  padding: 15px;
  background-color: #4888e9;
  border: solid #646566 1px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  left: 87px;
  top: 720px;
`;