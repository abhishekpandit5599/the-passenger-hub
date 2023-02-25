import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowRightOutlined } from '@mui/icons-material';



const InfoCard = (props) => (
  <div className="card-info p-2 mt-3" style={{minHeight:'250px',width:'100%',borderTop:'3px solid #95dfac',position:'relative',background: "aliceblue"}}>
    <h3 className="card-head mt-2" style={{fontWeight:'800',fontSize:'18px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
        {props.Head}

    </h3>
    <p className="paragraph-text" style={{}}>
        {props.bodyText}
    </p>
<div className="d-flex row justify-content-between" style={{position:'absolute',width:"98%",bottom:'5px',height:'auto'}}>
<Link to={props.link}>Find Out More</Link>
<Link><ArrowRightOutlined/></Link>
</div>

  </div>
);

export default InfoCard;