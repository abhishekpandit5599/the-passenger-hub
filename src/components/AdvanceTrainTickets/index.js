import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Layout, Menu } from "antd";
import { CaretDownOutlined } from '@ant-design/icons';
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
import { minWidth } from "@mui/system";
import ImgCard from "../../common/ImgCard";
import ButtonCard from "../../common/ButtonCard";
import TrainCard from "../../common/TrainCard";
import RailCards from "../../common/RailCards";
// import ButtonCard from "../../common/ButtonCard";


const AdvanceTrainTickets = (props) => {
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
          <h3>Advance Train Tickets</h3>
        </div>
      </div>
      <div className="cheap-train-tickets ">
        <div className="container">

          <div className="row my-2">
            <ImgCard text="Prices from hundreds of train and coach companies" image={images.train} />
            <ImgCard text="Join millions of people who use us every day" image={images.Chip} />
            <ImgCard text="Travel to thousands of destinations in 45 countries" image={images.location} />
          </div>
         
          <div className="row p-5 text-left ">
           
            <p className="my-2"><strong>Did you know that you could save money by planning well ahead and booking an Advance train ticket? Plus, we'd recommend booking travel before you get to the station, as this will limit your time spent there. For safe, contactless travel, choose a digital ticket where possible.</strong></p>
            <p className="my-2"><strong>We'll fill you in on all the details about Advance tickets, including rules and restrictions, and show you how to find Advance tickets for your preferred train company and route. Check out all the info below, from basic advice on how to buy tickets to frequently asked questions.</strong></p>
          </div>
          <div className="row p-5  ">
           
            <h2 className="my-2 text-center w-100 "><strong className=" w-100">Book with confidence with Advance tickets</strong></h2>
            <p className="my-2 text-left"><strong>December 2022 update:</strong>You can currently request a fee-free exchange to your Advance ticket if you book with Trainline. This means if your plans change, you can make multiple changes fee-free, but <br /> <strong>must change the date/time by 18:00 the day before travel.</strong>Changes can be made after 18:00, up until the date/time of travel but a fee will be applied.</p>
          </div>
          <div className="row p-5  ">
           
            <h2 className="my-2 text-center w-100"><strong className="text-center w-100 ">Advance train tickets explained</strong></h2>
            <p className="my-2 text-left"><strong>Know exactly when and where you need to travel? Book your train tickets in advance on our app and secure your place on board your chosen service with an Advance ticket. Read on for more information.</strong></p>
          </div>
          
        </div>
        <div className="card-section  py-4 my-2"  style={{background:'#fafafa'}}>
            <h2 className="my-4 text-center">Hottest train deals in the UK right now</h2>
            <div className="container-fluid ">
              <div className="row px-5">

           <div className='col-md-6 col-sm-10 mx-auto my-2'>   <TrainCard boxShadow="no" CardBorder="no" headingfont="24px"  heading="What is an Advance train ticket?" textFont="15px" text="Advance train tickets are fares that go on sale well before the day of travel. They're only available as Single tickets for A to B rail journeys and are non-refundable. They're also non-flexible. Perfect for those who like to plan their journeys well ahead of time, Advance tickets are the best way to be organised when it comes to travel." /></div>

           <div className='col-md-6 col-sm-10 mx-auto my-2'>   <TrainCard boxShadow="no" CardBorder="no" headingfont="24px"  heading="Why book train tickets in advance?" textFont="15px" text="Booking train tickets in advance on our app can help you save time at the station. Digital tickets offer you contactless travel as you scan them directly from your phone, so there’s no need to touch ticket machines either.Although not all train services will let you reserve a seat, you'll stand a better chance of getting one when booking in advance.Advance train tickets may also be available for First Class travel, meaning you can enjoy all the perks of a higher standard of train travel at a good price." /></div>
           <div className='col-md-6 col-sm-10 mx-auto my-2'>   <TrainCard boxShadow="no" CardBorder="no" headingfont="24px"  heading="Can I buy Advance Return tickets?" textFont="15px" text="No, Advance tickets are only sold as Single Tickets. However, you can buy an Advance Single train ticket for both directions, meaning you can mix and match Single tickets for the cheapest possible return journey to your chosen destination." /></div>
           <div className='col-md-6 col-sm-10 mx-auto my-2'>   <TrainCard boxShadow="no" CardBorder="no" headingfont="24px"  heading="When do Advance train tickets become available?" textFont="15px" text="Typically, train companies release their Advance tickets 12 weeks before the departure date, although some go on sale as far as 24 weeks in advance! Only a limited number of tickets will be available, so be quick to secure yours as the fare can rise as the date of travel gets nearer. You can also check the Advance train ticket release dates for certain UK train companies on our Ticket Alert page." /></div>

           
              
              </div>

            </div>
          </div>
          
     
      </div>
      <FooterMain />
      <Icon1 handleClick={handlewClick} />
    </div>
  );
};
export default AdvanceTrainTickets;
