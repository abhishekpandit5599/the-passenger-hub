import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Layout, Menu } from "antd";
import {CaretDownOutlined} from '@ant-design/icons';
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


const PassengerHubKPI= (props) => {
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
          <h3>Our Performance</h3>
        </div>
      </div>
      <div className="press">
        <div className="container">
        
      <div className="row">
        <div className="col-md-8">
         
            <p className="my-3">At South Western Railway we know that you want a safe, reliable, punctual service. We’re committed to providing this, to help deliver the best service we can.</p>
        
        <p className="my-3">We continually measure our service reliability and punctuality and report on how we are performing against targets which are set in our Passenger’s Charter.</p>
        <p className="my-3">All our services are monitored every day, including Sundays and Bank Holidays and we have a range of performance metrics in place to measure the levels of performance we are delivering to our customers including;</p>
        <p className="my-3"> <strong>Public Performance Measure (PPM)</strong>  – the percentage of Passenger Services that arrive at their final scheduled destination within five minutes of the advertised time, without being subject to any form of cancellation.</p>
        <p className="my-3"> <strong>Cancellations and Significant Lateness (CaSL) </strong> the percentage of Passenger Services which are cancelled, or arrive significantly late at their final scheduled destination. Significantly late defined as 30 or more minutes late.</p>
        <p className="my-3"> <strong>All Cancellations</strong> the number of Passenger Services which are cancelled for all or part of their planned schedule including those services that Fail to Call at any intermediate stations on route as planned.</p>
        <p className="my-3"> <strong>On Time</strong> the number of Passenger Services which are cancelled for all or part of their planned schedule including those services that Fail to Call at any intermediate stations on route as planned.</p>
        <p className="my-3"> <strong>Lateness </strong>  the percentage of Passenger Services which are late in arriving at their final scheduled destination, without being subject to any form of cancellation by; a) between 1 and 3 minutes (within 3 minutes), b) between 4 minutes and 15 minutes c) between 30 minutes and 59 minutes; d) between 60 minutes and 119 minutes; and e) 120 minutes or more.</p>
        <p className="my-3"> <strong>Short Formations </strong> the number of Passenger Services formed with fewer vehicles than specified in the Capacity Statement approved by the Department for Transport. Services cancelled in full or in part are excluded from this metric as they are already accounted for under various cancellation metrics.</p>
        <h4 className="perfornamce my-2" style={{fontSize:'22px',fontWeight:'600'}}>Performance data by metric — Period 9 (13 November - 10 December 2022)</h4>
     <div className="button-div-f justify-content-between d-flex row">
        <Button size="large" style={{background:'#11475b',color:'white',borderRadius:'5px'}}>HighLight</Button>
        <div className="botton-group" style={{position:"relative"}}>
        <Button size="large" style={{background:'#11475b',color:'white',}}>HighLight</Button>
        <Button size="large" style={{border:"1px solid gray",color:'black',borderLeft:'0px'}} onClick={()=>{
            
            WrapperDisplay==='none'?setWrapperDisplay('flex'):setWrapperDisplay('none')}}>HighLight<CaretDownOutlined /> </Button>
        <div className="wrapper-item" style={{position:'absolute',top:'40px',minWidth:'56%',right:'0px',background:"rgb(149 223 172)",zIndex:'1',display:WrapperDisplay}}>
            <ul className="wrapper-list p-2" style={{fontSize:'14px', }} > 
                <li className="list-item d-flex  align-items-center" style={{gap:'10px'}}>    <input style={{height:'12px'}} type="checkbox" checked="" /><p className="p-0 m-0">Main Line Suburban</p></li>
                <li className="list-item d-flex  align-items-center" style={{gap:'10px'}}>    <input style={{height:'12px'}} type="checkbox" /><p className="p-0 m-0">Windsor Lines</p></li>
                <li className="list-item d-flex  align-items-center" style={{gap:'10px'}}>    <input style={{height:'12px'}} type="checkbox" /><p className="p-0 m-0">Main Line</p></li>
               
            </ul>
        </div>
        </div>

     </div>
     <div className="table-reara my-3">
    <table id='simple_table' >
<tr>
	<th>Performance Measure	</th>
	<th>Main Line Suburban</th>
	<th>Windsor Lines</th>
	<th>Main Line</th>
	<th>Island Line</th>
</tr>

<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Percentage of services cancelled (caused by SWR)</td>
	<td>0.67%</td>
	<td>0.80%</td>
	<td>1.44%</td>
	<td>21.32%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Total percentage of services cancelled</td>
	<td>2.85%</td>
	<td>3.58%</td>
	<td>3.47%	</td>
	<td>21.40%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Delay minutes per 1000 miles (caused by SWR)	</td>
	<td>16.89</td>
	<td>14.87</td>
	<td>11.35</td>
	<td>11.26	</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Percentage of services on time</td>
	<td>57.84%</td>
	<td>55.66%</td>
	<td>46.83%</td>
	<td>85.44%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Period 3 (29/05/2022 – 25/06/2022)	</td>
	<td>21031</td>
	<td>14286</td>
	<td>£130,059</td>
	<td>2.83</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Period 3 (29/05/2022 – 25/06/2022)	</td>
	<td>21031</td>
	<td>14286</td>
	<td>£130,059</td>
	<td>2.83</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Period 3 (29/05/2022 – 25/06/2022)	</td>
	<td>21031</td>
	<td>14286</td>
	<td>£130,059</td>
	<td>2.83</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Period 3 (29/05/2022 – 25/06/2022)	</td>
	<td>21031</td>
	<td>14286</td>
	<td>£130,059</td>
	<td>2.83</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Period 3 (29/05/2022 – 25/06/2022)	</td>
	<td>21031</td>
	<td>14286</td>
	<td>£130,059</td>
	<td>2.83</td>
 
</tr>


</table>
    </div>
     <div className="table-reara my-3">
    <table id='simple_table' >
<tr>
	<th>Performance Measure	</th>
	<th>Main Line Suburban</th>
	<th>Windsor Lines</th>
	<th>Main Line</th>
	<th>Island Line</th>
</tr>

<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Percentage of services cancelled (caused by SWR)</td>
	<td>0.67%</td>
	<td>0.80%</td>
	<td>1.44%</td>
	<td>21.32%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Total percentage of services cancelled</td>
	<td>2.85%</td>
	<td>3.58%</td>
	<td>3.47%	</td>
	<td>21.40%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Delay minutes per 1000 miles (caused by SWR)	</td>
	<td>16.89</td>
	<td>14.87</td>
	<td>11.35</td>
	<td>11.26	</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Percentage of services on time</td>
	<td>57.84%</td>
	<td>55.66%</td>
	<td>46.83%</td>
	<td>85.44%</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Period 3 (29/05/2022 – 25/06/2022)	</td>
	<td>21031</td>
	<td>14286</td>
	<td>£130,059</td>
	<td>2.83</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Period 3 (29/05/2022 – 25/06/2022)	</td>
	<td>21031</td>
	<td>14286</td>
	<td>£130,059</td>
	<td>2.83</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Period 3 (29/05/2022 – 25/06/2022)	</td>
	<td>21031</td>
	<td>14286</td>
	<td>£130,059</td>
	<td>2.83</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Period 3 (29/05/2022 – 25/06/2022)	</td>
	<td>21031</td>
	<td>14286</td>
	<td>£130,059</td>
	<td>2.83</td>
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Period 3 (29/05/2022 – 25/06/2022)	</td>
	<td>21031</td>
	<td>14286</td>
	<td>£130,059</td>
	<td>2.83</td>
 
</tr>


</table>
    </div>
        </div>
        <div className="col-md-4 col-10 mx-auto">
            <InfoCard  Head='National Rail Passenger Survey' bodyText="Our results in the latest National Rail Passenger Survey"/>
            <InfoCard  Head='Passenger information during disruption' bodyText="Please view our passenger  infromation during disruption plan here"/>
        </div>
      </div>
        </div>
      </div>
      <FooterMain />
      <Icon1 handleClick={handlewClick} />
    </div>
  );
};
export default PassengerHubKPI;
