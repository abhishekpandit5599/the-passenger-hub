
import React, {  useEffect } from "react";


import {  Select, Space } from "antd";


import { useDispatch, useSelector } from "react-redux";

import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";

import CustomCard from "../../common/CustomCard";


const OurBussines = (props) => {
 
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
          <h3>Our business model</h3>
        </div>
      </div>
      <div className="press">
        <div className="container">
         <h2 className="line">We empower greener travel choices, connecting <span className="color-d">people and places.</span> </h2>
        </div>
        <div className="py-5">

<div className="container-fluid px-4 my-4">
    <div className="row">
    <div className="col-md-4 d-flex align-items-center justify-content-center">
        <img src="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/5316/5451/3120/biz-model-1-alt.svg" style={{width:'95%',height:'auto'}} alt="" />
    </div>
    <div className="col-md-8 px-3">
        <h3 className="mb-3 color-d"><strong> We aggregate data from  270 carriers across Europe on our platform</strong></h3>
        <p>Rail offers travellers a greener alternative to flying or driving, generating less than 1/20th of the CO2 emissions of air travel and approximately 1/7th of the CO2 emissions compared with car travel, per passenger. It can move millions of people quickly and cleanly, for leisure or business, across countries and continents. We believe we have a key role to play in supporting the rail industry, businesses and governments in meeting their emissions targets by promoting a modal shift and encouraging greater use of rail and coach.</p>
    </div>
    
    </div>
</div>
<div className="container-fluid px-4 my-4">
    <div className="row">
    <div className="col-md-4 d-flex align-items-center justify-content-center">
        <img src="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/4216/5451/3137/biz-model-2-alt.svg" style={{width:'95%',height:'auto'}} alt="" />
    </div>
    <div className="col-md-8 px-3">
        <h3 className="mb-3 color-d"><strong> We apply the brilliant minds of our people, our smart technology and customer insights...</strong></h3>
        <p className="mb-2"><strong>Powerful data assets</strong></p>
        <p className="mb-2">We understand the travel needs and patterns of our customers in over 45 countries through our B2C and B2B channels with around 78 million visits to our platform each month.</p>
        <p className="mb-2"><strong>Market specific features and personalisation</strong></p>
        <p className="mb-2">Using our product and technology expertise plus the unique data insights generated across our large customer base, we continue to enhance our customer proposition and tailor it to the needs of different markets.</p>
        <p className="mb-2"><strong>Revenue Model</strong></p>
        <p className="mb-2">We earn a commission and fees on ticket sales. We also generate revenue from advertising and ancillary services such as travel insurance and multi currency payment options.</p>
        <p className="mb-2">B2B partners pay a commission and/ or transaction fee on ticket sales, as well as other related technology service fees for the provision of our solutions.</p>
    </div>
    
    </div>
</div>
<div className="container-fluid px-4">
    <h2 className="line  text-center my-3">To generate...</h2>
    <div className="row">
    <div className="col-md-4 d-flex align-items-center justify-content-center">
        <img src="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/8016/5461/1675/biz-model-3-travellers-mob.svg" style={{width:'95%',height:'auto'}} alt="" />
    </div>
    <div className="col-md-8 px-3">
        <p className="mb-3 "><strong>Highly rated customer experience for travellers globally</strong></p>
        <ol className="my-3" style={{listStyleType:'disc'}}>
            <li className="my-2">4.9/5 star rated app</li>
            <li className="my-2">Search and book train tickets for journeys in 45 countries</li>
            <li className="my-2">Available ticket types, journey combinations and fares across carriers in one place</li>
            <li className="my-2">Seamless, friction free booking experience</li>
            <li className="my-2">Multiple languages, currencies and payment options</li>
            <li className="my-2">Digital tickets, smart personalisation, real time travel information and many more features</li>
          

        </ol>
    </div>
    
    </div>
</div>
<div className="container-fluid px-4">
    
    <div className="row">
    <div className="col-md-4 d-flex align-items-center justify-content-center">
        <img src="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/1016/5461/1675/biz-model-3-businesses-mob.svg" style={{width:'95%',height:'auto'}} alt="" />
    </div>
    <div className="col-md-8 px-3">
        <p className="mb-3 "><strong>End-to-end digital retailing solutions for carriers</strong></p>
        <ol className="my-3" style={{listStyleType:'disc'}}>
            <li className="my-2">End-to-end digital retailing solutions for carriers</li>
            <li className="my-2">Deep rail tech expertise - customised, high converting and high-quality solutions</li>
           

        </ol>
        <p className="mb-3 "><strong>Provide travel sellers access to our rail content via our global API</strong></p>
        <ol className="my-3" style={{listStyleType:'disc'}}>
            <li className="my-2">Access our rail content with all local features through one connection</li>
            <li className="my-2">Allows travel sellers to integrate rail into their offering, helping them grow their business</li>
           

        </ol>
        <p className="mb-3 "><strong>Offer smart rail booking solutions for companies of all sizes</strong></p>
        <ol className="my-3" style={{listStyleType:'disc'}}>
            <li className="my-2">Trainline branded business portal for businesses and public sector clients of all sizes</li>
            <li className="my-2">All in one place for full  visibility, cost control, sustainability reporting and duty of care</li>
           

        </ol>
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
export default OurBussines;
