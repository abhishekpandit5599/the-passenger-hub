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


const CheapTrainTickets = (props) => {
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
          <h3>Cheap Train Tickets</h3>
        </div>
      </div>
      <div className="cheap-train-tickets ">
        <div className="container">

          <div className="row my-2">
            <ImgCard text="Prices from hundreds of train and coach companies" image={images.train} />
            <ImgCard text="Join millions of people who use us every day" image={images.Chip} />
            <ImgCard text="Travel to thousands of destinations in 45 countries" image={images.location} />
          </div>
          <div className="row my-4">
            <ButtonCard cardhead="I know what I'm after..." cardtext='Search by train travel deals for families, kids, weekend and group train travel etc.' buttontext='Search By Type' />
            <ButtonCard cardhead="I know what I'm after..." cardtext='Search by train travel deals for families, kids, weekend and group train travel etc.' buttontext='Search By Type' />

          </div>
          <div className="row my-4 text-center ">
            <h2 className="my-2">On the go, or in advance – Trainline means everyday savings of 35%*</h2>
            <p className="my-2">You'll find all the latest train deals and discounts you can book with us from around the UK here. If you're looking for other ways to save money on rail travel, why not visit our cheap train tickets guide.</p>
          </div>

        </div>
        <div className="card-section  py-4 my-2" style={{ background: '#fafafa' }}>
          <h2 className="my-4 text-center">Hottest train deals in the UK right now</h2>
          <div className="container-fluid ">
            <div className="row px-5">

              <div className='col-md-3 col-sm-6 my-2'>   <TrainCard cardHeight="350px" displaybtn="block" buttontext='£15 off' img="https://www.thetrainline.com/cms/media/6291/seasons-promo-piggy.png" heading="Get £15 of Season Tickets on our app" text="Start the year off right with a commute that saves you money, use code HELLOSAVINGS on our app." link="Buy yours now" /></div>

              <div className='col-md-3 col-sm-6 my-2'>   <TrainCard cardHeight="350px" displaybtn="block" buttontext='25% off' width="150px" img="https://www.thetrainline.com/cmsmedia/cms/4766/greater-anglia-logo.png" heading="Greater Anglia - 25% off with Duo train tickets" text="25% off for 2 adults travelling during the weekend on certain Greater Anglia services." link="View details" /></div>

              <div className='col-md-3 col-sm-6 my-2'>   <TrainCard cardHeight="350px" displaybtn="block" buttontext='Split tickets' img="https://www.thetrainline.com/cms/media/4233/splitsave-picto.png" heading="SplitSave" text="Our split-ticketing app feature can be much cheaper than buying a single ticket for long journeys." link="Find out more about SplitSave" /></div>

              <div className='col-md-3 col-sm-6 my-2'>   <TrainCard cardHeight="350px" displaybtn="block" buttontext='Flexible travel' img="https://www.thetrainline.com/cms/media/6291/seasons-promo-piggy.png" heading="South Western Railway - Sunday Out train tickets" text="For Sunday travel to and from London on South Western Railway services." link="View details" /></div>


            </div>

          </div>
        </div>
        <div className="Deal-type-section p-4">
          <div className="container-fluid p-3 text-center">
            <h2 className="my-2">Deal types</h2>
            <h5 className="my-2">Already know what kind of train deal you're looking for but not sure what's on offer? Pick a type of deal below to see some of great savings you can make when booking UK train travel with us.</h5>
            <div className="row">
              <div className='col-md-3 col-sm-6 my-2'>  <TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4400/family_pictogram.png" buttontext="" link="Family" /></div>
              <div className='col-md-3 col-sm-6 my-2'><TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4403/kids_backpack_pictogram.png" buttontext="" link="Kids" /></div>
              <div className='col-md-3 col-sm-6 my-2'> <TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4399/coloured_map_pictogram.png" buttontext="" link="Evenings out" /></div>
              <div className='col-md-3 col-sm-6 my-2'><TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4401/group_people_pictogram.png" buttontext="" link="Group" /></div>
              <div className='col-md-3 col-sm-6 my-2'><TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4408/trees_pictogram.png" buttontext="" link="Weekend" /></div>
              <div className='col-md-3 col-sm-6 my-2'><TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4406/railcards_pictogram.png" buttontext="" link="Railcards" /></div>
              <div className='col-md-3 col-sm-6 my-2'><TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4405/piggybank_savings_pictogram.png" buttontext="" link="Other ways to save" /></div>
              <div className='col-md-3 col-sm-6 my-2'><TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4494/suitcase-heart-pictogram.png" buttontext="" link="Family" /></div>
            </div>
          </div>
        </div>
        <div className="card-section  py-4 my-2" style={{ background: '#fafafa' }}>
          <h2 className="my-4 text-center">Hottest train deals in the UK right now</h2>
          <div className="container-fluid ">
            <div className="row px-5">

              <div className='col-md-3 col-sm-6 my-2'>     <TrainCard cardHeight="350px" displaybtn="block" buttontext='Accommodation' width="150px" img="https://www.thetrainline.com/cms/media/4487/bookingcom-logo.png" heading="Booking.com" text="Browse and book hotels, campsites, holiday rentals and more" link="View details" /> </div>
              <div className='col-md-3 col-sm-6 my-2'>      <TrainCard cardHeight="350px" displaybtn="block" buttontext='Tours & activities' width="150px" img="https://www.thetrainline.com/cms/media/4489/get-your-guide-logo.png" heading="Get your guide" text="Discover tours, excursions, things to do and fun activities around the UK." link="View details" /></div>
              <div className='col-md-3 col-sm-6 my-2'>  <TrainCard cardHeight="350px" displaybtn="block" buttontext='Taxis' width="150px" img="https://www.thetrainline.com/cms/media/4491/trainline-karhoo-logo.png" heading="Trainline Taxis by Karhoo" text="Compare taxi prices to and from the station across the UK and pre-book online." link="View details" /></div>
              <div className='col-md-3 col-sm-6 my-2'> <TrainCard cardHeight="350px" displaybtn="block" buttontext='Parking' width="150px" img="https://www.thetrainline.com/cms/media/4490/justpark-logo.png" heading="JustPark" text="Discover and pre-book parking spaces near the stations across the UK." link="View details" /></div>

            </div>

          </div>
        </div>
        <div className="EVENING-OUT-2">
          <h2 className="my-4 text-center">Evening out train deals</h2>
          <p className="my-2 text-center"><strong>
            Heading for an evening out in the city? We’ve got you covered. Check out the latest deals for evening travel you can book with us into London and Birmingham.</strong></p>
          <div className="container-fluid ">
            <div className="row px-5">

              <div className='col-md-4 col-sm-6 my-2'>     <TrainCard cardHeight="350px" displaybtn="block" buttontext='Accommodation' width="150px" img="https://www.thetrainline.com/cms/media/4487/bookingcom-logo.png" heading="Booking.com" text="Browse and book hotels, campsites, holiday rentals and more" link="View details" /> </div>
              <div className='col-md-4 col-sm-6 my-2'>      <TrainCard cardHeight="350px" displaybtn="block" buttontext='Tours & activities' width="150px" img="https://www.thetrainline.com/cms/media/4489/get-your-guide-logo.png" heading="Get your guide" text="Discover tours, excursions, things to do and fun activities around the UK." link="View details" /></div>
              <div className='col-md-4 col-sm-6 my-2'>  <TrainCard cardHeight="350px" displaybtn="block" buttontext='Taxis' width="150px" img="https://www.thetrainline.com/cms/media/4491/trainline-karhoo-logo.png" heading="Trainline Taxis by Karhoo" text="Compare taxi prices to and from the station across the UK and pre-book online." link="View details" /></div>

            </div>

          </div>
        </div>
        <div className="railcards">
          <div className="container-fluid">
            <div className="row my-2">
              <div className="col-md-6 my-2 col-10 mx-auto">
                <RailCards CardHeading="16-25 Railcard" CardbackroundColor="rgb(237, 94, 0)" list1="For ages 16-25" list2="Great for:" subtitle2="Teenagers, students, graduates, and young professionals" list3="1- or 3-year validity available" subtitle3="Save £20 with a 3-year Railcard" list4="Digital only" subtitle4="Railcards live in your account in the Trainline app so you can use on any of your devices. No download codes needed!" btn1text="Learn More" btn2text="Buy 1-Year for 30" btn3text="Buy 3-Year for $70 " />
              </div>
              <div className="col-md-6 my-2 col-10 mx-auto">
                <RailCards CardHeading="Senior Railcard" CardbackroundColor="rgb(40, 50, 105)" list1="For ages 60+" list2="Great for:" subtitle2="Seniors, grandparents, and retirees" list3="1- or 3-year validity available" subtitle3="Save £20 with a 3-year Railcard" list4="Digital only" subtitle4="Railcards live in your account in the Trainline app so you can use on any of your devices. No download codes needed!" btn1text="Learn More" btn2text="Buy 1-Year for 30" btn3text="Buy 3-Year for $70 " />
              </div>
              <div className="col-md-6 my-2 col-10 mx-auto">
                <RailCards CardHeading="26-30 Railcard" CardbackroundColor="rgb(223 60 47)" list1="For ages 26-30" list2="Great for:" subtitle2="Millennials, graduates, and young professionals" list3="Digital only" subtitle3="Railcards live in your account in the Trainline app so you can use on any of your devices. No download codes needed!" btn1text="Learn More" btn2text="Buy 1-Year for 30" />
              </div>
              <div className="col-md-6 my-2 col-10 mx-auto">
                <RailCards CardHeading="Two Together Railcard" CardbackroundColor="rgb(118, 60, 150)" list1="Must travel together" list2="Great for:" subtitle2="Friends, couples, flatmates, or colleagues who regularly travel together" list3="Digital only" subtitle3="Railcards live in your account in the Trainline app so you can use on any of your devices. No download codes needed!" list4="For ages 16+" btn1text="Learn More" btn2text="Buy 1-Year for 30" />
              </div>
              <div className="col-md-6 my-2 col-10 mx-auto">
                <RailCards CardHeading="Family & Friends Railcard" CardbackroundColor="rgb(230, 5, 45)" list1="For up to four adults and four children aged 5-15" subtitle1="At least 1 adult and 1 child must travel together. Children get 60% discount" list2="Great for:" subtitle2="Anyone who travels in groups with children - no relation necessary" list3="1- or 3-year validity available" subtitle3="Save £20 with a 3-year Railcard" list4="Digital only" subtitle4="Railcards live in your account in the Trainline app so you can use on any of your devices. No download codes needed!" btn1text="Learn More" btn2text="Buy 1-Year for 30" btn3text="Buy 3-Year for $70 " />
              </div>
              <div className="col-md-6 my-2 col-10 mx-auto">
                <RailCards CardHeading="Network Railcard" CardbackroundColor="rgb(0, 153, 209)" list1="For travellers in the South East of England" list2="For up to four adults and four children aged 5-15" subtitle2="Children get 60% off" list3="Great for:" subtitle3="Commuters and Londoners" list4="Digital only" subtitle4="Railcards live in your account in the Trainline app so you can use on any of your devices. No download codes needed!" btn1text="Learn More" btn2text="Buy 1-Year for 30" />
              </div>
              <div className="col-md-6 my-2 col-10 mx-auto">
                <RailCards CardHeading="16-17 Saver" CardbackroundColor="rgb(254, 235, 25)" list1="For ages 16-17" subtitle1="Passengers get 50% discount on most tickets, including seasons" list2="Great for:" subtitle2="School and college students" btn1text="Learn More" btn2text="Buy 1-Year for 30" />
              </div>
              <div className="col-md-6 my-2 col-10 mx-auto">
                <RailCards CardHeading="Disabled Persons Railcard" CardbackroundColor="rgb(0, 87, 42)" list1="Save 1/3 on all train travel" subtitle1="Travelling with another adult? They will also get 1/3 off their rail fare" list2="Great for:" subtitle2="People with a disability that makes travelling by train difficult. Proof of eligibility applies" btn1text="Learn More" />
              </div>
            </div>
          </div>
        </div>

        <div className="EVENING-OUT">
          <h2 className="my-4 text-center">Other ways to save</h2>
          <p className="my-2 text-center"><strong>
            There doesn't always have to be a specific deal running for you to save money on train tickets. Check out some of the other ways we can help you save money on rail travel below</strong></p>
          <div className="container-fluid ">
            <div className="row px-5">

              <div className='col-md-6 col-sm-10 mx-auto my-2'>     <TrainCard cardHeight="300px" displaybtn="block" buttontext='Book in advance' width="150px" img="https://www.thetrainline.com/cms/media/4398/calendar_pictogram.png" heading="Advance train tickets" text="Book UK train tickets up to 12 weeks in advance to find some of the best cheap prices. Perfect for those who like to plan their journeys well ahead of time." link="Find out more about Advance train tickets" /> </div>
              <div className='col-md-6 col-sm-10 mx-auto my-2'>      <TrainCard cardHeight="300px" displaybtn="block" buttontext='Split tickets' width="150px" img="ihttps://www.thetrainline.com/cms/media/4389/splitsave_pictogram.png" heading="SplitSave" text="Our split-ticketing app feature can be much cheaper than buying a single ticket when travelling on a long journey. We’ll show you if SplitSave tickets are available and how much you can save. Just look out for the SplitSave icon in your search results." link="Find out more about SplitSave" /></div>

            </div>

          </div>
        </div>
        <div className="Deal-type-section p-4">
          <div className="container-fluid p-3 text-center">
            <h2 className="my-2">Deals by region</h2>
            <h5 className="my-2">If you know where you're heading for a day out or weekend away, but aren't sure which train company will take you there, you've come to the right place. Browse the amazing train deals you can book with us, by regions around the UK.</h5>
            <div className="row">
              <div className='col-md-3 col-sm-6 my-2'>  <TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4348/station-icon.png" link="The South West" /></div>
              <div className='col-md-3 col-sm-6 my-2'>  <TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4348/station-icon.png" link="The South East" /></div>
              <div className='col-md-3 col-sm-6 my-2'>  <TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4348/station-icon.png" link="The Midlands" /></div>
              <div className='col-md-3 col-sm-6 my-2'>  <TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4348/station-icon.png" link="East Anglia" /></div>
              <div className='col-md-3 col-sm-6 my-2'>  <TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4348/station-icon.png" link="London" /></div>
              <div className='col-md-3 col-sm-6 my-2'>  <TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4348/station-icon.png" link="The North West" /></div>
              <div className='col-md-3 col-sm-6 my-2'>  <TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4348/station-icon.png" link="Yorkshire and the North East" /></div>
              <div className='col-md-3 col-sm-6 my-2'>  <TrainCard displaybtn="none" img="https://www.thetrainline.com/cms/media/4348/station-icon.png" link="Scotland" /></div>

            </div>
          </div>
        </div>
        <div className="traiine p-4">
          <section class="hero d-flex align-items-center">
            <div class="container-fluid ">
              <div class="row">
                <div class="col-md-6 d-flex justify-content-center align-center">
                  <div class="text-center text-md-left">
                    <h2 class="hero-heading" style={{ fontWeight: "700" }}>We've also got amazing offers on European train travel you won't want to miss</h2>
                    <p class="hero-paragraph">We sell tickets on behalf of Europe's biggest train companies and we've got some fantastic deals to help save you money on your next train trip. Whether you're catching the Eurostar or thinking about travelling by train through Cinque Terre, we've got you covered.</p>
                    <a href="#" class="btn btn-primary">Search European Deals</a>
                  </div>
                </div>
                <div class="col-md-6 p-3">
                  <img src='https://www.thetrainline.com/cmsmedia/cms/9968/paris_woman_hero_mobile.jpg' style={{ borderRadius: '15px', boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px" }} alt="Hero Image" class="img-fluid" />
                </div>
              </div>
            </div>
          </section>




        </div>
        <div className="EVENING-OUT-2">
          <h2 className="my-4 text-center">South East travel deals</h2>
          <p className="my-2 text-center"><strong>
            Check out the latest deals for train travel to and from the South East of England with us. </strong></p>
          <div className="container-fluid ">
            <div className="row px-5">

              <div className='col-md-4 col-sm-6 my-2'>     <TrainCard cardHeight="350px" displaybtn="block" buttontext='£2 kids trave' width="150px" img="https://www.thetrainline.com/cms/media/3358/southern_logo.png" heading="Southern - Kids travel for just £2" text="For Off-Peak travel on any Southern route not wholly within Zones 1-9." link="View details" /> </div>
              <div className='col-md-4 col-sm-6 my-2'>      <TrainCard cardHeight="350px" displaybtn="block" buttontext='£1 kids travel' width="150px" img="https://www.thetrainline.com/cms/media/3356/south-eastern_logo.png" heading="Southeastern - Kids travel for just £1" text="For Off-Peak travel on any Southeastern route not wholly within Zones 1-9." link="View details" /></div>
              <div className='col-md-4 col-sm-6 my-2'>  <TrainCard cardHeight="350px" displaybtn="block" buttontext='£2 kids travel' width="150px" img="https://www.thetrainline.com/cms/media/3361/thameslink_logo.png" heading="Thameslink - Kids travel for just £2" text="For Off-Peak travel on any Thameslink route not wholly within Zones 1-9." link="View details" /></div>

            </div>

          </div>
        </div>
        <div className="EVENING-OUT-2">
          <h2 className="my-4 text-center">South West travel deals</h2>
          <p className="my-2 text-center"><strong>
            Planning a trip to or from the South West of England? Make sure you snap up one of these great train travel offers. </strong></p>
          <div className="container-fluid ">
            <div className="row px-5">

              <div className='col-md-4 col-sm-6 my-2'>     <TrainCard cardHeight="350px" displaybtn="block" buttontext='£5 upgrade' width="150px" img="https://www.thetrainline.com/cms/media/3357/south-western-railway_logo.png" heading="South Western Railway - Weekend First Class upgrade for £5" text="For weekend travel on South Western Railway services with First Class seating." link="View details" /> </div>
              <div className='col-md-4 col-sm-6 my-2'>      <TrainCard cardHeight="350px" displaybtn="block" buttontext='From £25' width="150px" img="https://www.thetrainline.com/cms/media/3335/chiltern-railways_logo.png" heading="Chiltern - Family Travelcard from £25" text="For Off-Peak Return travel into London and Zones 1-6." link="View details" /></div>
              <div className='col-md-4 col-sm-6 my-2'>  <TrainCard cardHeight="350px" displaybtn="block" buttontext='From £19' width="150px" img="https://www.thetrainline.com/cms/media/3340/great-western-railway_logo.png" heading="Great Western Railway - Family Tickets from £19" text="For journeys between popular GWR stations and London." link="View details" /></div>

            </div>

          </div>
        </div>
        <div className="EVENING-OUT-2">
          <h2 className="my-4 text-center">East Anglia travel deals</h2>
          <p className="my-2 text-center"><strong>
            From the charming streets of Cambridge and Norwich to sandy Southend beach, book your train tickets with us and save with these amazing deals. </strong></p>
          <div className="container-fluid ">
            <div className="row px-5 d-flex flex-nowrap scrollbar_Hide" style={{ overflowX: 'scroll', scrollbarWidth: 'none' }}>

              <div className='col-md-4 col-sm-6 my-2'>   <TrainCard cardHeight="350px" displaybtn="block" buttontext='Return for £23' width="150px" img="https://www.thetrainline.com/cmsmedia/cms/4766/greater-anglia-logo.png" heading="Greater Anglia - London Evening Out Return for £23" text="For spending an evening in London, with the option of same-day or next morning return." link="View details" /> </div>
              <div className='col-md-4 col-sm-6 my-2'>   <TrainCard cardHeight="350px" displaybtn="block" buttontext='25% off' width="150px" img="https://www.thetrainline.com/cmsmedia/cms/4766/greater-anglia-logo.png" heading="Greater Anglia - 25% off with Duo train tickets" text="For any 2 adults travelling together during the weekend." link="View details" /> </div>
              <div className='col-md-4 col-sm-6 my-2'>   <TrainCard cardHeight="350px" displaybtn="block" buttontext='Family discounts' width="150px" img="https://www.thetrainline.com/cmsmedia/cms/4766/greater-anglia-logo.png" heading="Greater Anglia - Family travelcards" text="For Off-Peak Return travel into London and Zones 1-6." link="View details" /></div>
              <div className='col-md-4 col-sm-6 my-2'>  <TrainCard cardHeight="350px" displaybtn="block" buttontext='£2 kids trave' width="150px" img="https://www.thetrainline.com/cms/media/3341/great_northern_logo.png" heading="Great Northern - Kids travel for just £2" text="For Off-Peak travel on any Great Nothern route not wholly within Zones 1-9." link="View details" /></div>
              <div className='col-md-4 col-sm-6 my-2'>  <TrainCard cardHeight="350px" displaybtn="block" buttontext='25% off' width="150px" img="https://www.thetrainline.com/cms/media/3333/c2c_logo.png" heading="Great Western Railway - Family Tickets from £19" text="For journeys between popular GWR stations and London." link="View details" /></div>
              <div className='col-md-4 col-sm-6 my-2'>  <TrainCard cardHeight="350px" displaybtn="block" buttontext='£2 kids travel' width="150px" img="https://www.thetrainline.com/cms/media/3333/c2c_logo.png" heading="c2c - 25% off with a Family Travelcard" text="For Off-Peak Return journeys into London and Zones 1-6." link="View details" /></div>
              <div className='col-md-4 col-sm-6 my-2'>  <TrainCard cardHeight="350px" displaybtn="block" buttontext='From £19' width="150px" img="https://www.thetrainline.com/cms/media/3340/great-western-railway_logo.png" heading="Great Western Railway - Family Tickets from £19" text="For journeys between popular GWR stations and London." link="View details" /></div>

            </div>

          </div>
        </div>
        <div className="EVENING-OUT-2">
          <h2 className="my-4 text-center">Midlands travel deals</h2>
          <p className="my-2 text-center"><strong>
          Whether you're visiting the Second City or heading from the Midlands to elsewhere, check out these fantastic train travel offers. </strong></p>
          <div className="container-fluid ">
            <div className="row px-5">

              <div className='col-md-4 col-sm-6 my-2'>     <TrainCard cardHeight="350px" displaybtn="block" buttontext='£1 kids travel' width="150px" img="https://www.thetrainline.com/cmsmedia/cms/5820/west-midlands-railway-logo.png" heading="West Midlands Railway - Kids travel for just £1 with a family Travelcard" text="For certain West Midlands Railway services into London Zones 1-6." link="View details" /> </div>
              <div className='col-md-4 col-sm-6 my-2'>      <TrainCard cardHeight="350px" displaybtn="block" buttontext='Just £2.50' width="150px" img="https://www.thetrainline.com/cmsmedia/cms/5820/west-midlands-railway-logo.png" heading="West Midlands Railway - £2.50 Evening Return" text="Anyone travelling from stations in West Midlands zones 1-5 after 18:30." link="View details" /></div>
              <div className='col-md-4 col-sm-6 my-2'>  <TrainCard cardHeight="350px" displaybtn="block" buttontext='From £73' width="150px" img="https://www.thetrainline.com/cms/media/3340/great-western-railway_logo.png" heading="Avanti West Coast - Family Tickets from £73.80" text="For West Coast Mainline journeys to or from London." link="View details" /></div>

            </div>

          </div>
        </div>
        <div className="EVENING-OUT-2">
          <h2 className="my-4 text-center">London travel deals</h2>
          <p className="my-2 text-center"><strong>
          Who doesn't love a trip to London? Find the latest deals on train travel to (or from) London available to book with us.</strong></p>
          <div className="container-fluid ">
            <div className="row px-5">

              <div className='col-md-3 col-sm-6 my-2'>     <TrainCard cardHeight="350px" displaybtn="block" buttontext='£2 kids travel' width="150px" img="https://www.thetrainline.com/cms/media/3361/thameslink_logo.png" heading="Thameslink - Kids travel for just £2" text="For Off-Peak travel on any Thameslink route not wholly within Zones 1-9." link="View details" /> </div>
              <div className='col-md-3 col-sm-6 my-2'>      <TrainCard cardHeight="350px" displaybtn="block" buttontext='From £73.80' width="150px" img="https://www.thetrainline.com/cms/media/2789/avanti_west_coast_logo.jpg" heading="Avanti West Coast - Family Tickets from £73.80" text="For West Coast Mainline journeys to or from London." link="View details" /></div>
              <div className='col-md-3 col-sm-6 my-2'>  <TrainCard cardHeight="350px" displaybtn="block" buttontext='From £99' width="150px" img="https://www.thetrainline.com/cms/media/3347/lner_logo.png" heading="LNER - Family Tickets from £99" text="For journeys between popular LNER stations and London." link="View details" /></div>
              <div className='col-md-3 col-sm-6 my-2'>  <TrainCard cardHeight="350px" displaybtn="block" buttontext='25% off' width="150px" img="https://www.thetrainline.com/cms/media/3333/c2c_logo.png" heading="c2c - 25% off with a Family Travelcard" text="For Off-Peak Return journeys into London and Zones 1-6." link="View details" /></div>

            </div>

          </div>
        </div>
        <div className="EVENING-OUT-2">
          <h2 className="my-4 text-center">North West travel deals</h2>
          <p className="my-2 text-center"><strong>
          Heading to the North West of England or planning a trip from there to somewhere else in the UK? View our latest deals below.</strong></p>
          <div className="container-fluid ">
            <div className="row px-5">

              <div className='col-md-3 col-sm-6 my-2'>     <TrainCard cardHeight="350px" displaybtn="block" buttontext='From £73.80' width="150px" img="https://www.thetrainline.com/cms/media/2789/avanti_west_coast_logo.jpg" heading="Thameslink - Kids travel for just £2" text="For Off-Peak travel on any Thameslink route not wholly within Zones 1-9." link="View details" /> </div>
              <div className='col-md-3 col-sm-6 my-2'>      <TrainCard cardHeight="350px" displaybtn="block" buttontext='25% off' width="150px" img="https://www.thetrainline.com/cmsmedia/cms/10579/northern-railway-logo.png" heading="Avanti West Coast - Family Tickets from £73.80" text="For West Coast Mainline journeys to or from London." link="View details" /></div>
              
            </div>

          </div>
        </div>
      </div>
      <FooterMain />
      <Icon1 handleClick={handlewClick} />
    </div>
  );
};
export default CheapTrainTickets;
