import React from 'react'
import images from '../themes/appImage'

const ImgCard = (props) => {
  return (
    <div className='col-md-4 col-10 mx-auto'>
<div className="card p-2 mx-auto" style={{minWidth:'95%',display:'flex',alignItems:"center",justifyContent:'center'}}>
    <div className="img-div">
        <img src={props.image} style={{height:'40px',width:"40px"}} alt="" />
    </div>
    <p className="my-2 text-center" style={{fontSize:'14px',fontWeight:'600'}}>{props.text}</p>
</div>
    </div>
  )
}

export default ImgCard