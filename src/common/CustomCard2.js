import React from 'react'
import '../CustomCard.css'
import { Link } from 'react-router-dom'

const CustomCard2 = (props) => {
  return (
    <div className='custom-card-2'>
        <div className="card-img-div">
            <img src={props.img} alt="" className="card-img" />
        </div>
        <h3 className="card-text">{props.heading}</h3>
        <Link className='anchor'>{props.link}</Link>

    </div>
  )
}

export default CustomCard2