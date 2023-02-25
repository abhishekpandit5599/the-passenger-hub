import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { Button } from 'antd';

const RailCards = (props) => {
    
  return (
    <div className='rail-card card' style={{minWidth:"95%",minHeight:"570px",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",borderRadius:'15px',overflow:'hidden'}}>
        <div className="card-header" style={{background:props.CardbackroundColor,color:'white'}}>
            <h2 className="my-2 text-white" style={{fontSize:'22px',fontWeight:'800'}}>{props.CardHeading}</h2>
        </div>
        <div className="card-body p-3">
            <ul className="lsis">
         {props.list1 ? <li className="list-item my-2" style={{display:'flex'}}> <DoneIcon sx={{color:"#82dcb5"}} /> <h5 style={{fontWeight:'800',fontSize:'17px'}}>{props.list1}      {props.subtitle1 ? <p style={{fontSize:'13px',fontWeight:'400'}}>{props.subtitle1}</p>:""}   </h5>  </li> :'' }       
         {props.list2 ? <li className="list-item my-2" style={{display:'flex'}}> <DoneIcon sx={{color:"#82dcb5"}} /> <h5 style={{fontWeight:'800',fontSize:'17px'}}>{props.list2}      {props.subtitle2 ? <p style={{fontSize:'13px',fontWeight:'400'}}>{props.subtitle2}</p>:""}   </h5>  </li> :'' }       
         {props.list3 ? <li className="list-item my-2" style={{display:'flex'}}> <DoneIcon sx={{color:"#82dcb5"}} /> <h5 style={{fontWeight:'800',fontSize:'17px'}}>{props.list3}      {props.subtitle3 ? <p style={{fontSize:'13px',fontWeight:'400'}}>{props.subtitle3}</p>:""}   </h5>  </li> :'' }       
         {props.list4 ? <li className="list-item my-2" style={{display:'flex'}}> <DoneIcon sx={{color:"#82dcb5"}} /> <h5 style={{fontWeight:'800',fontSize:'17px'}}>{props.list4}      {props.subtitle4 ? <p style={{fontSize:'13px',fontWeight:'400'}}>{props.subtitle4}</p>:""}   </h5>  </li> :'' }       
         {props.list5 ? <li className="list-item my-2" style={{display:'flex'}}> <DoneIcon sx={{color:"#82dcb5"}} /> <h5 style={{fontWeight:'800',fontSize:'17px'}}>{props.list5}      {props.subtitle5 ? <p style={{fontSize:'13px',fontWeight:'400'}}>{props.subtitle5}</p>:""}   </h5>  </li> :'' }       
         {props.list6 ? <li className="list-item my-2" style={{display:'flex'}}> <DoneIcon sx={{color:"#82dcb5"}} /> <h5 style={{fontWeight:'800',fontSize:'17px'}}>{props.list6}      {props.subtitle6 ? <p style={{fontSize:'13px',fontWeight:'400'}}>{props.subtitle6}</p>:""}   </h5>  </li> :'' }       
         {props.list7 ? <li className="list-item my-2" style={{display:'flex'}}> <DoneIcon sx={{color:"#82dcb5"}} /> <h5 style={{fontWeight:'800',fontSize:'17px'}}>{props.list7}      {props.subtitle7 ? <p style={{fontSize:'13px',fontWeight:'400'}}>{props.subtitle7}</p>:""}   </h5>  </li> :'' }       
         {props.list8 ? <li className="list-item my-2" style={{display:'flex'}}> <DoneIcon sx={{color:"#82dcb5"}} /> <h5 style={{fontWeight:'800',fontSize:'17px'}}>{props.list8}      {props.subtitle8 ? <p style={{fontSize:'13px',fontWeight:'400'}}>{props.subtitle8}</p>:""}   </h5>  </li> :'' }       
              
            </ul>
          {props.btn1text?<Button type='default' size='large'  className='my-1' style={{width:"100%",fontWeight:'800'}} >{props.btn1text}</Button>:""}  
          {props.btn2text? <Button type='default' size='large' className='my-1' style={{width:"100%",background:'blue',color:'white',fontWeight:'800'}} >{props.btn2text} </Button>:""} 
            {props.btn3text? <Button type='default' size='large' className='my-1' style={{width:"100%",background:'black',color:'white',fontWeight:'800'}} >{props.btn3text} </Button>:""} 
        </div>
    </div>
  )
}

export default RailCards