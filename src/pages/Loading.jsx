import React from 'react'
import { LoadIcon } from '../components/elements'

const Loading = (props) => {
  return (
    <div className={props.className}>
        <h1>ParkApp</h1>
        <LoadIcon/>
    </div>
  )
}

export default Loading