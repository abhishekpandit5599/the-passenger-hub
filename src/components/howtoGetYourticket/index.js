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


const HowTogetYourTickets= (props) => {
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
          <h3>How To Get Your Tickets</h3>
        </div>
      </div>
      <div className="press p-5">
        <div className="container-fluid ">
          {/* <h2 className="line">Investors</h2> */}
          {/* <div className="text-line" style={{ paddingBottom: '20px' }}>
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div> */}
          <div className="how-toget">
            <p className="text-shh my-3">There are lots of different ways to buy your train tickets, depending on what suits you. You can buy train tickets online, from the ticket office, a self-service machine or through our app. In some circumstances you can also buy tickets on board the train.</p>
      <div className="row">
         <div className="col-md-6 px-0 text-raea-dfh">
            <h3 className="text-headij my-3" style={{fontWeight:'700'}}>
            Where can I buy a train ticket?

            </h3>
            <h4 className="text-subhfgf my-3">
            Buying a train ticket in advance

            </h4>
            <p className="my-3 textshfgf">
            The best way to buy a train ticket in advance is through our app. For most routes across the UK, you can download the ticket as an eTicket, which is a collection-free and contact-free way to travel – just scan your ticket at the gate. For Advance tickets, you’ll also be able to benefit from Automated Delay Repay when you use an eTicket. If you want to use an alternative type of ticket, you can add your ticket to a smartcard or choose to use a paper ticket.
            </p>
            <p className="my-2 textshfgf">
            You can also buy your ticket through our website. You can choose to add your ticket to a smartcard, collect it from the station or have it posted to your home.
            </p>
         </div>
         <div className="col-md-6 px-0 img-area d-flex align-items-center justify-content-center">
          <img src={images.ticket} alt="" />
         </div>
         </div>
         
          </div>
          <div className="collecting-ticket-your my-2">
            <h5 className="tedsd my-3">Collecting your tickets from the self-service machine</h5>
            <p className="ptext my-2">Collecting your ticket at the station is easy:</p>
            <ol className="list-itemsdhf">
              <li className="listitems">When buying your ticket, select the option to collect your ticket from the station.</li>
              <li className="listitems">Please avoid using virtual payment cards as these cannot be used to collect the ticket from the self-service machine.</li>
              <li className="listitems"> When you arrive at the station, use the self-service machine to collect your tickets – you’ll need the collection number and the physical payment card that you paid with. Virtual payment cards cannot be used to collect your ticket.</li>
              <li className="listitems">If you paid using PayPal, Google Pay or Apple Pay you still need a payment card in your name and the booking reference to retrieve your ticket(s) from the self-service ticket machine, however, you can use any credit or debit card. </li>
              <li className="listitems">If you do not have a credit or debit card, you will be unable to collect your booked ticket(s) and you will be required to purchase a new set of tickets in order to travel.</li>
            </ol>
          </div>
          <div className="buying-your-tickt-at-station my-4">
            <h4 className="headinggdfj my-2">Buying your ticket at the station:</h4>
            <p className="text-parasffs">You can buy your ticket at the station by visiting a self-service machine or the ticket office.</p>
            <div className="row my-3">
              <div className="col-md-6 my-2">
                <h5 className="my-2">Self-service machines</h5>
                <p className="self-service my-2">Our self-service ticket machines are easy to use. They sell tickets for travel on the day, or the next day if you use them after 15:00. You can buy:</p>
                <ol className="lsjf" style={{listStyle:'decimal'}}>
                  <li>Anytime single and return tickets</li>
                  <li>Off Peak and Super Off Peak single and return tickets</li>
                  <li>Travelcards</li>
                  <li>Weekly season tickets</li>
                </ol>
                <p className="my-3">You can also renew monthly season tickets, or buy your car parking if you’ve driven to the station, from the self-service machines. Self-service machines can only sell tickets that start at that station. Some machines have a Virtual Ticket Office feature to connect you to our specialist team who can provide help if you need it.</p>
              </div>
              <div className="col-md-6 my-2">
                <h5 className="my-2">Ticket offices</h5>
                <p className="self-service my-2">Our ticket offices can sell all types of tickets:</p>
                <ol className="lsjf" style={{listStyle:'decimal'}}>
                  <li>Advance tickets</li>
                  <li>Anytime, Off Peak and Super Off Peak tickets</li>
                  <li>Weekly, Monthly, Monthly plus and Annual season tickets</li>
                  <li>Travelcards</li>
                  <li>Ranger tickets – tickets valid over a certain area</li>
                  <li>Rover tickets – tickets valid over an area for a number of days</li>
                  <li>Car parking tickets</li>
                </ol>
                <p className="my-3">They can also sell tickets that don’t start at the station where they’re based.</p>
              </div>

            </div>
          </div>
          <div className="how-do-i-prefer">
          <div class="swr-rich-text my-2">
    <h4>How do I pay for a train ticket?</h4>
<p>There are many ways to pay for a train ticket - from traditional cash to paying through Google and Apple Pay through the app, making it easier and more secure than ever to buy your train ticket.</p>
</div>
<div className="row align-baseline">
  <div className="col-md-3 col-sm-6 col-10 mx-auto">
 <div className="column">
  <div className="swr-rich-text">
    <h5 style={{textAlign: 'center'}}>Apple Pay</h5>
    <hr style={{textAlign: 'center'}} />
    <p style={{textAlign: 'center'}}>You can now use <a href="">Apple Pay</a>&nbsp;when you're buying online or on our app</p>
  </div>
  <div className="cookieerrormsg" style={{display: 'none'}} />
</div>

  </div>
  <div className="col-md-3 col-sm-6 col-10 mx-auto">
 <div className="column">
  <div className="swr-rich-text">
    <h5 style={{textAlign: 'center'}}>Cards</h5>
    <hr style={{textAlign: 'center'}} />
    <p style={{textAlign: 'center'}}>You can use a credit or debit card to pay online, through our app, at self-service ticket machines and at the ticket office</p>
  </div>

</div>

  </div>
  <div className="col-md-3 col-sm-6 col-10 mx-auto">
 <div className="column">
  <div className="swr-rich-text">
    <h5 style={{textAlign: 'center'}}>Paypal</h5>
    <hr style={{textAlign: 'center'}} />
    <p style={{textAlign: 'center'}}>You can use Paypal to buy your tickets online</p>
  </div>
  
</div>

  </div>
  <div className="col-md-3 col-sm-6 col-10 mx-auto">
 <div className="column">
  <div className="swr-rich-text">
    <h5 style={{textAlign: 'center'}}>Cash</h5>
    <hr style={{textAlign: 'center'}} />
    <p style={{textAlign: 'center'}}>You can pay in cash at ticket offices and at select self-service machines</p>
  </div>
 
</div>

  </div>
  
</div>
<p className="my-2">You can also pay with a business cheque when you’re buying an annual season ticket at the ticket office – just make them payable to First MTR South Western Trains.</p>
          </div>
        </div>
      </div>
      <FooterMain />
      <Icon1 handleClick={handlewClick} />
    </div>
  );
};
export default HowTogetYourTickets;
