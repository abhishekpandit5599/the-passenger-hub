import React from 'react'
import '../CustomCard.css'

const CustomCard = (props) => {
  return (
   
         <div className="grid__item" style={{height:'100%'}}>
  <div className="card" style={{height:'100%'}}> <div className="card_img"> <img className="" src={props.img} alt="Snowy Mountains" /></div>
    <div className="card__content">
      <h1 className="card__header">{props.heading}</h1>
      <p className="card__text">{props.text}</p>
    {props.btnText &&<button className="card__btn">{props.btnText} <span>→</span></button>}  
    </div>
  </div>
</div>

   
  )
}

export default CustomCard