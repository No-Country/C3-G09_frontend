import React from 'react'
import {DtInput, WrapDiv} from './elements'
import {AiOutlineEdit} from 'react-icons/ai'

const InputEdit = (props) => {
  return (
    <>
    <WrapDiv>
          {props.label}
          <AiOutlineEdit/>
    </WrapDiv>          
    <DtInput id='nombre' value={props.content} />
    </>
  )
}

export default InputEdit