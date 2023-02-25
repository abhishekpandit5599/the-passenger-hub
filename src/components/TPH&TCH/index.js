import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button} from "antd";
import {CaretDownOutlined} from '@ant-design/icons';

import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import FooterMain from "../../common/footer";
import Icon1 from "../../common/icon";
import "../../css/trainticekt.css"
import InfoCard from "../../common/InfoCard";


const TPHTCH= (props) => {
    const [WrapperDisplay, setWrapperDisplay] = useState("none")
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
          <h3>TPH & TCH</h3>
        </div>
      </div>
      <div className="press">
        <div className="container">
        
      <div className="row">
        <div className="col-md-8">
         
            <p className="my-3">Operating over 1,500 services each weekday across the network, SWR employs more than 5,000 employees and provides commuter inter-urban, regional and long distance services to passengers in South West London and southern counties of England and Island Line services on the Isle of Wight, as well as providing connectivity to the ports and airports in the region.</p>
        
        <p className="my-3">As well as commuters and business travellers, SWR transports leisure travellers across the region, to many tourist and heritage sites, and the numerous major sporting and social events that take place along the route every year.</p>
        <p className="my-3">SWR provide easy and convenient mobility, improving quality of life by connecting people and communities.</p>
        <h4 className="bold my-3">About FirstGroup</h4>
        <p className="my-3">FirstGroup is a leading provider of transport services in the UK and North America. With £6.4 billion in revenue and around 100,000 employees, we transported 2.1 billion passengers last year.</p>
        <p className="my-3"> Whether for business, education, health, social or recreation – we get our customers where they want to be, when they want to be there.  We create solutions that reduce complexity, making travel smoother and life easier.</p>
        <p className="my-3">We provide easy and convenient mobility, improving quality of life by connecting people and communities.</p>
        <p className="my-3">Each of our five divisions is a leader in its field: In North America, First Student is the largest provider of home-to-school student transportation with a fleet of 42,000 yellow school buses, First Transit is one of the largest providers of outsourced transit management and contracting services, while Greyhound is the only nationwide operator of scheduled intercity coaches. In the UK, First Bus is one of Britain's largest bus companies with 1.6 million passengers a day, and First Rail is one of the country's largest and most experienced rail operators, carrying more than 260 million passengers in 2017/18.</p>
        <h4 className="bold my-3">First Rail</h4>
        <p className="my-3"> FirstGroup is one of the largest and most experienced rail operators in the UK and the only one to run every type of railway - long distance, regional, commuter and sleeper operations. We carried more than 260 million passengers in 2017/18.</p>
        <ol className="dfdf my-2">
            <li className="dfdr my-2"> We operate three passenger franchises – South Western Railway, Great Western Railway and TransPennine Express – and one open access service, Hull Trains. </li>
            <li className="dfdr my-2">We operate the London Trams network on behalf of Transport for London, carrying around 29 million passengers a year and will begin operating the Heathrow Express service, in partnership with Heathrow Airport, in 2018. </li>
        </ol>
   
        </div>
        <div className="col-md-4 col-10 mx-auto">
            <InfoCard  Head='National Rail Passenger Survey' bodyText="Our results in the latest Natiional Rail Passenger Survey"/>
            <InfoCard  Head='National Rail Passenger Survey' bodyText="Our results in the latest Natiional Rail Passenger Survey"/>
        </div>
      </div>
        </div>
      </div>
      <FooterMain />
      <Icon1 handleClick={handlewClick} />
    </div>
  );
};
export default TPHTCH;
