import React, { useEffect } from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Button} from "antd";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";
import { appConstants } from "../../themes/appConstant";
import {Collapse} from "antd";
import Icon1 from "../../common/icon";
const { Option } = Select;

const Cookies = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(1);
  const { Panel } = Collapse;

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
  const text = (
    <div className="text-model">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
      
    </div>
  );

  const aboutthesecookies = (
    <>
	<p >Strictly necessary cookies are created every time you use our app or site. Among other things, these cookies let us remember your choices so we can do things like: .</p>
	<ol style={{listStyleType:'disc'}} className="cookies">
		<li>Keep track of which tickets you’d like to buy</li>
		<li>Charge you the correct amount for your tickets</li>
		<li>Pass your details to the relevant train, coach or bus operators, so you can travel with them</li>
		<li>Offer you different ways to get your tickets (like our Mobile Ticket option)</li>
		<li>Check there’s no suspicious activity going on with your account or payments</li>
		<li>Keep your information secure</li>
		<li>Make sure we don’t show you the same notifications more than once – we know that’d be annoying</li>
		<li>Save your preferences, such as whether you like paying in euros or pounds.</li>
		<li>Our identification cookies let us show you your favourite journey, before you sign in because we remember your choices. These cookies make checking your train home easier, as we auto-fill your departure and arrival stations</li>
		
	</ol>
	</>
  );
  const listofstrictly = (
    <>
	<p>The table below explains each cookies’ name and who owns it, as well as how long it will remain on your browser. There is also a short description to let you know why we need to use it.</p>
	  <table id='simple_table' >
<tr>
	<th>Name	</th>
	<th>Description</th>
	<th>Domains</th>
	<th>Lifespan (Days)</th>
	
</tr>

<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>__cfduid</strong></td>
	<td>This cookie is used by CloudFlare to speed up page load times.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>2944	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_abck</strong></td>
	<td>This cookie is used for insurance products relating to your journey.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,	</td>
	<td>365</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_csrf</strong></td>
	<td>This cookie is to ensure that each request requires, in addition to our session cookie, a randomly generated token to ensure security.</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_ct_session</strong></td>
	<td>This cookie is used assist in updates to our website.</td>
	<td>thetrainline.com, www.thetrainline.com</td>
	<td>366</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>__dc_gtm_UA-</strong></td>
	<td>This cookie is associated with sites using Google Tag Manager to load other scripts and code into a page. </td>
	<td>thetrainline.com,</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_sdsat_search_id</strong></td>
	<td>This cookie is used to help our data scientists figure out how to make our site better and faster.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>context_id</strong></td>
	<td>This cookie acts as a session cookie.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>context_alias_id</strong></td>
	<td>This cookie acts as a session cookie </td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_sdsat_view_suffix</strong></td>
	<td>This cookie is used to pass information to your account.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>.ASPXANONYMOUS</strong></td>
	<td>	This cookie is from the NET Framework is used to build and run apps on Windows.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>70	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>acid</strong></td>
	<td>This cookie is used to tie server and client events together.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>731</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>ak_bmsc</strong></td>
	<td>This cookie is used by Akamai who provide a defensive shield to protect our site.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>AKA_A2</strong></td>
	<td>This cookie is provided by Akamai and enables faster site loading.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>akavpau_ppsd</strong></td>
	<td>This cookie is from PayPal for E-commerce Provision</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>ASP.NET_SessionId</strong></td>
	<td>General purpose platform session cookie used by Microsoft NET framework sites.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>atgRecSessionId</strong></td>
	<td>Part of our Oracle web services. This is a session cookie that is used to route requests to the server.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>AWSALB</strong></td>
	<td>This cookie is used to balance loads on our web servers.</td>
	<td>thetrainline.com,	</td>
	<td>7	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>AWSALBCORS</strong></td>
	<td>Cross-origin resource sharing (CORS) for getting content from different places.</td>
	<td>thetrainline.com,</td>
	<td>7	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>basket_id</strong></td>
	<td>This cookie remembers what you have in your basket as you journey through the site.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>bm_sv</strong></td>
	<td>Used by MasterPass to anonymously identify a user’s session on the website.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>bm_sz</strong></td>
	<td>Part of our anti-fraud service, Akamai.</td>
	<td>www.thetrainline.com/train-times,	</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>cors_js</strong></td>
	<td>Cross-origin resource sharing (CORS) for JavaScript.</td>
	<td>thetrainline.com,</td>
	<td>365	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>cp_session</strong></td>
	<td>This cookie is used for Help systems found in the website.</td>
	<td>thetrainline.com, www.thetrainline.com/en/help/,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>currency_code</strong></td>
	<td>This cookie is sued to remember your currency.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>31	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>currency_value</strong></td>
	<td>This cookie is used to display the price of tickets in your currency.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>current-language</strong></td>
	<td>This cookie remembers the language you are using.</td>
	<td>www.thetrainline.com,	</td>
	<td>This cookie remembers the language you are using.	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>customerUserCountry</strong></td>
	<td>This cookie is used to remember your country.</td>
	<td>thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>cws</strong></td>
	<td>This cookie is used to facilitate our online chat service.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>365	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>dpi-********</strong></td>
	<td>This cookie is set when you search from any page then go on to book a ticket</td>
	<td>thetrainline.com,	</td>
	<td>thetrainline.com,	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>eId</strong></td>
	<td>This domain is owned by Oracle as part of its RightNow CX suite.</td>
	<td>www.thetrainline.com/en/help/,</td>
	<td>7	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>eu_migration_prompted</strong></td>
	<td>This cookie is used to facilitate website update.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>731	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>eu_plat_user</strong></td>
	<td>This cookie is used to identify EU platform users.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>731	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>eumig_es</strong></td>
	<td>This cookie is used to facilitate website updates.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>eumig_eu_redirect</strong></td>
	<td>This cookie is used to check for browser compatibility.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>183	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>eumig_it</strong></td>
	<td>This cookie is used to facilitate website update.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>force_tw</strong></td>
	<td>This cookie is used to note what type of device you are using.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>incap_ses_1176_1719358</strong></td>
	<td>This cookie is used by the web application firewall to protect it against attack.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>nlbi_1719358</strong></td>
	<td>This cookie belongs to Incapsula DDoS Protection and Web Application Firewall load balancer.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>OptanonAlertBoxClosed</strong></td>
	<td>This cookie is set by websites using certain versions of the cookie solution from OneTrust.</td>
	<td>www.thetrainline.com/en/help/,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>OptanonConsent</strong></td>
	<td>This cookie is set by the cookie solution from OneTrust.</td>
	<td>www.thetrainline.com/en/help/,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>OPTI-******</strong></td>
	<td>This cookie is used to test different versions of our site.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/train-times,</td>
	<td>2914605	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>passive_basket_id</strong></td>
	<td>This cookie is used for storing differences between UK and rest-of-world basket options.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>player</strong></td>
	<td>This domain is owned by Vimeo. The main business activity is: Video Hosting/Sharing</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>366	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>pref_lang</strong></td>
	<td>This cookie used to remember your preferred language.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>730	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>preSgpCid</strong></td>
	<td>This is the ID we issued you before we upgraded our website.</td>
	<td>thetrainline.com,	</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>PYPF</strong></td>
	<td>PayPal uses Cookies to shorten the time the user needs to log in to his PayPal account.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>28	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>ravelinCanFingerprint</strong></td>
	<td>This cookie is used by our anti-fraud service, Ravelin.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>ravelinDeviceId</strong></td>
	<td>This cookie is part of fraud prevention services.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>393	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>ravelinSessionUuid</strong></td>
	<td>This cookie is used by the Ravelin antifraud service.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>ravelinUuid</strong></td>
	<td>Part of our anti-fraud service, Ravelin.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>393	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>reset_currency</strong></td>
	<td>This cookie is used to facilitate changes in your choice of currency.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>31	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>RMROCKET-1248</strong></td>
	<td>This cookie is used to let our server know you can receive faster results via the cache.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/train-times,	</td>
	<td>2914605	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>sgpEvent</strong></td>
	<td>This cookie is used to populate the "bookings" section for you.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>sme-crumb</strong></td>
	<td>This cookie is used by The Trainline for Business customers log in service.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>SSRT</strong></td>
	<td>This cookie is part of new relic services to help us identify faults on our website.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>365	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>TANGO-371</strong></td>
	<td>This cookie is used for powering our previous cookie banner.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>90	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>TANGO-EDGE</strong></td>
	<td>This cookie is used to identify the device you are using and what version of the site you should be viewing.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>90	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>temp_basket_id</strong></td>
	<td>This cookie allows your journeys to be held in your basket before they're confirmed.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>vuid</strong></td>
	<td>This domain is owned by Vimeo. The main business activity is: Video Hosting/Sharing</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>730	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>wasabiId</strong></td>
	<td>This cookie is used to ensure the correct price is displayed for your type of payment.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/train-times,	</td>
	<td>This cookie is used to ensure the correct price is displayed for your type of payment.	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>wSession</strong></td>
	<td>This cookie is used to facilitate our API</td>
	<td>www.thetrainline.com/train-times,	</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>X-Oracle-BMC-LBS-Route</strong></td>
	<td>This cookie is used by the Oracle service, this cookie is inserted by the load balancer.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>pdt</strong></td>
	<td>This cookie is used to facilitate payments </td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>365	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>xdVisitorId</strong></td>
	<td>This cookie ensures that the items the shopper just purchased are reported to the product recommendations widget. </td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/,	</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/,	</td>

 
</tr>


</table>
	</>
  );
  const aboutthesecookies2 = (
    <>
	<p >We rely on analytics cookies to tell us how our site/app responds to our users. Once we know how we’re doing, we can see where we can improve. <br />Broadly speaking…</p>
	<ol style={{listStyleType:'disc'}} className="cookies">
		<li>Analytics cookies help us understand our customers’ behaviour on our site, in order to constantly improve things.</li>
		<li>These cookies tell us how you arrived on our site, which of our pages you’ve already visited, how long you spent on those pages, and whether you clicked on any links while you were there.</li>
		<li>The analytics ID cookies we set, collect data about our users generally and we analyse this data at an aggregate level –</li>
		<li>They also flag up any problems, so our clever tech teams can fix them quickly.</li>
		<li>We work with service providers including Google, Adobe, Facebook, and Branch to provide tools to analyse info at an aggregate level about the use of our site and app.</li>
	
	</ol>
	</>
  );
  const listofperformance=(
	<>
	<table id='simple_table' >
<tr>
	<th>Name	</th>
	<th>Description</th>
	<th>Domains</th>
	<th>Lifespan (Days)</th>
	
</tr>

<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_ga</strong></td>
	<td>	This cookie name is associated with Google Universal Analytics.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>730	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_gat_ctTracker</strong></td>
	<td>Google Analytics Cookies</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>1</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_gat_trainlineGATracker</strong></td>
	<td>Google Analytics Cookies</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>1</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_gat_UA-139946263-1</strong></td>
	<td>This is set by Google Analytics; it contains the unique identity number of the account or website it relates to.</td>
	<td>thetrainline.com,</td>
	<td>1</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>gat_UA-16633907-29-</strong></td>
	<td>This is set by Google Analytics; it contains the unique identity number of the account or website it relates to. </td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_gat_UA-2576767-1</strong></td>
	<td>This is set by Google Analytics; it contains the unique identity number of the account or website it relates to.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>1</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_gid</strong></td>
	<td>This cookie is used to store and update a unique value for each page visited.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_s</strong></td>
	<td>This cookie is associated with Shopify's analytics suite. </td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/train-times,	</td>
	<td>365</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_sdsat_search_origin_name</strong></td>
	<td>This is part of the Adobe analytics service to remember what your search was.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_tq_id.TV-544536-1.2d8f</strong></td>
	<td>These cookies are used to enable optimisation of TV advertising.</td>
	<td>thetrainline.com,</td>
	<td>730	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>ab.storage.sessionId.ed8871ee-f4e9-4188-bf1c-3499e423fa02</strong></td>
	<td>This cookie is used to store a randomly generated user ID used to determine when to generate session start and session end events.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/train-times,</td>
	<td>365</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>AffiliateCode</strong></td>
	<td>This cookie allows us to see if you come via an affiliate.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>AMCVS_xxxxxAdobeOrg</strong></td>
	<td>This is a pattern type cookie associated with Adobe Marketing Cloud.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>analyticsSessionId</strong></td>
	<td>This cookie is used by one of our tag managers to optimise delivery.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/train-times,</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>atgRecVisitorId</strong></td>
	<td>This cookie is used by our Oracle services to recognise a visitors separate visits to our website.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/	</td>
	<td>6547	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>BJS</strong></td>
	<td>This cookie links us to booking.com so we can see our shared traffic</td>
	<td>thetrainline.com,</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>gid</strong></td>
	<td>This cookie helps group analytics.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>730	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>GPS</strong></td>
	<td>YouTube collects data through videos embedded in websites, in order to display targeted advertising to web visitors.</td>
	<td>thetrainline.com, www.thetrainline.com,,</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>JSESSIONID</strong></td>
	<td>New Relic provides a platform for monitoring the performance of web and mobile applications.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>prevGaCid</strong></td>
	<td>If you were assigned an analytics ID prior to the new analytics service, this cookie is used to note that.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>referralProgramCookieValue</strong></td>
	<td> This cookie is used to attribute referrals from partners.</td>
	<td>thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>RT</strong></td>
	<td>This cookie is part of new relic services to help us identify faults on our website.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>7	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>S</strong></td>
	<td>Sets a unique ID for the session. This allows the website to obtain data on visitor behaviour for statistical purposes.</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>s_cc</strong></td>
	<td>Adobe Site Catalyst cookie, determines whether cookies are enabled in the browser</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>s_fid</strong></td>
	<td>This cookie is provided by Adobe's Site Catalyst product suite. It contains a randomly generated id.</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>
	<td>1827	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>s_lv</strong></td>
	<td>This cookie name is associated with Adobe Analytics. It is used to identify the time between two visits by the same visitor.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>1095</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>s_lv_s</strong></td>
	<td>This cookie is adobe analytics. This cookie stores the time of a user’s last visit to a website.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>1	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>s_nr</strong></td>
	<td>Adobe Site Catalyst cookie, stores date of visit and if visitor is new or returning</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,	</td>
	<td>365	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>s_vi</strong></td>
	<td>Adobe Site Catalyst cookie, used to identify unique visitors, with an ID and timestamp</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>730</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>SSSC</strong></td>
	<td>This cookie is used for A/B testing. We set this cookie so we can analyse Visits, Campaigns, and Variation Group data.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>visid_incap_1719358</strong></td>
	<td>This cookie is used to store visitor-level custom variable data and generates statistics about website's traffic.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/,</td>
	<td>365	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>BEACON - static.trainlinecontent.com</strong></td>
	<td>This is used to attribute downloads via the Google Play store.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/,</td>
	<td>18351	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>PIXEL - bat.bing.com</strong></td>
	<td>This is used to attribute visitors from Bing.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/,	</td>
	<td>	</td>

 
</tr>



</table>
	</>
  )
  const aboutthesecookies3=(
	
	<p>We also use these cookies to make sure you see ads that are relevant to you. It’s important to note, disabling these cookies won’t stop adverts, it’ll just make them generic.

	And, even if you opt-out of Ads Personalisation, you may still see ads based on things like your general location, which we get from your IP address, your browser type, and your search terms. </p>
	
  )
  const advertise=(
	<>
	<p>We collect data about your browsing activity on our site and app, and elsewhere on the internet. We do this, so we can –</p>
	<ol style={{listStyleType:'disc'}}>
		<li className="my-2">Show you relevant content, like special offers and deals, on our site, our app, and in our marketing emails.</li>
		
		<li className="my-2">Show you relevant adverts when you browse other sites. For example, when you visit another site, we may show you an advert for a journey you often search for.</li>
	</ol>
	<p className="my-2">
	We call this type of cookie that we set ‘online behavioural advertising cookies’ – that’s a bit of a mouthful, so we’ll shorten it to ‘Advertising cookies’ in this section. <br />

Our Advertising cookies measure how effective the adverts we show you on our site and app are, so our Marketing teams can learn if they’re talking to you about our services in the right way. They’ll also tell us if you’ve visited our site or app via one of our affiliates – again, that’s to help our Affiliates teams know that everything’s working well there. <br />

Everywhere you go on the internet these days, you’ll see adverts. Our aim by using cookies and similar technologies is to make sure that when you see adverts, they’re relevant to you and can help make your travels easier. For example, if you’ve searched for train journeys between London and Manchester a few times on our site, you may see an advert with offers for that particular journey, to help you get the best deal. To do that, we share some of the data we collect from our Advertising cookies with selected third parties, so we can advertise on their sites and they can advertise on ours. All that means is you may see an advert of ours somewhere else on the web. Or alternatively, you’ll be on our site and see an advert from a third party. <br />
	</p>
	</>
  )
  const partnersweworkwith=(<>
  <p>We also let some trusted third parties set cookies and similar technologies on our site and app, which they use to understand you better, based on your search activity. We’ve outlined who these third parties are below. The cookies they set help them to provide you with relevant adverts and to see how helpful you’ve found those adverts. Let’s say you’ve searched for a trip like London to Manchester, you may see a third-party advert offering you a deal for a hotel in Manchester. We call these cookies ’third-party online behavioural advertising cookies’ (or, 3P Advertising cookies for short). These third parties may share some of the info they collect with us and other third parties too.</p>
 <p>The 3P Advertising cookies on our site and app include –</p>
 <h6 className="mt-4"><strong>Travel Audience</strong></h6>
 <p >More info can be found here </p>
 <h6 className="mt-4"><strong>Sojern   </strong></h6>
 <p>More info can be found here </p>
 <h6 className="mt-4"><strong>Facebook</strong></h6>
 <p>Facebook uses cookies and receives information when you visit Trainline, including device info and information about your activity. This occurs whether you have a Facebook account or not, and regardless of whether you’re logged in.  These are stored under the Facebook domain. <br />

There is lots of very helpful info directly provided by Facebook about how they use cookies, pixels, and similar technologies. For more info, please see here.   

</p>
 <h6 className="mt-4"><strong>Microsoft</strong></h6>
 <p>When you visit Trainline, Microsoft sets cookies based on the visits and searches you make on Bing in order to show you relevant adverts on Bing and MSN. These cookies are called ‘MUID’ and ‘MR’ and are stored for between six months and two years. <br />

There is lots of very helpful info directly provided by Microsoft about how they use cookies. For more info, please see here. </p>
 <h6 className="mt-4"><strong>Google</strong></h6>
 <p>When you visit Trainline, Google sets cookies to remember your preferences - that’s things like your language and your latest searches. Google also uses cookies to help customise ads on Google and for advertising served across the web, including on Trainline channels.<br />

 Cookies are also set for Google Adwords – that’s the platform that powers the text adverts you see in your Google search results. There is lots of very helpful info directly provided by Google about how they use cookies. For more info, please see here. <br />
 For more information about why you are seeing a particular advert, please see here. </p>
  </>)
  const customandlookalike=(
	<>
	<p>We use Custom and Lookalike Audiences at Trainline in order to advertise to existing and potential customers via social media platforms.  <br /><br />A Custom Audience is a type of audience created made up of existing customers. We target ads to the audience we’ve created across common social media channels, outlined below. <br />We also work with carefully selected partners to create Lookalike Audiences. These are lists of people to target with advertising who are similar to (or 'look like') people currently engaging with us.  <br /><br />For both types of activity (custom audiences and lookalike audiences) we aim to target people based on aggregate customer behaviour. For example, people who have recently taken a journey from Manchester. <br /><br /> The partners we work with include: </p>
	<p className="my-3"><strong>Facebook:</strong>for more info</p>
	<p className="my-3"><strong>Instagram:</strong>for more info</p> 
	<p className="my-3"><strong>Linkedin:</strong>for more info</p> 
	<p className="my-3"><strong>Twitter:</strong>for more info</p> 
	<p className="my-3"><strong>Snapchat:</strong>for more info</p> 
	<p className="my-3"><strong>Pinterest:</strong>for more info</p> 
	
	</>
  )
  const adverstisingexchangeandpartners=(<>
 <p>We work with the following Ad Exchanges listed below (and Google’s Ad Exchange: AdX) to show you adverts that are relevant to you, across Trainline channels. We work with Ad Exchanges that allow publishers, advertisers, and advertising networks to efficiently market, buy and sell digital and mobile advertising and ad inventory. These Exchanges use data collected through cookies and advertising IDs, such as your IP address and unique device number to deliver targeted advertising. These ads will then be based on things like your location or which station you are travelling to. We also use and share geolocation data for these targeted advertisements, when you’ve allowed us to. <br /><br />

These Ad exchanges all set cookies or use advertising IDs, which may be combined with data collected from other sources to provide publishers, advertisers, and ad networks with information to improve the relevance of the advertising presented to users on Trainline channels and elsewhere on the web.   <br /><br />

Ad Exchanges also allow retargeting at a campaign level. Retargeting is the process of serving an ad from a particular advertiser to a user, based on the fact that the user has previously visited a site. </p> <br />
<h6><strong>Advertising Partners, we work with</strong></h6>
<p>The Ad exchanges we work with and the cookies they set are described below.</p>
<table id='simple_table' >
<tr>
	<th>Name	</th>
	<th>Relevant privacy policy</th>
	
	
</tr>

<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Google </td>
	<td> Privacy policy here</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Rubicon </td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Open X </td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Index Exchange</td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>sovrn

</td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Smaato </td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Appnexus </td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Crimtan</td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>DoubleVerify Inc. </td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Flashtalking  </td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Integral Ad Science </td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Moat  </td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Pubmatic </td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> The trade desk</td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Sizmek </td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Amazon </td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Criteo </td>
	<td>Privacy policy here </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Brightcom</td>
	<td>http://www.brightcom.com/privacy-policy/</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Audienciad </td>
	<td>https://www.audienciad.com/privacy-policy.pdf</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Adtech</td>
	<td>https://www.verizonmedia.com/policies/us/en/verizonmedia/privacy/index.html</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Yahoo </td>
	<td>https://www.verizonmedia.com/policies/us/en/verizonmedia/privacy/index.html</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Rhythymone </td>
	<td>https://www.rhythmone.com/privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Whildey </td>
	<td>	https://www.whildey.com/privacy-policy#</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Contextweb</td>
	<td>https://pulsepoint.com/legal/website-privacy-policy</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Lijit </td>
	<td>	https://www.sovrn.com/legal/privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Media.net </td>
	<td>https://www.media.net/privacy-policy/</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Sonobi</td>
	<td>https://sonobi.com/privacy-policy/</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Smartadserver </td>
	<td>https://smartadserver.com/end-user-privacy-policy/</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Onomagic </td>
	<td>https://www.onomagic.com/</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Nobid.io </td>
	<td>https://www.nobid.io/privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>33across </td>
	<td>https://www1.33across.com/privacy-policy/</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Revcontent </td>
	<td>https://help.revcontent.com/en/knowledge/revcontent-privacy-policy </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Onetag </td>
	<td>https://www.onetag.com/privacy/</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Nativo </td>
	<td>https://www.nativo.com/privacy-policy</td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Admanmedia	 </td>
	<td>	https://admanmedia.com/politica.html?setLng=es  </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Duration Media  </td>
	<td> https://durationmedia.net/services-privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Adobe Advertising Cloud  </td>
	<td> https://www.adobe.com/uk/privacy/experience-cloud.html </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Automatad </td>
	<td> https://automatad.com/privacy-policy.php </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> GumGum </td>
	<td> https://gumgum.com/terms-and-policies/privacy-policy </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> DistrictM </td>
	<td> https://www.sharethrough.com/privacy-center/advertising-platform-privacy-notice </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Lemmatechnologies  </td>
	<td>https://lemmatechnologies.com/privacy-policy/  </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Conversant</td>
	<td> https://www.conversantmedia.com/optout </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Aol  </td>
	<td> https://privacy.aol.com/legacy/advertising-and-privacy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Advangelists  </td>
	<td> https://advangelists.com/privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Adyoulike </td>
	<td>https://www.adyoulike.com/privacy_policy.php  </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Spotexchange  </td>
	<td>https://www.spotx.tv/privacy-policy/  </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Freewheel tv  </td>
	<td> 	https://www.freewheel.com/privacy-policy </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Tremorhub </td>
	<td> 	https://www.tremorvideo.com/privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Synacor </td>
	<td> https://www.synacor.com/privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Conversantmedia </td>
	<td> https://www.conversantmedia.com/legal/privacy#CALIFORNIA_PRIVACY_RIGHTS </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Engagebdr.com </td>
	<td> https://engagebdr.com/privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Improvedigital  </td>
	<td> https://www.improvedigital.com/privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Themediagrid.com </td>
	<td> https://www.themediagrid.com/%20privacy%20policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Ucfunnel.com </td>
	<td> https://www.ucfunnel.com/privacy-policy </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>  Xandr.com</td>
	<td> 	https://www.xandr.com/privacy/platform-privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Triplelift.com </td>
	<td>https://triplelift.com/privacy/  </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Decenterads.com </td>
	<td> https://decenterads.com/privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Pubwise.io </td>
	<td> 	https://admin.pubwise.io/publisher/privacypolicy# </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Loopme.com </td>
	<td> https://legal.loopme.com/privacy-center#contract-hyartvn1o </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Xad.com </td>
	<td> https://www.groundtruth.com/privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Pubnative.net </td>
	<td> https://pubnative.net/privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Axonix.com </td>
	<td>https://www.emodoinc.com/privacy-policy/  </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Connatix.com  </td>
	<td> https://connatix.com/privacy-policy# </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Inmobi.com </td>
	<td> https://www.inmobi.com/privacy-policy </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td>Lkqd.net  </td>
	<td>https://www.nexstar.tv/privacy-policy/  </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> RTBHOUSE.COM</td>
	<td>https://www.rtbhouse.com/privacy-center/website-privacy-policy/  </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Risecodes.com </td>
	<td> https://risecodes.com/privacy </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Emodo </td>
	<td> https://www.emodoinc.com/privacy-policy/ </td>
	
 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td> Emerse </td>
	<td> https://www.emerse.com/privacy-policy/ </td>
	
 
</tr>




</table>
  </>)
  const thirdpartyservices=(<>
  <p>Some pages on our site, for example, ones offering hotels, theatre, car hire, insurance, and some international rail, are brought to you by third parties. We show you this sort of thing to help you plan your trip. <br /><br />

If you use these pages, the relevant third party may use cookies to collect data. They’ll use your data in line with their own privacy policy and cookies policy, which differs from ours, so make sure you give it a read. <br /><br />

If you sign in to your Trainline account using Facebook or Google+ sign in, the privacy and cookie policies of Facebook and Google respectively will apply to you.</p>
  </>)
  const listofpersonalization=(<>
   <table id='simple_table' >
<tr>
	<th>Name	</th>
	<th>Description</th>
	<th>Domains</th>
	<th>Lifespan (Days)</th>
	
</tr>

<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong> ***Unnamed***</strong></td>
	<td>	This helps us target our Facebook advertising.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>__gads</strong></td>
	<td>This cookie is unique ID so we know what ads to serve you.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/train-times,	</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_fbp</strong></td>
	<td>Used by Facebook to serve personalised advertising.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_gat_</strong></td>
	<td>Google Analytics Cookies</td>
	<td>thetrainline.com, www.thetrainline.com/train-times,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_gat_***</strong></td>
	<td>Google Analytics Cookies</td>
	<td>www.thetrainline.com,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_gcl</strong></td>
	<td>Google conversion tracking cookie.</td>
	<td>thetrainline.com,	</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_gclxxxx</strong></td>
	<td>Google conversion tracking cookie</td>
	<td>www.thetrainline.com,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_kuid_</strong></td>
	<td>This allows us to serve targeted, personalised advertising.</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_pk_uid</strong></td>
	<td>This cookie captures interests and any adverts you may have seen previously.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_taggstar_exp</strong></td>
	<td>Stores data to help us with our social media messaging/advertising</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_taggstar_ses</strong></td>
	<td>Stores data to help us with our social media messaging/advertising.</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_tracker</strong></td>
	<td>This cookie allows us to serve personalised ads for travelaudience.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>_tt_travelaudience</strong></td>
	<td>This cookie allows us to serve personalised ads for travelaudience.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>AA003</strong></td>
	<td>This cookie allows us to serve personalised advertising.  </td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>ab._gdnnnnnnnnnnnnn</strong></td>
	<td>This cookie allows our CRM to store your some of your activity.</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>ab.storage.deviceId.ed***</strong></td>
	<td>This helps us recognise anonymous users to serve personalised advertising.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>AMCV_***</strong></td>
	<td>Allow Adobe to track users across their products.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>apnid</strong></td>
	<td>This cookie is used to improve advertising for website visitors so it can serve more relevant advertisements.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>ATN</strong></td>
	<td>Used to serve personalised advertising.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>bcookie</strong></td>
	<td>This is used to gather information for your LinkedIn account.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>bkng</strong></td>
	<td>This cookie allows to retarget advertising with booking.com</td>
	<td>thetrainline.com,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>bscookie</strong></td>
	<td>This is used to gather information for your LinkedIn account.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>cid</strong></td>
	<td>This cookie is used to improve advertising for website visitors.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>demdex</strong></td>
	<td>This cookie helps Adobe Audience Manger.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>dpm</strong></td>
	<td>This cookie helps us serve personalised advertising.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>e_LO29XwxP^Event|visit^Action|***</strong></td>
	<td>This cookie helps us serve personalised advertising.</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>E3SessionID</strong></td>
	<td>Oracle ad services cookie.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>everest_g_v2</strong></td>
	<td>This cookie helps us serve personalised advertising.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,	</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>everest_session_v2</strong></td>
	<td>This cookie helps us serve personalised advertising.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>fr</strong></td>
	<td>Contains browser and user unique ID combination, used for targeted advertising.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>GoogleAdServingTest</strong></td>
	<td>This cookie is used to determine what ads have been shown to the website visitor.</td>
	<td>thetrainline.com,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>IDE</strong></td>
	<td>This cookie helps us serve personalised adverts in real time.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>lang</strong></td>
	<td>This cookie is used for tracking and targeting.</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>lidc</strong></td>
	<td>This cookie is used to populate information in your LinkedIn profile.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>thetrainline.com, www.thetrainline.com,	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>lissc</strong></td>
	<td>This cookie is used to populate information in your LinkedIn profile.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>MUID</strong></td>
	<td>This cookie helps us optimise our Bing advertising.</td>
	<td>www.thetrainline.com/train-times,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>MUIDB</strong></td>
	<td>This cookie helps us optimise our Bing advertising.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>NID</strong></td>
	<td>A google ID cookie used for advertising.</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>personalization_id</strong></td>
	<td>This cookie helps us with our twitter marketing.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>s_ecid</strong></td>
	<td>This cookie is used for consistent identifications of users.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>SSID</strong></td>
	<td>This cookie captures advertising you may have seen previously.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>TDCPM</strong></td>
	<td>This cookie helps our personalised advertising function.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>TDID</strong></td>
	<td>This cookie helps our personalised advertising function.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>test_cookie</strong></td>
	<td>This cookie allows our personalised advertising to function.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session	</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>thx_guid</strong></td>
	<td>Allows unique identification of a devices.</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>ticketalert-crumb</strong></td>
	<td>TicketAlert allows us to message you when your selected ticket is available cheaply, in advance.</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>ttdid</strong></td>
	<td>This cookie is used to serve personalised advertising.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>UserMatchHistory</strong></td>
	<td>This cookie is used to populate information in your LinkedIn profile.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>uuid2</strong></td>
	<td>This cookie allows our personalised advertising to function.</td>
	<td>thetrainline.com, www.thetrainline.com, www.thetrainline.com/en/help/, www.thetrainline.com/train-times,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>VISITOR_INFO1_LIVE</strong></td>
	<td>This cookie is used as a unique identifier to track viewing of videos.</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>YSC</strong></td>
	<td>This allows personalised advertising for YouTube.</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>Session</td>

 
</tr>
<tr  style={{borderBottom:'1px solid #98e2af'}}>
	<td><strong>PIXEL -graph.facebook.com</strong></td>
	<td>This is used to let Facebook know you have visited a page on our website.</td>
	<td>thetrainline.com, www.thetrainline.com,</td>
	<td>Persistent</td>

 
</tr>




</table>
  </>)
  const pushnotifications=(<>
  <p>If you are logged in to your account: you can withdraw your consent at any time by visiting your account area and selecting contact preferences. <br /><br />

If you are not logged in: please follow these steps dependent on what browser type you are using:</p> <br />
<ol style={{listStyleType:'disc'}}>
  <li>Google Chrome</li>
  <li>Safari</li>
  <li>Firefox</li>
  <li>Opera</li>
  <li>Microsoft Edge</li>
</ol>
  </>)
  const HelpandUsefulInformation=(<>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Help</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Advance Train Tickets</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Ticket refunds and changes</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Popular train journeys</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Getting your ticket</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Railcards</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Delays and disruption</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Mobile Tickets</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Delay Repay</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Sleeper trains (UK only)</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Travel assistance</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Day trips</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Airport transfers</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Weekly Season Tickets</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Off-Peak train times</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Monthly Season Tickets</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Deals and offers</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>I came by train</Link> </div>
   
  </div>

  </>)
  const TrainandbusCompanies=(<>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>European train companies</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>OUIGO</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Lumo</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>OUIGO Spain</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Avanti West Coast</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Railcards</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>LNER</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>TGV</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>TGV</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Italo</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>ScotRail</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>FlixTrain</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Gatwick Express</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>BlaBlaCar Bus</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Stansted Express</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Avlo</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Heathrow Express</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>AVE</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Elizabeth line</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Flixbus</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Leonardo Express</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>National Express</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Malpensa Express</Link> </div>
  
   
  </div>

  </>)
  const trainjourneyintheuk=(<>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Manchester</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Glasgow to Leeds</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Leeds to London</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>York to London</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Birmingham</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Edinburgh</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Newcastle</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Brighton</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Manchester to London</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Glasgow to London</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Edinburgh to London</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Cardiff to London</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Liverpool</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Bristol to London</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Glasgow to Manchester</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Newcastle to London</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Manchester to Glasgow</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Edinburgh to Manchester</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Glasgow to Liverpool</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Norwich</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>irmingham to Glasgow</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Birmingham to London</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Edinburgh to Glasgow</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Glasgow</Link> </div>
  
   
  </div>

  </>)
  const trainandbusesineurope=(<>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>European train times</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Madrid</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Brussels</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Barcelona to Valencia</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Amsterdam</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Rome to Venice</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Paris to Lyon</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Rome</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Rome to Milan</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Rome to Naples</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Paris to Milan</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Amsterdam Centraal</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Alicante to Madrid</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Malaga to Madrid</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Rome to Florence</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Madrid to Barcelona</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Valencia to Madrid</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Milan to Venice</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>London to Barcelona</Link> </div>
    
   
  </div>
 

  </>)
  const Topdestinations=(<>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>European destinations</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to Brighton</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to London</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to Gatwick Airport</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to Manchester</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to Stansted Airport</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to Birmingham</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to France</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to Leeds</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to Paris</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>rains to Edinburgh</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to Amsterdam</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to Glasgow</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to Disneyland Paris</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to Heathrow Airport</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to Brussels</Link> </div>
   
  </div>
 
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Trains to Luton Airport</Link> </div>
    
   
  </div>
 

  </>)
  const stations=(<>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>UK train stations</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Edinburgh Waverley</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>European train stations</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>London Euston</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>London Paddington</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>London Kings Cross</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Barcelona Sants</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Gatwick Airport</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Birmingham New Street</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Paris Gare du Nord</Link> </div>
   
  </div>
  <div className="row">
    <div className="col-sm-6"><Link style={{color:'black'}}>Milan Central Station</Link> </div>
    <div className="col-sm-6"><Link style={{color:'black'}}>Amsterdam Centraal</Link> </div>
   
  </div>
 
 

  </>)
 
  return (
    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div className="mobileabout text-item">
        <div className="container-fluid spacert">
          <h3>Cookies</h3>
        </div>
      </div>
      <div className="press">
        <div className="container-fluid">
          {/* <h2 className="line">{appConstants.terms}</h2> */}
          {/* <div className="text-line" style={{ paddingBottom: '20px' }}>
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div> */}
					<div className="p-5" style={{background:'#95dfac33'}}>
					<div className=" row">
					<div className="col-md-7 px-3">
						<h2 className="line mb-3">Cookie Policy</h2>
						<p><strong>Cookies get a bad rep, but they’re actually really useful and save you a lot of time. Read on to understand how the cookies we use can make your Trainline experience even sweeter.</strong></p>
						<Button className="my-2" >Cookie Policy</Button>
					</div>
					<div className="col-md-5">
					<img src="https://www.thetrainline.com/cms/media/3869/pictogram_cookie.png?width=0&height=0" style={{height:'60px'}} className="mb-3 img-fluid" alt="" />
					<p><strong>Read also</strong></p>
					<ol>
						<li><Link>Privacy Policy</Link></li>
						<li><Link>Terms and Conditions</Link></li>
					</ol>
					</div>
					</div>
					</div>
          <div className="">
           <div className="row py-3">
            <div className="col-md-4 col-sm-6 col-10  d-flex ">
			<h4 className="base-container-heading text-left"><strong>What are cookies?</strong> </h4>

            </div>
            <div className="col-md-8  mx-auto align-items-center justify-content-center">

                    

                    <p className="what-we-do-para">Cookies are tiny crumbs of personal data that we automatically collect when you use our website or app.</p>
                    <p className="what-we-do-para">When we refer to cookies, we may mean cookies and similar technologies, such as web pixels, tags. SDKs, GIFs, and beacons.</p>


            </div>
           </div>
		   <div className="row py-3">
			<div className="col-md-4"><h4 className="base-container-heading"><strong>What types of cookies we use and why</strong> </h4></div>
			<div className="col-md-8"><p>We have three cookie flavours:</p>
                    <ol className="what-we-do-list" style={{listStyleType:'disc'}}>
                        <li className="what-we-do-list-item my-2"><strong>Strictly necessary cookies </strong>make our site work. Without these, everything would crumble!</li>
                        <li className="what-we-do-list-item my-2"><strong>Performance cookies</strong>help us speed up your browsing. We want to help you travel effortlessly, so our site and app need to do what you want when you want them to!</li>
                        <li className="what-we-do-list-item my-2"><strong>Personalisation cookie</strong>make our site unique to you. You’re an individual after all! These cookies help us do things like default searches to your nearest station.</li>
                     

                    </ol>
                    
</div>
		   </div>
		   <div className="row py-3">
			<div className="col-md-4"><h4 className="base-container-heading"><strong>What happens when you turn off cookies?</strong> </h4></div>
			<div className="col-md-8">
                    <ol className="what-we-do-list" style={{listStyleType:'disc'}}>
                        <li className="what-we-do-list-item">If you turn off all cookies or use an app or web-blocking software, Trainline may not work in the best way. Imagine you searched for train tickets from London to Manchester and you added these tickets to your basket but accidentally closed our site before booking. If you’ve turned off cookies, when you return, your basket won’t be saved, so you’ll have to search for those tickets all over again. Cookies make things a bit easier.</li>
                        <li className="what-we-do-list-item">Disabling cookies on your desktop won’t affect the cookies on your mobile, so you’ll have to turn them off for each device you use.</li>
                        <li className="what-we-do-list-item">Just so you know, turning off cookies won’t delete cookies from your browser. You’ll need to do this from your browser settings.</li>
                     

                    </ol>
                    
</div>
		   </div>
		  
           <div className="row py-3">
            <div className="col-md-4   mx-auto  justify-content-center">
			<h4 className="base-container-heading"><strong>Strictly necessary cookies</strong> </h4>
			<p>These strictly necessary cookies can’t be turned off, as they power our site. <br /> <br />

They’re used for identity, security, fraud prevention, and functionality purposes.</p>
            </div>
            <div className="col-md-8  mx-auto align-items-center justify-content-center">

                    

                    

                    <div className="faq-accordian">
            
  
            <div className="accordion">
              <Collapse accordion>
                <Panel
                  header="About these cookies "
                  key="1"
                >
                  <div className="div-content-box">{aboutthesecookies}</div>
                </Panel>
                <Panel
                  header="List of strictly necessary cookies"
                  key="2"
                >
                  <div className="div-content-box" >{listofstrictly}</div>
                </Panel>
              
               
              </Collapse>
            </div>
          </div>

            </div>
           </div>
           <div className="row py-3">
            
			<div className="col-md-4   mx-auto  justify-content-center">
			<h4 className="base-container-heading"><strong>Performance cookies</strong> </h4>
		
			<p>These cookies tend to focus on what you’re doing, to help our app and site do what you ask it to.</p>
            </div>
            <div className="col-md-8  mx-auto align-items-center justify-content-center">


                    

                    <div className="faq-accordian">
            
  
            <div className="accordion">
              <Collapse accordion>
                <Panel
                  header="About these cookies "
                  key="1"
                >
                  <div className="div-content-box">{aboutthesecookies2}</div>
                </Panel>
                <Panel
                  header="List of strictly necessary cookies"
                  key="2"
                >
                  <div className="div-content-box">{listofperformance}</div>
                </Panel>
              
               
              </Collapse>
            </div>
          </div>

            </div>
           </div>
           <div className="row py-3">
            <div className="col-md-4  mx-auto  justify-content-center">
			<h4 className="base-container-heading"><strong>Personalisation Cookies</strong> </h4>
			<p>Now we’re on to the cool stuff. Personalisation cookies save you time by helping us do things. <br />Even if you choose to turn off these cookies, you’ll still see ads. They’ll just be less relevant.</p>
            </div>
            <div className="col-md-8  mx-auto align-items-center justify-content-center">

                    <div className="faq-accordian">
            
  
            <div className="accordion">
              <Collapse accordion>
                <Panel
                  header="About these cookies "
                  key="1"
                >
                  <div className="div-content-box">{aboutthesecookies3}</div>
                </Panel>
                <Panel
                  header="Advertising"
                  key="2"
                >
                  <div className="div-content-box">{advertise}</div>
                </Panel>
				<Panel
                  header="Partners we work with"
                  key="4"
                >
                  <div className="div-content-box">{partnersweworkwith}</div>
                </Panel>
                <Panel
                  header="Custom and lookalike audiences"
                  key="3"
                >
                  <div className="div-content-box">{customandlookalike}</div>
                </Panel>
                
               
                <Panel
                  header="Advertising exchanges and partners"
                  key="5"
                >
                  <div className="div-content-box">{adverstisingexchangeandpartners}</div>
                </Panel>
                <Panel
                  header="Third party services you may find through us"
                  key="6"
                >
                  <div className="div-content-box">{thirdpartyservices}</div>
                </Panel>
                <Panel
                  header="List of personalisation cookies"
                  key="7"
                >
                  <div className="div-content-box">{listofpersonalization}</div>
                </Panel>
                <Panel
                  header="Push notifications"
                  key="8"
                >
                  <div className="div-content-box">{pushnotifications}</div>
                </Panel>
              
               
              </Collapse>
            </div>
          </div>

            </div>
           </div>
           <div className="row py-3">
            <div className="col-md-4  mx-auto p-3  justify-content-center">
<ul>
  <li className="my-2"><Link style={{color:'black'}}>About Trainline</Link></li>
  <li className="my-2"><Link style={{color:'black'}}>News</Link></li>
  <li className="my-2"><Link style={{color:'black'}}>Investors</Link></li>
  <li className="my-2"><Link style={{color:'black'}} >Careers</Link></li>
  <li className="my-2"><Link style={{color:'black'}} >Careers</Link></li>
  <li className="my-2"><Link style={{color:'black'}}>Trainline Partner Solutions</Link></li>
  <li className="my-2"><Link style={{color:'black'}}>Affiliates and Partnerships</Link></li>
  <li className="my-2"><Link style={{color:'black'}}>Terms and conditions / Security</Link></li>
  <li className="my-2"><Link style={{color:'black'}}>Privacy / Cookies</Link></li>
  <li className="my-2"><Link style={{color:'black'}}>Modern Slavery Act (UK)</Link></li>
  
  </ul>
		           </div>
            <div className="col-md-8  mx-auto align-items-center justify-content-center">

                    <div className="faq-accordian">
        
  
            <div className="accordion">
              <Collapse accordion>
                <Panel
                  header="Help and useful information "
                  key="1"
                >
                  <div className="div-content-box">{HelpandUsefulInformation}</div>
                </Panel>
                <Panel
                  header="Train and bus companies"
                  key="2"
                >
                  <div className="div-content-box ">{TrainandbusCompanies}</div>
                </Panel>
                <Panel
                  header="Train journeys in the UK"
                  key="3"
                >
                  <div className="div-content-box">{trainjourneyintheuk}</div>
                </Panel>
                <Panel
                  header="Trains and buses in Europe"
                  key="4"
                >
                  <div className="div-content-box">{trainandbusesineurope}</div>
                </Panel>
               
                <Panel
                  header="Top destinations"
                  key="5"
                >
                  <div className=" div-content-box">{Topdestinations}</div>
                </Panel>
                <Panel
                  header="Stations"
                  key="6"
                >
                  <div className=" div-content-box">{stations}</div>
                </Panel>
              
              
              
               
              </Collapse>
            </div>
          </div>

            </div>
           </div>
         
          </div>
        </div>
      </div>
	  <Icon1 handleClick={handlewClick} />
      <FooterMain />
    </div>
  );
};
export default Cookies;
