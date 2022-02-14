import React from 'react'
import { LoadIcon } from '../components/elements'

const Loading = (props) => {
  return (
    <div className={props.className}>
        <LoadIcon/>
    </div>
  )
}

export default Loading