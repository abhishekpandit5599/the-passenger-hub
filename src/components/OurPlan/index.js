
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

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
const { Option } = Select;

const OurPlan = (props) => {
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
  const PanelArray3 = [
    {
      id: "1",
      Header: "Europe’s leading independent rail platform",
      Para: `We enable millions of travellers to seamlessly search, book and manage their journeys through our highly rated Trainline website, mobile app and B2B partner channels.

      4.9/5 star rated app
      44 million cumulative Trainline mobile app downloads
      c.30 million MAUs across the UK and Europe
      c.78 million platform visits each month`,
    },
    {
      id: "2",
      Header:
        "Market-leading customer experience",
      Para: `Our innovation focuses on creating a simple, consistent, friction-free experience for booking and managing travel. We bring together all carriers into one app while providing smart, real-time travel information and self-serve capabilities like journey changes and refunds. 

      Simple, intuitive user interface with all carriers, fares and railcards in one place
      Seamless, friction-free booking experience
      Digital tickets and railcards, smart personalisation, real time travel info 
      Money-saving features: SplitSave, Price Prediction, Ticket Alerts, Best Fare Finder, Railcard Finder 
      Self-service change of journey, automated refund capability`,
    },
    {
      id: "3",
      Header: "Digital marketing leadership",
      Para: `We have developed a highly scalable, marketing playbook in the UK, which we are deploying across our core markets in Europe. This helps drive customer acquisition at scale while maintaining a low cost per new customer acquired (“CPA”)

      c.80% new customer acquisition through free channels in the UK (e.g. SEO)
      Sophisticated CRM strategies to drive engagement and frequency
      Shifting customers to mobile app: 84% app share of transactions in the UK`,
    },
    {
      id: "4",
      Header: "Platform One – single global tech platform",
      Para: `As a platform business, we offer our innovative retailing experience directly to customers through our Trainline-branded businesses, while also giving carrier partners and other travel businesses access to our retail solutions to offer to their customers. 

      270+ rail and coach companies with deep integrations across 45 countries
      c400 engineers, data and tech specialists 
      End-to-end digital retailing and ticketing solutions for rail carriers at a lower cost to serve 
      Provides travel sellers access to our rail content through one connection - our global API`,
    },
    {
      id: "5",
      Header: "A strong and experienced management team",
      Para: `At Trainline, we recognise the importance of building and sustaining a strong, experienced management team. Click on the link below for more information about our management team.`,
    },
    
  ];
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
         <h4 className="my-4">Trainline has competitive strengths and structural tailwinds that position the business for significant long-term growth.</h4>
        </div>
      </div>
      <div className="section">
        <div className="container py-3">
         
          <div className="faq-accordian">
            <h2 className="line" style={{color:'#00bb9c'}}>Competitive strengths </h2>
             
            <div className="accordion">
              <Collapse accordion>
              {PanelArray3.map((val, idx) => {
              return (
                <>
                  <Panel header={val.Header} key={idx}>
                    <p className="p-2">{val.Para}</p>
                  </Panel>
                </>
              );
            })}
               
              </Collapse>
            </div>
          </div>
        </div>
      </div>
      <FooterMain />
    </div>
  );
};
export default OurPlan;
