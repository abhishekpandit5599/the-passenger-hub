import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Breadcrumb } from 'antd';
import images from "../../themes/appImage";
import { Link } from "react-router-dom";
import { Collapse } from "antd";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import FooterMain from "../../common/footer";
import Icon1 from "../../common/icon";
import "../../css/trainticekt.css";
import ReactPlayer from "react-player";



const DelayRepay= (props) => {
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
  const { Panel } = Collapse;
  const PanelArray=[
    {
        id:"1",
        Header:"hii i'm Header",
        Para:"Advance tickets aren’t refundable, but a change of journey may be made. Find out more. For Advance tickets bought on or before the 30 Nov a refund in e/Vouchers may be requested prior to the date of departure. Apply here.",
    },
    {
        id:"2",
        Header:"Anytime, Off-Peak, Evening Out, Sunday Out, and Super Off-Peak tickets",
        Para:"Customers holding these tickets may change their journey to travel at a different time. The difference in fare will need to be paid. <br/> You must apply for a refund within 28 days of the ticket's expiry date. No admin fees are charged if you submit your ticket for a refund before the first date of validity.",
    },
    {
        id:"3",
        Header:"Rangers and Rovers tickets",
        Para:"Refunds aren't generally allowed unless the tickets are returned before the first date of validity shown on them.",
    },
    {
        id:"4",
        Header:"Season tickets",
        Para:"It is not possible to pause and restart your season ticket. If you are not going to be using your season ticket for some time, you should request a refund. To qualify for a refund, you must meet the following criteria:    Weekly - there must be at least 3 days remaining on your season ticket   Monthly and monthly plus - there must be at least 7 days remaining on your season ticket    Annual - there must be 7 weeks or more left on your season ticket  Season tickets are discounted, and the refund is not a fixed proportion of what you paid. Where a significant proportion of the ticket has already been used there may not be any refund value.    Flexi Seasons typically have no refund value after 7 days use Weekly seasons have no refund value after 4 days use  Monthly seasons have no refund value after 3 weeks and 4 days   Annual seasons have no refund value after 10 months and 12 days use   You can use the Season Ticket Refund Calculator to get an estimate of how much you’ll receive for an annual or custom length (longer than one month) season ticket. The exact amount you receive may vary depending on the final validation of the refund application. In some cases there may not be any refund value left on the season ticket.   Refunds are calculated from the date you return the season ticket. If you’ve been ill, we can backdate the refund if you provide written evidence and have not started using the season ticket again. We won’t give you a refund or extend your season ticket just because you don’t use it for a period of time, for example because you’ve been on holiday.     To calculate the refund value we’ll work out the total cost of the tickets you’d have needed to buy to make one return journey a day up to the date you returned your season ticket. The refund will be the difference, if any, between this total cost and the price you paid for the season ticket, less an administration fee of £10. This also applies to season tickets with PlusBus and London Travelcards added on.  To claim a refund on a season ticket you’ll need to apply from where you bought it.",
    },
    {
        id:"5",
        Header:"Rangers and Rovers tickets",
        Para:"Refunds aren't generally allowed unless the tickets are returned before the first date of validity shown on them.",
    },
    {
        id:"6",
        Header:"Rangers and Rovers tickets",
        Para:"Refunds aren't generally allowed unless the tickets are returned before the first date of validity shown on them.",
    },
    {
        id:"7",
        Header:"Rangers and Rovers tickets",
        Para:"Refunds aren't generally allowed unless the tickets are returned before the first date of validity shown on them.",
    },
    {
        id:"8",
        Header:"Rangers and Rovers tickets",
        Para:"Refunds aren't generally allowed unless the tickets are returned before the first date of validity shown on them.",
    },
    {
        id:"9",
        Header:"Rangers and Rovers tickets",
        Para:"Refunds aren't generally allowed unless the tickets are returned before the first date of validity shown on them.",
    },
    {
        id:"10",
        Header:"Rangers and Rovers tickets",
        Para:"Refunds aren't generally allowed unless the tickets are returned before the first date of validity shown on them.",
    },
]
  return (
    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div className="mobileabout text-item">
        <div className="container-fluid spacert">
          <h3>Delay Repay</h3>
        </div>
      </div>
      <div className="press">
        <div className="container">
          {/* <h2 className="line">Investors</h2> */}
          {/* <div className="text-line" style={{ paddingBottom: '20px' }}>
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div> */}
                    <Breadcrumb separator=">">
    <Breadcrumb.Item> <Link to='home'> Home</Link></Breadcrumb.Item>
    <Breadcrumb.Item >  Delay Repay</Breadcrumb.Item>
   
  </Breadcrumb>
        <div className="row my-3">
        
  <h4 className="my-2 "><strong>My UK train was delayed. Can I claim compensation?</strong></h4>
  <p className="my-2">A lot of the train companies we work with can offer you some compensation if your train was delayed by over 15 minutes.</p>
  <h6 className="my-2"><strong>Why you might not get compensation</strong></h6>
  <p className="my-1">If your delay was because of a planned disruption, or an emergency timetable being used, then compensation’s not on the cards unfortunately. You might not be paid compensation for delays caused by things outside of the rail industry’s control either. But, each company might have a different policy, so it’s better to check with them direct. For a quick guide at single ticket compensations please see the table below.</p>
  <p className="my-2">Check the Train Operator (TOC) below to find out more. If you’re not sure who your TOC is, take a look at your ticket details in "My bookings" on our website or "My tickets" on our app.</p>
  <p className="my-2">Compensations can only be processed by the train operator that you were travelling with not where you purchased your ticket.</p>
  <p className="my-2">Compensations below are all based on a single ticket. Return tickets are half or compensated for your affected journey. For more in-depth information on this go direct to Train Operators (TOC) website by clicking on the TOC below.</p>
  <div className="table-div my-2">
    <h6 className="my-1"><strong>Compensation for single tickets</strong></h6>
    <div className="table-reara">
    <table id='simple_table' >
<tr>
	<th>	Train Operator</th>
	<th>15 - 29 Min</th>
	<th>30 - 59 Mins</th>
	<th>	60 - 119 Mins</th>
	<th>120 + Mins</th>
</tr>

<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Avanti West Coast</td>
	<td>	25%</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Chiltern Railways</td>
	<td>N/A</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>C2C</td>
	<td>25%</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>CrossCountry</td>
	<td>N/A</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>East Midlands Railway</td>
	<td>25%</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Gatwick Express</td>
	<td>25%	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Grand Central Railway</td>
	<td>	N/A</td>
	<td>	N/A</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Great Northern</td>
	<td>25%	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Great Western Railway</td>
	<td>25%	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Greater Anglia</td>
	<td>25%	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Hull Trains</td>
	<td>N/A	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>London North Eastern Railway</td>
	<td>N/A		</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>London Northwestern Railway</td>
	<td>25%	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Lumo</td>
	<td>	N/A	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Merseyrail</td>
	<td>	N/A</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Northern</td>
	<td>25%	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>ScotRail</td>
	<td>	N/A</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Southeastern</td>
	<td>25%	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Southern</td>
	<td>25%	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>South Western Railway and Island Line</td>
	<td>25%	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>ThamesLink</td>
	<td>25%	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>TransPennine Express</td>
	<td>25%	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Transport for London</td>
	<td>See Website</td>
	<td>See Website</td>
	<td>See Website</td>
	<td>See Website</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Transport for Wales</td>
	<td>25%	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>West Midlands Railway</td>
	<td>25%	</td>
	<td>50%</td>
	<td>	100%</td>
	<td>100%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Period 2 (01/05/2022 – 28/05/2022)	</td>
	<td>9396</td>
	<td>7229</td>
	<td>£73,424	</td>
	<td>2.10</td>
 
</tr>



</table>
    </div>
    
  </div>
        </div>
        </div>
      </div>
      <FooterMain />
      <Icon1 handleClick={handlewClick} />
    </div>
  );
};
export default DelayRepay;
