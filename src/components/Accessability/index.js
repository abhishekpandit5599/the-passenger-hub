
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
import Icon1 from "../../common/icon";
const { Option } = Select;

const Accesability = (props) => {
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
          <h3>Accessability</h3>
        </div>
      </div>
      <div className="press">
        <div className="container-fluid">
         <h4 className="my-4">Trainline has competitive strengths and structural tailwinds that position the business for significant long-term growth.</h4>
        </div>
      </div>
      <div className="section">
        <div className="container-fluid py-3">
         <h4 className="my-3"><strong>Introduction</strong></h4>
         <p className="my-2"><strong>Trainline plc ("Trainline") seeks to make its website as accessible as possible and has built the site with the following in mind:</strong></p>
         <ol className="my-3" style={{listStyle:'disc'}}>
            <li className="my-1"><strong>the web pages are designed to be viewed on a wide range of screen resolutions;</strong></li>
            <li className="my-1"><strong>you can vary the text size by using your browser's text resize option (usually View  Text size);</strong></li>
            <li className="my-1"><strong>all images have been given descriptive alternative text tags;</strong></li>
            <li className="my-1"><strong>we have used text and background colour combinations that are sufficient in contrast;</strong></li>
            <li className="my-1"><strong>the page structure is easy to navigate by using a clear and user-friendly menu that is visible on each page of the site and uses HTML headings;</strong></li>
            <li className="my-1"><strong>Cascading Style Sheets control the presentation of pages and we have used properly structured markup for content. If style sheets are not supported or are turned off, information on the site can still be accessed and read;</strong></li>
            <li className="my-1"><strong>the use of JavaScript has been kept to a minimum. Where it is used then all pages are still accessible should JavaScript be turned off;</strong></li>
            <li className="my-1"><strong>all forms and fields follow a logical tab sequence to ensure easy navigation; and</strong></li>
            <li className="my-1"><strong>a sitemap is available to provide information about the layout of the website.</strong></li>
            </ol> 
            <p className="my-2"><strong>We believe that this website meets the requirements of the level 1 and 2 criteria of the World Wide Web Consortium Web Accessibility Initiative (WCAG WAI) 2.0 guidelines. We strive to meet level 3 whenever possible and we adhere to the accepted standards for accessibility and usability whenever we can, although it is not always possible to do so in all areas of the website, especially where guidelines are still evolving. We continue to review our solutions in line with updates to accepted accessibility guidelines and standards.</strong></p>
            <p className="my-2"><strong>If you find a part of our site that is difficult to use please contact us so that we can continue to improve our overall accessibility. Alternatively, the following tips may be useful:</strong></p>
            <h4 className="my-3"><strong>The text is too small for me to read – how can I change it?</strong></h4>
            <p className="my-2"><strong>If you are using a desktop PC, then follow these simple instructions:</strong></p>
            <ol className="my-3" style={{listStyle:'disc'}}>
            <li className="my-1"><strong>Google Chrome: Go to Options (denoted by a vertical line of three dots in the top right of the browser) and select Zoom and the percentage you require.</strong></li>
            <li className="my-1"><strong>Mozilla Firefox: Go to View in your browser and select Zoom, select Zoom Text Only, then select Zoom In.</strong></li>
            <li className="my-1"><strong>Microsoft Edge: Go to View in your browser and then select Text Size and select the size you require from the drop-down list.</strong></li>
            
            </ol> 
            <p className="my-2"><strong>If you are using an Apple Mac, then follow these simple instructions:</strong></p>
            <ol className="my-3" style={{listStyle:'disc'}}>
            <li className="my-1"><strong>Mozilla Firefox: Go to the View menu, then Text size and select Increase/decrease text size.</strong></li>
            <li className="my-1"><strong>Mozilla Firefox: Go to View in your browser and select Zoom, select Zoom Text Only, then select Zoom In.</strong></li>
            <li className="my-1"><strong>Safari: Go to the View menu and select Zoom in.</strong></li>
            </ol> 
            <p className="my-2"><strong>To reset your zoom setting most browsers accept the Ctrl + 0 command.</strong></p>
            <h4 className="my-3"><strong>The mouse is difficult to use – how can I get around the website?</strong></h4>
            <p className="my-2">You can navigate your way to selected areas of our site using your keyboard. You can use the arrow keys to help you with scrolling up and down a page. You can also move up and down pages by using the Page Up and Page Down keys. Using the Home and End keys will take you to the top and bottom of pages, respectively. You may also use the Tab key to jump between links on a page.</p>
            <h4 className="my-3"><strong>I cannot download or view certain documents from the website – how can I get them?</strong></h4>
            <p className="my-2">Some documents require specific programs installed on your computer in order to view them. For example .pdf documents require the Adobe Reader program which you can download from www.adobe.com.</p>
            <p className="my-2">If you are unable to open or view documents using the following files types then you may require Microsoft Office products or an update to your software package:</p>
            <ol className="my-3" style={{listStyle:'disc'}}>
            <li className="my-1"><strong>.docx (Microsoft Word)</strong></li>
            <li className="my-1"><strong>.xslx (Microsoft Excel)</strong></li>
            <li className="my-1"><strong>.pptx (Microsoft PowerPoint)</strong></li>
            
            </ol> 
            <p className="my-2">The Microsoft Office suite or individual readers are available to purchase here: office.microsoft.com.</p>
            <h4 className="my-3"><strong>The mouse is difficult to use – how can I get around the website?</strong></h4>
            <p className="my-2">You can navigate your way to selected areas of our site using your keyboard. You can use the arrow keys to help you with scrolling up and down a page. You can also move up and down pages by using the Page Up and Page Down keys. Using the Home and End keys will take you to the top and bottom of pages, respectively. You may also use the Tab key to jump between links on a page.</p>
            <h4 className="my-3"><strong>Which web browsers are best for viewing the website?</strong></h4>
            <p className="my-2">This website is designed to function on the most up-to-date version of the following desktop browsers, viewing in older versions is not recommended and certain functionality may not work and is not supported:</p>
            <ol className="my-3" style={{listStyle:'disc'}}>
            <li className="my-1"><strong>Chrome</strong></li>
            <li className="my-1"><strong>Firefox</strong></li>
            <li className="my-1"><strong>Edge</strong></li>
            <li className="my-1"><strong>Safari</strong></li>
            
            </ol> 
            <p className="my-2">To check if you are running the latest browser version please visit www.browsehappy.com.</p>
            <h4 className="my-3"><strong>Useful links</strong></h4>
            <p className="my-2">To learn more about web accessibility visit:</p>
            <ol className="my-3" style={{listStyle:'disc'}}>
            <li className="my-1"><strong>w3.org/wai – W3C accessibility guidelines</strong></li>
            <li className="my-1"><strong>www.rnib.org.uk – The Royal National Institute for the Blind</strong></li>
            <li className="my-1"><strong>www.legislation.gov.uk – The Disability Discrimination Act 2005 (DDA)</strong></li>
            
            
            </ol> 
        </div>
      </div>
      <Icon1 handleClick={handlewClick} />
      <FooterMain />
    </div>
  );
};
export default Accesability;
