import React, { createContext } from 'react'
import "../Toggle.css"
import { useContext } from 'react'

const MyContext=createContext(false)
const Toggle = (props) => {
  
  return (
    <div className='d-flex align-items-center'>
        
        <label class="switch mb-0" style={{marginTop:"3px"}}>
  <input type="checkbox" checked={props.checked} />
  <span class="slider"></span>
</label>
    </div>
  )
}

export default Toggle