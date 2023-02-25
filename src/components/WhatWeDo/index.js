
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import '../../CustomCard.css'

import { Collapse, Select, DatePicker, Space } from "antd";
import { Radio, InputNumber, TimePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";
import { appConstants } from "../../themes/appConstant";
import { CookieSharp } from "@mui/icons-material";
import CustomCard from "../../common/CustomCard";
import CustomCard2 from "../../common/CustomCard2";
const { Option } = Select;

const WhatWeDo = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(1);

  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState } = authenticationData;
  const { Panel } = Collapse;

  const handlewClick = () => {
    let action = drawerState ? false : true;
    dispatch(drawerAction(action, "drawerState"));
  };
  useEffect(() => {
    document.title = "The PassengerHub";
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div className="mobileabout text-item">
        <div className="container-fluid spacert">
          <h3>What We Do?</h3>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
            <h2 style={{    textAlign: "center",    width: "100%"}} className="my-4"><strong>
We operate through three business segments: UK Consumer, International Consumer and Trainline Solutions.</strong></h2>
            <div className="col-md-4 my-2">
                <CustomCard img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/2716/5366/2434/UK-picto.svg" heading="UK Consumer" text={<p style={{fontFamily:'sans-serif'}}>We sell rail tickets on behalf of all UK rail companies and coach tickets on behalf of National Express, to customers worldwide. <br /><br />

Through our highly rated mobile app, customers benefit from having all carriers, fares and their digital railcard in one place, real time travel information on-the-go, and self-serve after sales functionality. <br /><br />

We provide high-quality, relevant recommendations for ancillary services like trip insurance and partner with carefully selected businesses and brands wishing to advertise on our mobile app and website.</p>}/>
            </div>
            <div className="col-md-4 my-2">
                <CustomCard img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/9216/5366/2434/international-picto.svg" heading="International Consumer" text={<p>"Our International Consumer business sells rail tickets to people all over the world on behalf of all the major European rail companies. Our International Consumer business also sells coach tickets on behalf of all the major European coach companies. <br /><br />

European rail markets are becoming more fragmented, following the EU’s Fourth Railway Package, which from December 2020 opened domestic rail passenger services to competition.  As new entrant rail carriers launch services on newly liberalised routes, we give customers an easy way to compare all carriers, fares and journey options in our highly rated app."</p>}/>
            </div>
            <div className="col-md-4 my-2">
                <CustomCard img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/9716/5366/2435/TPS-partner-picto.svg" heading="Trainline Solutions" text={<p>Trainline Solutions combines our Platform One technology with our Trainline Partner Solutions business. <br /><br />

Trainline Partner Solutions provides retailing capabilities for carriers, businesses and travel sellers. <br /><br />

Trainline Partner Solutions offers travel management companies and other travel platforms access to all rail carriers in one place, through one simple connection, as well as rail booking solutions directly to thousands of small and medium-sized enterprises (SMEs), large corporate entities and public sector partners. <br /><br />

Trainline Partner Solutions also builds, supports and manages “white label” online and mobile sales platforms for many of the UK’s biggest rail companies. It leverages Trainline's proprietary technology to provide rail companies with a best-in-class product and a lower cost to serve compared to developing their own ticket sales solutions.</p>}/>
            </div>
        </div>
      </div>
      <div className="container-fluid">

        <div className="row">
            <h2 className="text-center my-5 w-100" style={{fontSize:'30px',fontWeight:'700'}}>In this section</h2>
            <div className="col-md-4 my-2">
                <CustomCard2 img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/thumbnails/thumbnail_4/1016/5451/3296/our-purpose-thumb-1440x1080.jpg" heading="Our Purpose" link="Read More"/>
            </div>
            <div className="col-md-4 my-2">
                <CustomCard2 img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/thumbnails/thumbnail_4/3416/5295/7942/business-model-thumb-1440x1080.jpg" heading="Our Bussiness Model" link="Read More"/>
            </div>
            <div className="col-md-4 my-2">
                <CustomCard2 img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/thumbnails/thumbnail_4/6316/4881/8069/strategy-1440x1080.jpg" heading="Our Strategy" link="Read More"/>
            </div>
            
            <div className="col-md-4 my-2">
                <CustomCard2 img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/thumbnails/thumbnail_4/4416/5338/7738/innovation-thumb-1440x1080.jpg" heading="Our Purpose" link="Read More"/>
            </div>
           
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
};
export default WhatWeDo;
