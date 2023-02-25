import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import images from "../../themes/appImage";
import { Collapse } from "antd";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import FooterMain from "../../common/footer";
import Icon1 from "../../common/icon";
import "../../css/trainticekt.css"
import { Link } from "react-router-dom";
import InfoCard from "../../common/InfoCard";


const PassengerHubCharter = (props) => {
  console.log("welcome investors screen.");
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
          <h3>Passenger Hub Charter</h3>
        </div>
      </div>
      <div className="press">
        <div className="container">

          <div className="row">
            <div className="col-md-8">
              <div className="section p-4 my-3" style={{ background: "rgb(149 223 172 / 34%)", }}>
                <h3 className="my-2">Contact Centre opening hours</h3>
                <ul className="hidh">
                  <li className="kist-item">Monday to Friday 08:00 - 20:00</li>
                  <li className="kist-item">Saturday 09:00 - 18:00</li>
                  <li className="kist-item">Sunday 09:00 – 16:00</li>
                </ul>
                <p className="my-2">We apologise that due to unforeseen circumstances, we do not have the normal number of staff available to answer your call as quickly as usual, this will result in potentially long waiting times if you call. Please consider using the extensive FAQ’s on this site.</p>
                <p className="my-2">If after looking at these you still have a question, please use the contact us form below so we can respond to you via e-mail</p>

              </div>
              <p className="my-3">At South Western Railway we put our customers at the heart of everything we do and every decision we make. Our highest priority is making sure you are safe, enjoy your journey and always feel that you are treated fairly.</p>

              <p className="my-3">To find out about our customer care, performance and safety standards take a look at our Passenger’s Charter:</p>
              <ol className="hs my-3">
                <li className="sdf">Download our Passenger's Charter</li>
                <li className="sdf">Pick up a copy at your nearest station</li>
                <li className="sdf">Call our Customer Service Centre on 0345 6000 650
                  – we're open 06:00 to 22:00 every day except 25 and 26 December</li>
              </ol>
              <p className="we-wrok my-2">
                We work with Transport Focus, London TravelWatch, the Department for Transport and others to make sure our Passenger’s Charter is up to date and fair for all of our customers – if you would like to comment on the Charter or anything else, please contact our Customer Service Centre on 0345 6000 650.
              </p>
              <h5 className="get-i my-2">Get in touch</h5>
              <p className="my-3">Contact us whether you need to change your ticket, you've lost something on our trains or stations, you want to claim a refund or compensation, you want to make a complaint, or you just have a query.</p>
              <h6 className="my-2"><strong>Our policies</strong></h6>
              <ul className="sd">
                <li className="sds"><Link>Penalty Fares</Link></li>
                <li className="sds"><Link>National Rail Conditions of Travel</Link></li>
                <li className="sds"><Link>Disabled People’s Protection Policy</Link></li>
                <li className="sds"><Link>Disruption and delays policy</Link></li>
              </ul>
            </div>
            <div className="col-md-4 col-10 mx-auto">
              <InfoCard Head='Performance' bodyText="Find out our performance aims the results" />
              <InfoCard Head='Find the best fare' bodyText="Find the right train ticket for your journey" />

            </div>
          </div>
        </div>
      </div>
      <FooterMain />
      <Icon1 handleClick={handlewClick} />
    </div>
  );
};
export default PassengerHubCharter;
