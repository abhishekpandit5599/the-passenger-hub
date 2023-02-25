import { useState,React } from 'react';


const ButtonCard = (props) => {
   
return (
    <>
    <div className="col-md-6 ">
        <div className="btn-card mx-auto p-3 " style={{minWidth:'95%',textAlign:'center',boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",borderRadius:'15px' }}>
            <h3 className="my-2">{props.cardhead}</h3>
            <p className="my-2">{props.cardtext}</p>
<button className="btn btn-primary my-">{props.buttontext}</button>

        </div>
    </div>
    </>
)
 
}

export default ButtonCard;