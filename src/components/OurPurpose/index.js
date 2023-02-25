
import React, {  useEffect } from "react";


import {  Select, Space } from "antd";


import { useDispatch, useSelector } from "react-redux";

import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";

import CustomCard from "../../common/CustomCard";


const OurPlan = (props) => {
 
  const dispatch = useDispatch();



  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState } = authenticationData;
  

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
          <h3>Our Plan</h3>
        </div>
      </div>
      <div className="press">
        <div className="container">
         <h2 className="line">We empower greener travel choices, connecting <span className="color-d">people and places.</span> </h2>
        </div>
        <div className="py-5">

<div className="container-fluid p-2">
    <div className="row">
    <div className="col-md-6 px-3">
        <h3 className="mb-3"><strong> We believe we must make more environmentally friendly travel choices – with rail offering a greener alternative to air and car travel.</strong></h3>
        <p>Rail offers travellers a greener alternative to flying or driving, generating less than 1/20th of the CO2 emissions of air travel and approximately 1/7th of the CO2 emissions compared with car travel, per passenger. It can move millions of people quickly and cleanly, for leisure or business, across countries and continents. We believe we have a key role to play in supporting the rail industry, businesses and governments in meeting their emissions targets by promoting a modal shift and encouraging greater use of rail and coach.</p>
    </div>
    <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img src="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/4816/5114/6599/Purpose-1440x1080.jpg" style={{width:'95%',height:'auto'}} alt="" />
    </div>
    </div>
</div>

        </div>
        <div className="py-4">
            <div className="container-fluid px-5">
                <h3 className="mb-4 text-center"><strong>Through our customer-centric, scalable platform, we are committed to driving responsible and sustainable business growth, by:</strong></h3>
              <div className="row">
                <div className="col-md-4">
                    <CustomCard img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/1116/5451/4023/Greener-picto.svg" text="Making rail travel easier, championing a much greener way to travel" />
                    
                    
                </div>
                <div className="col-md-4">
                    <CustomCard img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/2916/5451/4024/Leveraging-picto.svg" text="Leveraging scale, data and technology to offer a superior customer experience" />
                </div>
                <div className="col-md-4">
                <CustomCard img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/5916/5451/4024/Global-picto.svg" text="Offering our carrier partners global distribution at a lower cost to serve" />
                </div>
                </div>
            </div>
        </div>
      </div>
      
      <FooterMain />
    </div>
  );
};
export default OurPlan;
