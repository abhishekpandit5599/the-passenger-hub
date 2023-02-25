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


const TrianticketExplained = (props) => {
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
          <h3>Train Ticket Explained</h3>
        </div>
      </div>
      <div className="press">
        <div className="container">
          {/* <h2 className="line">Investors</h2> */}
          {/* <div className="text-line" style={{ paddingBottom: '20px' }}>
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div> */}
          <div className="">
          <table id='simple_table' >
<tr>
	<th>Ticket type	</th>
	<th>Journey	</th>
	<th>Monday to Friday</th>
	<th>Saturday and  bank holidays</th>
	<th>Sunday</th>
</tr>

<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Anytime</td>
	<td>All</td>
	<td>At any time	</td>
	<td>At any time, cheaper fares may be available	</td>
	<td>At any time, cheaper fares may be available</td>
 
</tr>

<tr>
	<td rowSpan={3}>Super Off-Peak</td>
	<td><strong>To London	</strong></td>
	<td>Valid on trains arriving 14:01 or later</td>
	<td>Valid on trains arriving 14:01 or later</td>
	<td>N/A</td>
</tr>
<tr >
	
	<td><strong>From London</strong>		</td>
	<td>Valid on trains departing between 12:01 & 15:59 and after 19:00 or later <br />Return at any time</td>
	<td>Valid on trains departing between 12:01 & 15:59 and after 19:00 or later <br />Return at any time</td>
	
	<td>At any time</td>
</tr >
<tr style={{borderBottom:'1px solid #98e2af'}} >
	
	<td><strong> Non-London	</strong></td>
	
	<td>Valid on trains departing 12:01, or later <br />Return at any time</td>
	<td>Valid on trains departing 12:01, or later <br />Return at any time</td>
	<td>At any time</td>
</tr>
<tr>
	<td rowSpan={3}>Off-Peak</td>
	<td><strong>To London	</strong></td>
	<td>Valid on trains arriving after 10:00</td>
	<td>At any time</td>
	<td>At any time, cheaper fares may be available</td>
</tr>
<tr >
	
	<td><strong>From London</strong>		</td>
	<td>09:00 or later</td>
	<td>At any time, cheaper fares may be available</td>
	<td>At any time, cheaper fares may be available</td>
</tr >
<tr style={{borderBottom:'1px solid #98e2af'}} >
	
	<td><strong> Non-London	</strong></td>
	<td>From 09:00</td>
	<td>At any time, cheaper fares may be available</td>
	<td>At any time, cheaper fares may be available</td>
</tr>
<tr style={{borderBottom:'1px solid #98e2af'}}>
	<td>Sunday Out</td>
	<td><strong>All</strong>	</td>
	<td>N/A</td>
	<td>N/A</td>
	<td>At any time</td>
</tr>
<tr style={{borderBottom:'1px solid #98e2af'}}>
	<td> Advance</td>
	<td><strong>All</strong></td>
	<td>Booked trains only</td>
	<td>Booked trains only</td>
	<td>Booked trains only</td>
</tr>
<tr>
	<td> Semi Flex Return</td>
	<td><strong>All</strong></td>
	<td>Booked train on outward journey</td>
	<td>Booked train on outward journey</td>
	<td>Booked train on outward journey</td>
</tr>
<tr>
	<td></td>
	<td></td>
	<td>Off-Peak Return within one month</td>
	<td>Off-Peak Return within one month</td>
	<td>Off-Peak Return within one month</td>
</tr>
</table>
<p className="my-2">Evening peak restrictions apply when boarding at London Waterloo, Vauxhall and Clapham Junction, and travelling to stations outside London Zones 1-6.
</p>
<p className="my-2">Please use a journey planner to check when Off-Peak and Super Off-Peak tickets are valid for travel.
</p>
          </div>
        </div>
      </div>
      <FooterMain />
      <Icon1 handleClick={handlewClick} />
    </div>
  );
};
export default TrianticketExplained;
