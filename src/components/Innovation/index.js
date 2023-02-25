
import React, {  useEffect } from "react";


import { Link } from "react-router-dom";
import { Collapse, Select, DatePicker, Space } from "antd";

import { useDispatch, useSelector } from "react-redux";

import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";

import CustomCard from "../../common/CustomCard";


const Innovation = (props) => {
 
  const dispatch = useDispatch();
  const { Panel } = Collapse;


  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState } = authenticationData;
  const text = (
    <div className="text-model">
    <ol className="my-3" style={{listStyleType:'disc'}}>
      <li className="my-2">500 microservices, increasing speed of development, flexibility and scalability</li>
      <li className="my-2">c400 engineers, data and tech specialists</li>
      <li className="my-2">600+ releases per week</li>
    </ol>
    </div>
  );

  const text1 = (
    <div className="text-model">
     <ol className="my-3" style={{listStyleType:'disc'}}>
      <li className="my-2">Simple “one click” user interface to cut through industry complexity</li>
      <li className="my-2">Proprietary multi-carrier/modal journey planner</li>
      <li className="my-2">10+payment options including google and apple pay</li>
    </ol>
    </div>
  );
  const text2 = (
    <div className="text-model">
       <ol className="my-3" style={{listStyleType:'disc'}}>
      <li className="my-2">Rail and coach</li>
      <li className="my-2">Pre and post-sales</li>
      <li className="my-2">Real-time data</li>
      <li className="my-2">Add-on travel services: insurance, etc.</li>
    </ol>
    </div>
  );
  const text3 = (
    <div className="text-model">
     <ol className="my-3" style={{listStyleType:'disc'}}>
      <li className="my-2">4bn TB data processed per day</li>
      <li className="my-2">Bespoke AI-driven features</li>
      <li className="my-2">Personalised UX and CRM</li>
    
    </ol>
    </div>
  );
  const text4 = (
    <div className="text-model">
      <ol className="my-3" style={{listStyleType:'disc'}}>
      <li className="my-2">PCI-DSS Level 1 (Merchant & Service Provider) since 2013</li>
      <li className="my-2">Cyber Essentials certification since 2017</li>
      <li className="my-2">Partnership with NCSC & NCA</li>
      <li className="my-2">Internal standards aligned with ISO27001 certification & NIST framework</li>
      <li className="my-2">Business Continuity Planning (ISO 22301) compliant</li>
      <li className="my-2">3DS version 2 implemented</li>
      <li className="my-2">Payment Services Directive II Secure Customer Authentication ready</li>
      <li className="my-2">Industry-leading fraud to sales ratio</li>
      <li className="my-2">Industry-leading payment acceptance rates</li>
    
    </ol>
    </div>
  );

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
          <h3>Innovation</h3>
        </div>
      </div>
      <div className="press">
        <div className="container">
            <h4 className="line"><strong>At Trainline, we pride ourselves on our proprietary, modern, scalable tech platform created and maintained by our c400 bright product, data and tech minds.</strong></h4>
        </div>
        <div className="py-5">
      

<div className="container-fluid p-2 my-4">
    <div className="row px-md-5">
    <div className="col-md-6 px-3">
        <h3 className="mb-3 line"><strong>Bright minds</strong></h3>
        <p>Our ability to bring together teams comprising developers, designers, infrastructure and data scientists to create a world-class experience for our customers and carrier partners is what defines us and allows us to continually innovate and maintain our superior customer experience</p>
    </div>
    <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img src="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/1416/5366/3640/innovation-1-1440x1080.jpg" style={{width:'95%',height:'auto'}} alt="" />
    </div>
    </div>
</div>
<div className="container-fluid p-2 my-4">
    <div className="row px-md-5">
    <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img src="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/6216/4572/8235/about-platform-915x686.jpg" style={{width:'95%',height:'auto'}} alt="" />
    </div>
    <div className="col-md-6 px-3">
        <h3 className="mb-3 line"><strong>Platform One</strong></h3>
        <p>Through our agile, proprietary technology – Platform One – we are bringing together millions of routes, fares and journey times from hundreds of carriers. Platform One is the engine behind our Trainline consumer app and website, and it also powers the rail booking and retailing solutions for our partners and B2B clients such as rail carriers, travel sellers, businesses and public sector organisations. We leverage our technology, customer insight, data and scale to provide a seamless travel experience for our customers and put rail at the heart of more journeys.</p>
    </div>
   
    </div>
</div>

<div className="p-4">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-4 my-2">
                <CustomCard img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/6016/5366/6511/600-releases-icon.svg" heading="600+" text="releases a week"/>
            </div>
            <div className="col-md-4 my-2">
                <CustomCard img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/3716/5366/6505/3-77m-origin-icon.svg" heading="3.8m" text="origin-destination pairs per month"/>
            </div>
            <div className="col-md-4 my-2">
                <CustomCard img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/3416/5390/6718/Microservices-icon.svg" heading=">500" text="microservices"/>
            </div>
            <div className="col-md-4 my-2">
                <CustomCard img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/1016/5366/6482/296-searches-icon.svg" heading="296" text="Searches per second"/>
            </div>
            <div className="col-md-4 my-2">
                <CustomCard img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/3216/5366/6489/3-TB-data-icon.svg" heading="4+ TB" text="data processed a day"/>
            </div>
            <div className="col-md-4 my-2">
                <CustomCard img="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/4716/5366/6475/400-data-tech-icon.svg" heading="c400" text="engineers, data and tech specialists"/>
            </div>
        </div>
    </div>
</div>
<div className="p-4">
  <div className="container">
    <div className="row">
    <div className="faq-accordian" style={{width:'100%'}}>
            <h2 className="line">
              {/* {appConstants.frequent}
              <span className="color-d"> {appConstants.Asked}</span>{" "}
              {appConstants.Questions} */}
            </h2>
            {/* <div className="text-line">
                            <img src={images.border1} style={{ width: '400px' }} />
                        </div> */}
            <div className="accordion " >
              <Collapse accordion >
                <Panel
                  header="Reliable, scalable, secure"
                  key="1" 
                  
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header="Customer-centric e-commerce "
                  key="2"
                >
                  <p>{text1}</p>
                </Panel>
                <Panel
                  header="Deep inventory connections"
                  key="3"
                >
                  <p>{text2}</p>
                </Panel>
                <Panel
                  header="Personalised AI data products"
                  key="4"
                >
                  <p>{text3}</p>
                </Panel>
                <Panel
                  header="Security, payments, fulfilment, fraud safeguards"
                  key="5"
                >
                  <p>{text4}</p>
                </Panel>
              </Collapse>
            </div>
          </div>
    </div>
  </div>
</div>
        </div>
      
      </div>
      
      <FooterMain />
    </div>
  );
};
export default Innovation;
