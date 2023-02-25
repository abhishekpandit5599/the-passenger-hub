import React from 'react'
import { Link } from 'react-router-dom'

const TrainCard = (props) => {
  return (

    <div className="card-trian p-2" style={{ minWidth: "95%", minHeight: props.cardHeight, boxShadow:props.boxShadow?props.boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", border:props.CardBorder?props.CardBorder: "1px solid lightgray", borderRadius: '15px' }}>
      {props.buttontext ? <button className={`btn d-${props.displaybtn} `} style={{ background: '#93ddab', width: 'max-content', color: "white" }}>{props.buttontext}</button> : ""}
      {props.img ? <img src={props.img} alt="" style={{ height: '51px', maxHeight: props.height, maxWidth: props.width, objectFit: 'contain' }} className="my-2" /> : ""}
      {props.heading ? <h4 className="my-2" style={{ fontWeight: '800', fontSize: props.headingfont ? props.headingfont : '15px' }}>{props.heading}</h4> : ""}
      {props.text ? <p className="my-2" style={{ fontSize: props.textFont ? props.textFont : '13px' }}>{props.text}</p> : ""}
      {props.link ? <Link className="my-2 d-block">{props.link}</Link> : ""}
    </div>

  )
}

export default TrainCard