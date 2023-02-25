import React, { useState,  useLayoutEffect } from "react";
import { Collapse,  Modal, Tabs } from "antd";
import images from "./../themes/appImage";
import { useDispatch, useSelector } from "react-redux";
import {Button }from "antd";
import Toggle from "./Toggle";
import { useNavigate } from "react-router-dom";
import { drawerAction } from "./../redux/actions/authentication";


import DynamicAccordion from "../common/DynamicAccordion"



import { getMemoizedAuthenticationData } from "./../redux/selectors/authentication";

import CustomAccordion from "./CustomAccordion";
import { CopyAllOutlined } from "@mui/icons-material";


const Icon1 = (props) => {
 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultIndex, setResultIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  //  copy text
  const [copySuccess, setCopySuccess] = useState('');
const copiedtext="sjhdjshfdjhs"
  const copyToClipboard = (e) => {
    const textArea = document.createElement("textarea");
    textArea.value = copiedtext;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopySuccess("Copied!");
  };
  //skjjhsjkfhkjshfjdhfkj

  const [imageSrc, setimageSrc] = useState(images.mobilecut);

  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState } = authenticationData;

  const dispatch = useDispatch();

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useLayoutEffect(() => {
    if (resultIndex < 2) {
      setResultIndex(resultIndex + 1);
    } else {
      setResultIndex(0);
    }
  }, [imageSrc]);

  const handlewClick = () => {
    let action = drawerState ? false : true;
    dispatch(drawerAction(action, "drawerState"));
  };
  const text1=(
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">used to identify the user session on the server and determine if a user is authenticated
</p>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.
</p>
<ol className="my-1" style={{listStyleType:'disc'}}>
  <li className="text-acc">The data is deleted after every session</li>
</ol>
<p className="text-gray text-acc">History</p>
<table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text2=(
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is an extensible Application Performance Management Service.</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Microsoft Ireland Operations Limited One Microsoft Place, South County Business Park, Leopardstown, Dublin 18 D18 P521, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company.</p>
    <a href="" className="text-acc">www.PassengerHub\privacyresponse</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn text-acc btn-acc">Analytics</button>
    <p className="text-acc text-gray">Technologies Used</p>
    <p className="text-acc">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
    <button className="btn text-acc btn-acc">Cookies</button>
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn text-acc btn-acc">Timestamp</button>
    <button className="btn text-acc btn-acc">Websites visited</button>
    <button className="btn text-acc btn-acc">referrer URL</button>
    <button className="btn text-acc btn-acc">Operating system information</button>
    <button className="btn text-acc btn-acc">Browser information</button>
    <button className="btn text-acc btn-acc">Screen resolution</button>
    <button className="btn text-acc btn-acc">Geographic location</button>
    <p className=" text-acc">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. f GDPR</button>
    <p className=" text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className=" text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data are retained for up to 370 days</li>
    </ol>
    <p className=" text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">Worldwide</button>
    <p className=" text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn btn-acc">Microsoft Ireland Operations Limited</button>
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://privacy.microsoft.com/en-us/privacystatement</a>
   <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text3=(
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a web analytics service. With this, the user can measure the advertising return on investment "ROI" as well as track user behavior with flash, video, websites and applications.</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Google Ireland Limited</p>
    <p className="text-acc">Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Marketing</button>
    <button className="btn btn-acc">Analytics</button>
    <p className="text-acc text-gray">Technologies Used</p>
    <p className="text-acc">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
    <button className="btn btn-acc">Cookies</button>
    <button className="btn btn-acc">Pixel</button>
    <button className="btn btn-acc">JavaScript</button>
    <button className="btn btn-acc">Device fingerprinting</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Click path</button>
    <button className="btn btn-acc">Date and time of visit</button>
    <button className="btn btn-acc">Device information</button>
    <button className="btn btn-acc">Referrer URL</button>
    <button className="btn btn-acc">Pages visited</button>
    <button className="btn btn-acc">Browser information</button>
    <button className="btn btn-acc">Hostname</button>
    <button className="btn btn-acc">Browser language</button>
    <button className="btn btn-acc">Browser type</button>
    <button className="btn btn-acc">Screen resolution</button>
    <button className="btn btn-acc">Device operating system</button>
    <button className="btn btn-acc">Interaction data</button>
    <button className="btn btn-acc">User behaviour</button>
    <button className="btn btn-acc">Visited URL</button>
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for our logging purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">United States of America</button>
   <button className="btn btn-acc">Taiwan</button>
   <button className="btn btn-acc">Singapore</button>
   <button className="btn btn-acc">Chile</button>
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn btn-acc">Alphabet Inc.</button>
   <button className="btn btn-acc">Google Ireland Limited</button>
   <button className="btn btn-acc">Google LLC</button>
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 2 years</li>
      <li className="text-acc">Maximum age of cookie storage: 2 years</li>
    </ol>
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text4=(
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a web analytics service. </p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Google Ireland Limited</p>
    <p className="text-acc">Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Optimization</button>
    <button className="btn btn-acc">Analytics</button>
    <p className="text-acc text-gray">Technologies Used</p>
    <p className="text-acc">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
    <button className="btn btn-acc">Cookies</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Duration of visit</button>
    <button className="btn btn-acc">Referrer URL</button>
    <button className="btn btn-acc">Visited sub-pages</button>
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for our logging purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">United States of America</button>
   <button className="btn btn-acc">Taiwan</button>
   <button className="btn btn-acc">Singapore</button>
   <button className="btn btn-acc">Chile</button>
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn btn-acc">Alphabet Inc.</button>
   <button className="btn btn-acc">Google Ireland Limited</button>
   <button className="btn btn-acc">Google LLC</button>
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 2 years</li>
      <li className="text-acc">Maximum age of cookie storage: 2 years</li>
    </ol>
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text5=(
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is an integrated map service.</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Google Ireland Limited</p>
    <p className="text-acc">Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Displaying Maps</button>
   
    <p className="text-acc text-gray">Technologies Used</p>
    <p className="text-acc">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
    <button className="btn btn-acc">API's</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Date and time of visi</button>
    <button className="btn btn-acc">Location information</button>
    <button className="btn btn-acc">IP address</button>
    <button className="btn btn-acc">URL</button>
    <button className="btn btn-acc">Usage data</button>
    <button className="btn btn-acc">Search terms</button>
    <button className="btn btn-acc">Geographic location</button>
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for our logging purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">United States of America</button>
   <button className="btn btn-acc">Taiwan</button>
   <button className="btn btn-acc">Singapore</button>
   <button className="btn btn-acc">Chile</button>
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn btn-acc">Alphabet Inc.</button>
   <button className="btn btn-acc">Google Ireland Limited, Google LLC, Alphabet Inc</button>
  
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">http://www.google.com/intl/de/policies/privacy/</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>
   
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text6=(
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a domain owned by Google that is used for storing and loading ad content and other resources relating to ads for Google AdSense and DoubleClick from the Google CDN.</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Google Ireland Limited</p>
    <p className="text-acc">Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Storing and loading ad content</button>
    
    <p className="text-acc text-gray">Technologies Used</p>
    <p className="text-acc">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
    <button className="btn btn-acc">Web beacons</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Category of ads</button>
    <button className="btn btn-acc">Clicked advertisements</button>
    <button className="btn btn-acc">Interaction with advertisemen</button>
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for our logging purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">United States of America</button>
   <button className="btn btn-acc">Taiwan</button>
   <button className="btn btn-acc">Singapore</button>
   <button className="btn btn-acc">Chile</button>
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn btn-acc">Google LLC</button>
   <button className="btn btn-acc">Google Ireland Limited</button>
   <button className="btn btn-acc">Alphabet Inc</button>
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>

    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text7=(
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a tag management system. Via Google Tag Manager, tags can be integrated centrally via a user interface. Tags are small sections of code that can track activities. Script codes of other tools are integrated via the Google Tag Manager. The Tag Manager allows to control when a particular tag is triggered.</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Google Ireland Limited</p>
    <p className="text-acc">Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Tag Management</button>
    
    <p className="text-acc text-gray">Technologies Used</p>
    <p className="text-acc">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
    <button className="btn btn-acc">Website tags</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Aggregated data about tag firing</button>
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for our logging purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">United States of America</button>
   <button className="btn btn-acc">Taiwan</button>
   <button className="btn btn-acc">Singapore</button>
   <button className="btn btn-acc">Chile</button>
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn btn-acc">Google LLC</button>
   <button className="btn btn-acc">Google Ireland Limited</button>
   <button className="btn btn-acc">Alphabet Inc</button>
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 2 years</li>
      <li className="text-acc">Maximum age of cookie storage: 2 years</li>
    </ol>
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text8=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a Cloud Computing Service.</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Microsoft Ireland Operations Limited</p>
    <p className="text-acc">Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Functionality</button>
    <button className="btn btn-acc">Optimization</button>
    
    <p className="text-acc text-gray">Technologies Used</p>
    <p className="text-acc">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
    <button className="btn btn-acc">Log files</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">IP-Address</button>
    <button className="btn btn-acc">Date and time of visit</button>
    <button className="btn btn-acc">User agent</button>
    <button className="btn btn-acc">Referrer-URL</button>
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for our logging purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">United States of America</button>
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn btn-acc">Google LLC</button>
   <button className="btn btn-acc">Google Ireland Limited</button>
   <button className="btn btn-acc">Alphabet Inc</button>
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 2 years</li>
      <li className="text-acc">Maximum age of cookie storage: 2 years</li>
    </ol>
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text9=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">Keeps track of the last selected language and the current logged in user</p>
    
   
   
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data is deleted after every session</li>
    </ol>
   
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text10=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a content- and e-commerce service</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Sitecore</p>
    <p className="text-acc">101 California Street, Suite 1600, CA 94111, San Francisco, United States of America</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Marketing</button>
    <button className="btn btn-acc">Retargeting</button>
    <button className="btn btn-acc">Market research</button>
    
    <p className="text-acc text-gray">Technologies Used</p>
    <p className="text-acc">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
    <button className="btn btn-acc">Cookies</button>
    <button className="btn btn-acc">Web beacons</button>
    <button className="btn btn-acc">Pixel</button>
    <button className="btn btn-acc">Widgets</button>
    <button className="btn btn-acc">Device fingerprinting</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">IP-Address</button>
    <button className="btn btn-acc">Browser information</button>
    <button className="btn btn-acc">Browser information</button>
    <button className="btn btn-acc">Date and time of visit</button>
    <button className="btn btn-acc">Pages visited</button>
    <button className="btn btn-acc">E-mail address</button>
    <button className="btn btn-acc">License information</button>
    <button className="btn btn-acc">Usage data</button>
    <button className="btn btn-acc">Browser type</button>
    <button className="btn btn-acc">Geographic location</button>
    <button className="btn btn-acc">Third party information</button>
    <button className="btn btn-acc">Social media information</button>
    <button className="btn btn-acc">Payment information</button>
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">United States of America</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for our logging purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">Worldwide</button>
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn btn-acc">Sitecore</button>
  
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>
   
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text11=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a consent management service. Usercentrics GmbH is used on the website as a processor for the purpose of consent management.</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Usercentrics GmbH</p>
    <p className="text-acc">Sendlinger Str. 7, 80331 Munich, Germany</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Compliance with legal obligations</button>
    <button className="btn btn-acc">Consent storage</button>
    
    <p className="text-acc text-gray">Technologies Used</p>
    <p className="text-acc">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
    <button className="btn btn-acc">Local storage</button>
    <button className="btn btn-acc">Pixel</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Opt-in and opt-out data</button>
    <button className="btn btn-acc">Referrer URLt</button>
    <button className="btn btn-acc">User agent</button>
    <button className="btn btn-acc">User settings</button>
    <button className="btn btn-acc">Consent ID</button>
    <button className="btn btn-acc">Time of consent</button>
    <button className="btn btn-acc">Consent type</button>
    <button className="btn btn-acc">Template version</button>
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for our logging purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">The consent data (given consent and revocation of consent) are stored for one years. The data will then be deleted immediately.</p>
   <button className="btn btn-acc">United States of America</button>
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn btn-acc">Usercentrics GmbH</button>
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>
   
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text12=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">WalkMe is a cloud-based interactive guidance and engagement platform that helps service managers, user experience managers, and sales managers manage customer experiences on company websites.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text13=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">Affiliate Future provides advertisers with an effective marketing solution through its affiliate network and tools. AF delivers millions of transactions per month to hundreds of advertisers from SME’s to major brands. AF operates on a pay on performance basis, giving our advertisers a low risk environment to grow their online business with the ability to achieve an excellent ROI.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text14=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a Cloud Computing Service.</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Amazon Web Services EMEA SARL</p>
    <p className="text-acc">38 Avenue John F. Kennedy, L-1855, Luxembourg</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Cloud computing</button>
   
    
    <p className="text-acc text-gray">Technologies Used</p>
    <p className="text-acc">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
    <button className="btn btn-acc">Cookies</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Accessed applications</button>
    <button className="btn btn-acc">Authentication and security credential information</button>
    <button className="btn btn-acc">Browser type</button>
    <button className="btn btn-acc">Browser version</button>
    <button className="btn btn-acc">Click path</button>
    <button className="btn btn-acc">Content interaction information</button>
    <button className="btn btn-acc">Cookie ID</button>
    <button className="btn btn-acc">Device information</button>
    <button className="btn btn-acc">Device type</button>
    <button className="btn btn-acc">Download error</button>
    <button className="btn btn-acc">Downloaded content from AWS</button>
    <button className="btn btn-acc">Duration and number of simultaneous streams and downloads</button>
    <button className="btn btn-acc">Full URL clickstream to, through, and from AWS website (including date and time)</button>
    <button className="btn btn-acc">Geographic location</button>
    <button className="btn btn-acc">Interactions or communications with AWS</button>
    <button className="btn btn-acc">Internet service provider</button>
    <button className="btn btn-acc">IP address</button>
    <button className="btn btn-acc">Mouse movements</button>
    <button className="btn btn-acc">Network connection type</button>
    <button className="btn btn-acc">Opened emails or clicks on links in emails from AWS</button>
    <button className="btn btn-acc">Operating system information</button>
    <button className="btn btn-acc">Page interaction information</button>
    <button className="btn btn-acc">Page response times</button>
    <button className="btn btn-acc">Streams</button>
    <button className="btn btn-acc">Time zone</button>
    <button className="btn btn-acc">Usage data</button>
    <button className="btn btn-acc">Views and interactions with content and ads</button>
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for our logging purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">United States of America</button>
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn btn-acc">Amazon Web Services Inc.</button>
   <button className="btn btn-acc">Amazon Web Services EMEA SARL</button>
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 2 years</li>
      <li className="text-acc">Maximum age of cookie storage: 2 years</li>
    </ol>
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text15=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">UK Live Chat Software provider offering GDPR compliant web chat software for small and large businesses.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text16=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a marketing-automation- and webtracking service</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">ClickDimensions LLC</p>
    <p className="text-acc">6849 Peachtree Dunwoody Road, Building B-1, Suite 200, Sandy Springs, GA 30328, United States of America</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Cloud computing</button>
   
    
    <p className="text-acc text-gray">Technologies Used</p>
    <p className="text-acc">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
    <button className="btn btn-acc">Cookies</button>
    <button className="btn btn-acc">Pixel tags</button>
    <button className="btn btn-acc">Web beacons</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">IP address</button>
    <button className="btn btn-acc">Usage data</button>
    <button className="btn btn-acc">Browser information</button>
    <button className="btn btn-acc">Pages viewed</button>
    <button className="btn btn-acc">Device information</button>
    <button className="btn btn-acc">Demographic information</button>
   
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">United States of America</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for our logging purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">United States of America</button>
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn btn-acc">ClickDimensions LLC</button>
  
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>
 
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text17=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a Tracking technology offered by Facebook and used by other Facebook services. It is used to track interactions of visitors with websites ("Events") after they have clicked on an ad placed on Facebook or other services provided by Meta ("Conversion").</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Meta Platforms Ireland Ltd.</p>
    <p className="text-acc">4 Grand Canal Square, Grand Canal Harbour, Dublin, D02, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Analytics</button>
    <button className="btn btn-acc">Marketing</button>
    <button className="btn btn-acc">Retargeting</button>
    <button className="btn btn-acc">Advertisement</button>
    <button className="btn btn-acc">Conversion Tracking</button>
    <button className="btn btn-acc">Personalisation</button>
    
    <p className="text-acc text-gray">Technologies Used</p>
    <p className="text-acc">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
    <button className="btn btn-acc">Cookies</button>
    <button className="btn btn-acc">Pixe</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Ads viewed</button>
    <button className="btn btn-acc">Content viewed</button>
    <button className="btn btn-acc">Device information</button>
    <button className="btn btn-acc">HTTP-header</button>
    <button className="btn btn-acc">Interactions with advertisement, services, and products</button>
    <button className="btn btn-acc">IP address</button>
    <button className="btn btn-acc">Items clicked</button>
    <button className="btn btn-acc">Marketing information</button>
    <button className="btn btn-acc">Pixel ID</button>
    <button className="btn btn-acc">Referrer URL</button>
    <button className="btn btn-acc">Usage data</button>
    <button className="btn btn-acc">User behaviour</button>
    <button className="btn btn-acc">Facebook cookie information</button>
    <button className="btn btn-acc">Facebook user ID</button>
    <button className="btn btn-acc">Usage/click behaviour</button>
    <button className="btn btn-acc">Browser information</button>
    <button className="btn btn-acc">Device operating system</button>
    <button className="btn btn-acc">Device ID</button>
    <button className="btn btn-acc">User agent</button>
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">User’s interactions tracked on websites will not be stored longer than for two years. However, the data will be deleted as soon as they are no longer needed for the processing purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">Singapore</button>
   <button className="btn btn-acc">United States of America</button>
   <button className="btn btn-acc">United Kingdom</button>
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn btn-acc">Meta Platforms Ireland Ltd., Meta Platforms Inc.</button>
   <button className="btn btn-acc">Google Ireland Limited</button>
   <button className="btn btn-acc">Alphabet Inc</button>
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 1 years</li>
      <li className="text-acc">Maximum age of cookie storage: No</li>
    </ol>
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">Decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text18=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">TThis is a font and icon toolkit service</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Fonticons. Inc.</p>
    <p className="text-acc">6 Porter Road, Apartment 3R, Cambridge, MA 02140, United States of America</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">privacy@fontawesome.com</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Providing fonts</button>
    
    
 
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">IP address</button>
    <button className="btn btn-acc">Referrer URL</button>
   
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">United States of America</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for the processing purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">United States of America</button>
   
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>

   <button className="btn btn-acc">Fonticons. Inc.</button>
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://fontawesome.com/privacy</a>
   
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 2 years</li>
      <li className="text-acc">Maximum age of cookie storage: No</li>
    </ol>
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">Decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text19=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is an advertising service. </p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Google Ireland Limited</p>
    <p className="text-acc">Google Building Gordon House, 4 Barrow Street, Dublin D04 E5W5, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Advertisement</button>
    <button className="btn btn-acc">Analytics</button>
    <button className="btn btn-acc">Providing Service</button>
    <button className="btn btn-acc">Statistics</button>
    
    <p className="text-gray acc-text">Technologies Used</p>
    <p className="acc-text">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
 <button className="acc-btn btn">Cookies</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Ads viewed</button>
    <button className="btn btn-acc">Cookie ID</button>
    <button className="btn btn-acc">Date and time of visit</button>
    <button className="btn btn-acc">Device information</button>
    <button className="btn btn-acc">Geographic location</button>
    <button className="btn btn-acc">IP address</button>
    <button className="btn btn-acc">Search terms</button>
    <button className="btn btn-acc">Ads shown</button>
    <button className="btn btn-acc">Client ID</button>
    <button className="btn btn-acc">Impressions</button>
    <button className="btn btn-acc">Online identifiers</button>
    <button className="btn btn-acc">Browser information</button>
   
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for the processing purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">Chile</button>
   <button className="btn btn-acc">Singapore</button>
   <button className="btn btn-acc">United States of America</button>
   <button className="btn btn-acc">Taiwan</button>
   
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>

   <button className="btn btn-acc">Alphabet Inc., Google LLC, Google Ireland Limited</button>
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>
   
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 2 years</li>
      <li className="text-acc">Maximum age of cookie storage: No</li>
    </ol>
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">Decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text20=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is an advertising service. </p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Google Ireland Limited</p>
    <p className="text-acc">Google Building Gordon House, 4 Barrow Street, Dublin D04 E5W5, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Advertisement</button>
    <button className="btn btn-acc">Targeting</button>
  
    
    <p className="text-gray acc-text">Technologies Used</p>
    <p className="acc-text">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
 <button className="acc-btn btn">Cookies</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Click path</button>
    <button className="btn btn-acc">IP address</button>
    <button className="btn btn-acc">Referrer URL</button>
    <button className="btn btn-acc">Touch point to advertising medium</button>
    <button className="btn btn-acc">Transactions</button>
    <button className="btn btn-acc">User agent</button>
    <button className="btn btn-acc">Pages viewed</button>
    
   
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for the processing purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">Chile</button>
   <button className="btn btn-acc">Singapore</button>
   <button className="btn btn-acc">United States of America</button>
   <button className="btn btn-acc">Taiwan</button>
   
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>

   <button className="btn btn-acc">Pages viewed</button>
   <button className="btn btn-acc">Google Ireland Limited</button>
   <button className="btn btn-acc">Alphabet Inc</button>
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>
   
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 2 years</li>
      <li className="text-acc">Maximum age of cookie storage: No</li>
    </ol>
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">Decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const text21=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a web analytics and advertising service. </p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Google Ireland Limited</p>
    <p className="text-acc">Google Building Gordon House, 4 Barrow Street, Dublin D04 E5W5, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/troubleshooter/7575787?hl=en</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Advertisement</button>
    <button className="btn btn-acc">Analytics</button>
    <button className="btn btn-acc">Marketing</button>
    <button className="btn btn-acc">Remarketing</button>
    <button className="btn btn-acc">Remarketing</button>
  
    
    <p className="text-gray acc-text">Technologies Used</p>
    <p className="acc-text">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
 <button className="acc-btn btn">Cookies</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Ads viewed</button>
    <button className="btn btn-acc">Click path</button>
    <button className="btn btn-acc">Browser information</button>
    <button className="btn btn-acc">Click path</button>
    <button className="btn btn-acc">Cookie ID</button>
    <button className="btn btn-acc">Date and time of visit</button>
    <button className="btn btn-acc">Device operating system</button>
    <button className="btn btn-acc">Geographic location</button>
    <button className="btn btn-acc">IP address</button>
    <button className="btn btn-acc">Screen resolution</button>
    <button className="btn btn-acc">Search terms</button>
    <button className="btn btn-acc">Usage data</button>
    <button className="btn btn-acc">User interaction data</button>
    <button className="btn btn-acc">Websites visited</button>
    <button className="btn btn-acc">Pages viewed</button>
    
   
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for the processing purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">Chile</button>
   <button className="btn btn-acc">Singapore</button>
   <button className="btn btn-acc">United States of America</button>
   <button className="btn btn-acc">Taiwan</button>
   
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>

   <button className="btn btn-acc">Google LLC</button>
   <button className="btn btn-acc">Google Ireland Limited</button>
   <button className="btn btn-acc">Alphabet Inc</button>
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>
   
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 1 years</li>
      <li className="text-acc">Maximum age of cookie storage: No</li>
    </ol>
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">Decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const GoogleTranslate=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a translation service.</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Google Ireland Limited</p>
    <p className="text-acc">Google Building Gordon House, 4 Barrow Street, Dublin D04 E5W5, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/troubleshooter/7575787?hl=en</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Providing Service</button>

  
    
    <p className="text-gray acc-text">Technologies Used</p>
    <p className="acc-text">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
 <button className="acc-btn btn">Cookies</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">IP address</button>
   
    
   
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for the processing purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">Chile</button>
   <button className="btn btn-acc">Singapore</button>
   <button className="btn btn-acc">United States of America</button>
   <button className="btn btn-acc">Taiwan</button>
   
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>

   <button className="btn btn-acc">Google LLC</button>
   <button className="btn btn-acc">Google Ireland Limited</button>
   <button className="btn btn-acc">Alphabet Inc</button>
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?fg=1&hl=en</a>

   
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 1 years</li>
      <li className="text-acc">Maximum age of cookie storage: No</li>
    </ol>
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">Decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const Hotjar=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a web analytics service. It is used to collects data on users’ behavior. Hotjar can also process provided information from you within surveys and feedback functions incorporated into our website. </p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Hotjar Limited</p>
    <p className="text-acc">Dragonara Business Centre, 5th Floor, Dragonara Road, Paceville St Julian's STJ 3141, Malta</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">dpo@hotjar.com</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Analytics</button>
    <button className="btn btn-acc">Feedback</button>

  
    
    <p className="text-gray acc-text">Technologies Used</p>
    <p className="acc-text">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
 <button className="acc-btn btn">Cookies</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Date and time of visit</button>
    <button className="btn btn-acc">Device type</button>
    <button className="btn btn-acc">Geographic location</button>
    <button className="btn btn-acc">IP address</button>
    <button className="btn btn-acc">Mouse movements</button>
    <button className="btn btn-acc">Pages visited</button>
    <button className="btn btn-acc">Referrer URL</button>
    <button className="btn btn-acc">Screen resolution</button>
    <button className="btn btn-acc">Unique device identifier</button>
    <button className="btn btn-acc">Language information</button>
    <button className="btn btn-acc">Device operating system</button>
    <button className="btn btn-acc">Browser type</button>
    <button className="btn btn-acc">Clicks</button>
    <button className="btn btn-acc">Domain name</button>
    <button className="btn btn-acc">Unique user ID</button>
    <button className="btn btn-acc">Answers given to surveys</button>
   
   
    
   
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Data about your visit and your activities on the website are generally stored for 365 days and then automatically deleted. This does not apply to information gathered within surveys and incoming feedback. However, data will be deleted in any case as soon as they are no longer needed for the processing purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
  
   <button className="btn btn-acc">United States of America</button>

   
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>

   <button className="btn btn-acc">Hotjar Ltd., Amazon Web Services EMEA SARL, Datadog Inc., Functional Software Inc.</button>
 
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://www.hotjar.com/legal/policies/privacy</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://help.hotjar.com/hc/en-us/articles/115011789248-Hotjar-Cookies</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://www.hotjar.com/legal/compliance/opt-out</a>

   
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 1 years</li>
      <li className="text-acc">Maximum age of cookie storage: No</li>
    </ol>
    <p className="text-acc text-gray">Subservices</p>
    <p className="text-acc ">Below you can find all the services that are subordinate to this service. The current consent status of this service applies to all subservices.</p>
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">Decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const MicrosoftAd=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a tracking and advertising service. </p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Microsoft Ireland Operations Limited</p>
    <p className="text-acc">One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://aka.ms/privacyresponse</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Advertisement</button>
    <button className="btn btn-acc">Conversion Tracking</button>

  
    
    <p className="text-gray acc-text">Technologies Used</p>
    <p className="acc-text">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
 <button className="acc-btn btn">Cookies</button>
 <button className="acc-btn btn">Web beacons</button>
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Browser language</button>
    <button className="btn btn-acc">Clicked advertisements</button>
    <button className="btn btn-acc">Digital signature</button>
    <button className="btn btn-acc">GUID generated by UET tag</button>
    <button className="btn btn-acc">IP address</button>
    <button className="btn btn-acc">Microsoft Click ID</button>
    <button className="btn btn-acc">Microsoft cookie</button>
    <button className="btn btn-acc">Referrer URL</button>
    <button className="btn btn-acc">Screen color depth</button>
    <button className="btn btn-acc">Screen resolution</button>
    <button className="btn btn-acc">UET ID tag</button>
    <button className="btn btn-acc">Page load tim</button>
    <button className="btn btn-acc">Publisher/URL accessed</button>
   
   
    
   
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Data about your visit and your activities on the website are generally stored for 365 days and then automatically deleted. This does not apply to information gathered within surveys and incoming feedback. However, data will be deleted in any case as soon as they are no longer needed for the processing purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
  
   <button className="btn btn-acc">Worldwide</button>

   
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>

   <button className="btn btn-acc">Microsoft Corporation</button>
 
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://privacy.microsoft.com/en-gb/privacystatement</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://privacy.microsoft.com/en-gb/privacystatement</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://account.microsoft.com/privacy/ad-settings/signedout?ru=https:%2F%2Faccount.microsoft.com%2Fprivacy%2Fad-settings</a>

   
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 1 year 25 Days</li>
      <li className="text-acc">Non-cookie storage: no</li>
    </ol>
   
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">Decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const MicrosoftAdRemarking=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a remarketing service.</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Microsoft Corporation</p>
    <p className="text-acc">One Microsoft Way, Redmond, Washington 98052, United States of America</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://aka.ms/privacyresponse</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Remarketing</button>
  

  
    
    <p className="text-gray acc-text">Technologies Used</p>
    <p className="acc-text">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
 <button className="acc-btn btn">Cookies</button>
 
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Browser language</button>
    <button className="btn btn-acc">Cookie information</button>
    <button className="btn btn-acc">Digital signature</button>
   
    <button className="btn btn-acc">IP address</button>
    <button className="btn btn-acc">Microsoft Click ID</button>
 
    <button className="btn btn-acc">Referrer URL</button>
    <button className="btn btn-acc">Screen color depth</button>
    <button className="btn btn-acc">Screen resolution</button>
    <button className="btn btn-acc">Version of UET</button>
    <button className="btn btn-acc">Page load time</button>
    <button className="btn btn-acc">Event information</button>
    <button className="btn btn-acc">Page URL</button>
   
   
    
   
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for the processing purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
  
   <button className="btn btn-acc">Worldwide</button>

   
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>

   <button className="btn btn-acc">Microsoft Corporation</button>
 
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://privacy.microsoft.com/en-gb/privacystatement</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://privacy.microsoft.com/en-us/PrivacyStatement#maincookiessimilartechnologiesmodule</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</a>

   
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 1 year 25 Days</li>
      <li className="text-acc">Non-cookie storage: no</li>
    </ol>
   
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">Decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const TwitterAd=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is an advertising service.</p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Twitter International Company</p>
    <p className="text-acc">One Cumberland Place, Fenian Street, Dublin 2, D02 AX07, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://twitter.ethicspointvp.com/custom/twitter/forms/data/form_data.asp</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Profiling</button>
    <button className="btn btn-acc">Advertisement</button>
  

  
    
    <p className="text-gray acc-text">Technologies Used</p>
    <p className="acc-text">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
 <button className="acc-btn btn">Local storage</button>
 
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Account preferences</button>
    <button className="btn btn-acc">Apps installed on the device</button>
    <button className="btn btn-acc">Search terms</button>
   
    <button className="btn btn-acc">Usage data</button>
    <button className="btn btn-acc">Browser information</button>
 
    <button className="btn btn-acc">Device information</button>
    <button className="btn btn-acc">Location information</button>
    <button className="btn btn-acc">Demographic data</button>
    <button className="btn btn-acc">Account information</button>
    <button className="btn btn-acc">IP address</button>
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for the processing purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
  
   <button className="btn btn-acc">United States of America</button>

   
 
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>

   <button className="btn btn-acc">Twitter, Inc.</button>
 
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://twitter.com/en/privacy</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://help.twitter.com/en/rules-and-policies/twitter-cookies</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://twitter.com/personalization</a>

   
   {/* <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 1 year 25 Days</li>
      <li className="text-acc">Non-cookie storage: no</li>
    </ol> */}
   
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">Decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const VeIntractive=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a conversion optimization, remarketing, and digital advertising service. </p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Ve Interactive Limited</p>
    <p className="text-acc">15-19 Bakers Row, London, EC1R 3DG, England</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">privacy@ve.com</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Conversion optimization</button>
    <button className="btn btn-acc">Digital advertising</button>
    <button className="btn btn-acc">Remarketing</button>
  

  
    
    <p className="text-gray acc-text">Technologies Used</p>
    <p className="acc-text">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
 <button className="acc-btn btn">Cookies</button>
 <button className="acc-btn btn">Web beacons</button>
 <button className="acc-btn btn">Pixel</button>
 
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Device model</button>
    <button className="btn btn-acc">Browser name</button>
    <button className="btn btn-acc">IP address</button>
   
    <button className="btn btn-acc">Browsing activity</button>
    <button className="btn btn-acc">Browser information</button>
 
    <button className="btn btn-acc">Device information</button>
    <button className="btn btn-acc">Browser version</button>
    <button className="btn btn-acc">Browser language</button>
    <button className="btn btn-acc">Pages visited</button>
    <button className="btn btn-acc">First name</button>
    <button className="btn btn-acc">Number of ads displayed</button>
    <button className="btn btn-acc">Mailing address</button>
    <button className="btn btn-acc">Gender</button>
    <button className="btn btn-acc">Products viewed or purchased</button>
    <button className="btn btn-acc">Events relating to ads served</button>
    <button className="btn btn-acc">Telephone number</button>
    <button className="btn btn-acc">Details of purchases made</button>
    <button className="btn btn-acc">Clicks</button>
    <button className="btn btn-acc">Number of children</button>
    <button className="btn btn-acc">Activities on site</button>
    <button className="btn btn-acc">Methods used to browse away from the page</button>
    <button className="btn btn-acc">Browser protocol</button>
    <button className="btn btn-acc">Behavioural data</button>
    <button className="btn btn-acc">Unique numbers assigned to device</button>
    <button className="btn btn-acc">Device brand</button>
    <button className="btn btn-acc">Scrolling</button>
    <button className="btn btn-acc">Referrer URL</button>
    <button className="btn btn-acc">Page interaction information</button>
    <button className="btn btn-acc">Mouse movements</button>
    <button className="btn btn-acc">Device operating system</button>
    <button className="btn btn-acc">Clicked advertisement</button>
    <button className="btn btn-acc">Demographic data</button>
    <button className="btn btn-acc">Duration of visit</button>
    <button className="btn btn-acc">Date and time of visit</button>
    <button className="btn btn-acc">E-Mail address</button>
    <button className="btn btn-acc">Geographic location</button>
    <button className="btn btn-acc">Date of birth</button>
    <button className="btn btn-acc">Contact information</button>
    <button className="btn btn-acc">Country</button>
    <button className="btn btn-acc">Android/Google Advertising ID</button>
    <button className="btn btn-acc">iOS identifier for advertisers</button>
    <button className="btn btn-acc">Click path</button>
  
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data are retained for up to 13 months.</li>
    </ol>
    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn acc-btn">Ve Interactive Limited</button>
    {/* <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
  
   <button className="btn btn-acc">United States of America</button> */}

   
 
   
 
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://www.ve.com/privacy-policy</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://www.ve.com/cookies-policy</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://www.ve.com/privacy-policy#opting-out
</a>

   
   {/* <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage: 1 year 25 Days</li>
      <li className="text-acc">Non-cookie storage: no</li>
    </ol> */}
   
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">Decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const Vimeo=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a service for displaying video content. </p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Vimeo LLC</p>
    <p className="text-acc">555 West 18th Street, New York, New York 10011, United States of America</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">Privacy@vimeo.com</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Displaying Videos</button>
   
  

  
    
    <p className="text-gray acc-text">Technologies Used</p>
    <p className="acc-text">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
 <button className="acc-btn btn">Cookies</button>

 
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Browser information</button>
    <button className="btn btn-acc">Browser language</button>
    <button className="btn btn-acc">Browser type</button>
   
    <button className="btn btn-acc">Cookie information</button>
    
 
    <button className="btn btn-acc">Device operating system</button>
    <button className="btn btn-acc">Information from third party sources</button>
    <button className="btn btn-acc">IP address</button>
    <button className="btn btn-acc">Pages visited</button>
    <button className="btn btn-acc">Referrer URL</button>
    <button className="btn btn-acc">Information users provide on site</button>
    <button className="btn btn-acc">Mailing address</button>
    <button className="btn btn-acc">Search queries</button>
    <button className="btn btn-acc">Geographic location</button>
    <button className="btn btn-acc">Content viewed</button>
   
  
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">United States of America</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data are retained for up to 13 months.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">United States of America</button>


    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn acc-btn">Vimeo LLC</button>
  

   
 
   
 
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://vimeo.com/privacy</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://vimeo.com/cookie_policy</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://vimeo.com/cookie_policy</a>

   
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage:2 Years</li>
      <li className="text-acc">Non-cookie storage: no</li>
    </ol>
   
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">Decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const Youtube=(
    
    <>
    <p className="text-acc text-gray">Description of Service</p>
    <p className="text-acc">This is a video player service. It can be used by user to watch, like, share, comment and upload videos.  </p>
    <p className="text-acc text-gray">Processing Company</p>
    <p className="text-acc">Google Ireland Limited</p>
    <p className="text-acc">Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland</p>
    <p className="text-acc text-gray">Data Protection Officer of Processing Company</p>
    <p className="text-acc">Below you can find the email address of the data protection officer of the processing company</p>
    <a className="text-acc">https://support.google.com/policies/contact/general_privacy_form</a>
    <p className="text-acc text-gray">Data Purposes</p>
    <p className="text-acc">This list represents the purposes of the data collection and processing.</p>
    <button className="btn btn-acc">Displaying Videos</button>
   
  

  
    
    <p className="text-gray acc-text">Technologies Used</p>
    <p className="acc-text">This list represents all technologies this service uses to collect data. Typical technologies are Cookies and Pixels that are placed in the browser.</p>
 <button className="acc-btn btn">Cookies (if Privacy-Enhanced Mode is not activated)</button>

 
   
    <p className="text-acc text-gray">Data Collected</p>
    <p className="text-acc">This list represents all (personal) data that is collected by or through the use of this service.</p>
    <button className="btn btn-acc">Device information</button>
    <button className="btn btn-acc">IP address</button>
    <button className="btn btn-acc">Referrer URL</button>
   
    <button className="btn btn-acc">Videos viewed</button>
    
 
   
    
    
    <p className="text-acc text-gray">Legal Basis</p>
    <p className="text-acc">In the following the required legal basis for the processing of data is listed.</p>
    <button className="btn btn-acc">Art. 6 para. 1 s. 1 lit. a GDPR</button>
    <p className="text-acc text-gray">Location of Processing</p>
    <p className="text-acc">This is the primary location where the collected data is being processed. If the data is also processed in other countries, you are informed separately.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">European Union</li>
    </ol>
    <p className="text-acc text-gray">Retention Period</p>
    <p className="text-acc">The retention period is the time span the collected data is saved for the processing purposes. The data needs to be deleted as soon as it is no longer needed for the stated processing purposes.</p>
    <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">The data will be deleted as soon as they are no longer needed for the processing purposes.</li>
    </ol>
    <p className="text-acc text-gray">Transfer to Third Countries</p>
    <p className="text-acc">This service may forward the collected data to a different country. Please note that this service might transfer the data to a country without the required data protection standards. If the data is transferred to the USA, there is a risk that your data can be processed by US authorities, for control and surveillance measures, possibly without legal remedies. Below you can find a list of countries to which the data is being transferred. For more information regarding safeguards please refer to the website provider’s privacy policy or contact the website provider directly.</p>
   <button className="btn btn-acc">Worldwide</button>


    <p className="text-acc text-gray">Data Recipients</p>
    <p className="text-acc">In the following the recipients of the data collected are listed.</p>
   <button className="btn acc-btn">Alphabet Inc.</button>
   <button className="btn acc-btn">Google LLC</button>
   <button className="btn acc-btn">Google Ireland Limited</button>
  

   
 
   
 
   
   <p className="text-acc text-gray">Click here to read the privacy policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/privacy?hl=en</a>
   <p className="text-acc text-gray">Click here to read the cookie policy of the data processor</p>
   <a href="" className="text-acc">https://policies.google.com/technologies/cookies?hl=en</a>
   <p className="text-acc text-gray">Click here to opt out from this processor across all domains</p>
   <a href="" className="text-acc">https://safety.google/privacy/privacy-controls/</a>

   
   <p className="text-acc text-gray">Storage Information</p>
   <p className="text-acc">Below you can see the longest potential duration for storage on a device, as set when using the cookie method of storage and if there are any other methods used.</p>
   <ol className="my-1" style={{listStyleType:'disc'}}>
      <li className="text-acc">Maximum age of cookie storage:2 Years</li>
      <li className="text-acc">Non-cookie storage: no</li>
    </ol>
   
    <p className="text-acc">History</p>
    <table width="100%" style={{border:'1px solid #fefefe',padding:'4px',boxSizing:'border-box'}}
>
  <tr>
    <th className="text-acc">Decison</th>
    <th className="text-acc">Date</th>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">07.02.2023, 12:19</td>
  </tr>
  <tr>
    <td className="text-acc">yes</td>
    <td className="text-acc">09.02.2023, 15:05</td>
  </tr>
</table>
    </>
  )
  const CopyCode=(
    <>
    <div className="row justify-content-between align-items-center">
      <p>{copiedtext}</p>
      <CopyAllOutlined onClick={copyToClipboard}/>
      {copySuccess && <p style={{ color: 'green' }}>{copySuccess}</p>}
    </div>
    </>
  )
  const items = [
    {
      header: "Marketing",
      subtitle: "These Cookies track your online activity to help advertisers deliver  more relavant advertising or to limit how many times you see an ad. these cookies can share that information with other organizations or advertiser. these are persitent cookies and almost always of third-party provenence ",
      content: [
        "Affiliate Future",
        "Amazon Web Services",
        "Click Dimensions",
        "Facebook Pixel",
        "Google AdServices",
        "Google Ads",
        "Hotjar",
        "Microsoft Advertising",
        "Microsoft Advertising Remarketing",
        "Twitter Advertising",
        "Ve interactive",
      ],
    },
    {
      header: "Functional",
      subtitle: "these cookies allow a website to remember choices you have made in the past like what language you prefer,what region you would like weather reports for, or what your username and password are so you can automatically log in",
      content: [
        "Click 4 Assistance",
        "Fontawesome",
        "Google Translate",
        "Vimeo",
        "YouTube Video",
      ],
    },
    {
      header: "Functional",
      subtitle: "these cookies allow a website to remember choices you have made in the past like what language you prefer,what region you would like weather reports for, or what your username and password are so you can automatically log in",
      content: [
        "Click 4 Assistance",
        "Fontawesome",
        "Google Translate",
        "Vimeo",
        "YouTube Video",
      ],
    },
    {
      header: "Essantial",
      subtitle: "These technologies are required to activate the core functionalty of the website ",
      content: [
        "ASP.NET",
        "Google Maps",
        "Google Tag Manager",
        "Microsoft Azure",
        "Q-Park Cookies",
        "Sitecore",
        "Usercentrics Consent Management Platform",
      ],
    },
    {
      header: "Statistics",
      subtitle: "These cookies collect information about how you use a website, like which pages you visited and when which  links you clicked on. None of this information can be used to identify you. it is all aggregated and therfore anonymized.their sole purpose is to improve website functions. This Icludes cookies from third party analytics services as long as the cookies are for the exclusive use of the owner of the website visted. ",
      content: [
        "Google Analytics",
        "Google Analytics Statistics",
        "Google Syndication",
        "WalkMe Solutions",
            ],
    },
  ];
 
  
 
  







  const _modelView = () => {
    return (
      
      <Modal
        centered
        width={625}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" style={{background:'#efeeee',width:'31%'}}  onClick={handleCancel}>
            Save Services
          </Button>,
          <Button key="submit" style={{background:'black',color:'white',width:'31%'}} loading={loading} onClick={handleOk}>
            Accept And Close
          </Button>,
          <Button
            key="link"
            href=""
            style={{background:'#7dd2c9',color:'white',width:'31%'}}
            loading={loading}
            onClick={handleOk}
            
          >
            Accept And Close
          </Button>,
        ]}
      >
        <div>
          <div>
            <img alt="" src={images.logohome} style={{ width: "200px" }} />
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#000",
                  marginTop: "20px",
                  marginBottom: 0,
                }}
              >
                Privacy Settings
              </p>
              <p
                style={{
                  fontWeight: 700,
                }}
              >
                This tool helps you to select and deactivate various tags /
                trackers / analytic tools used on this website. More info see
                Privacy Statement
              </p>
            </div>
            <div>
              <Tabs defaultActiveKey="1" centered>
                <Tabs.TabPane tab="Categories" className="modal-scroll" key="1" style={{height:'379px',overflowY:'auto'}}>
                <CustomAccordion items={items} />
                </Tabs.TabPane  >
                <Tabs.TabPane tab="Services" className="modal-scroll" key="2"  style={{height:'379px',overflowY:'auto'}}>
               
                <DynamicAccordion header="ASP.NET" subtitle="Essantial" iconsToggle={<Toggle checked="true"/>} content={text1} />
                <DynamicAccordion header="Azure Application Insights" subtitle="Essantial" iconsToggle={<Toggle checked="true"/>}  content={text2} />
                <DynamicAccordion header="Google Analytics" subtitle="Statistics" iconsToggle={<Toggle checked="true"/>}  content={text3} />
                <DynamicAccordion header="Google Analytics Statistics" subtitle="Statistics: 1 Subservice" iconsToggle={<Toggle checked="true"/>}  content={text4} />
                <DynamicAccordion header="Google Maps" subtitle="Essantial" iconsToggle={<Toggle checked="true"/>}  content={text5} />
                <DynamicAccordion header="Google Syndication" subtitle="Statistics" iconsToggle={<Toggle checked="true"/>}  content={text6} />
                <DynamicAccordion header="Google Tag Manager" subtitle="Essential" iconsToggle={<Toggle checked="true"/>}  content={text7} />
                <DynamicAccordion header="Microsoft Azure" subtitle="Essential" iconsToggle={<Toggle checked="true"/>}  content={text8} />
                <DynamicAccordion header="TPH Cookies" subtitle="Essential" iconsToggle={<Toggle checked="true"/>}  content={text9} />
                <DynamicAccordion header="Sitecore" subtitle="Essential" iconsToggle={<Toggle checked="true"/>}  content={text10} />
                <DynamicAccordion header="Usercentrics Consent Management Platform" iconsToggle={<Toggle checked="true"/>}  subtitle="Essential" content={text11} />
                <DynamicAccordion header="WalkMe Solutions" subtitle="Statistics" iconsToggle={<Toggle checked="true"/>}  content={text12} />
                <DynamicAccordion header="Affiliate Future" subtitle="Marketing" content={text13} />
                <DynamicAccordion header="Amazon Web Services" subtitle="Marketing" content={text14} />
                <DynamicAccordion header="Click 4 Assistance" subtitle="Functional" content={text15} />
                <DynamicAccordion header="Click Dimensions" subtitle="Marketing" content={text16} />
                <DynamicAccordion header="AFacebook Pixel" subtitle="Marketing 1Subservice" content={text17} />
                <DynamicAccordion header="Fontawesome" subtitle="Functional" content={text18} />
                <DynamicAccordion header="Google Ads" subtitle="Marketing 1Subservice" content={text19} />
                <DynamicAccordion header="Google AdServices" subtitle="Marketing" content={text20} />
                <DynamicAccordion header="Google Analytics Advertising" subtitle="Marketing" content={text21} />
                <DynamicAccordion header=" Translate" subtitle="Functional" content={Hotjar} />
                <DynamicAccordion header="Hotjar" subtitle="Marketing" content={Hotjar} />
                <DynamicAccordion header="Microsoft Advertising" subtitle="Marketing" content={MicrosoftAd} />
                <DynamicAccordion header="Microsoft Advertising Remarketing" subtitle="Marketing" content={MicrosoftAdRemarking} />
                <DynamicAccordion header="Twitter Advertising" subtitle="Marketing" content={TwitterAd} />
                <DynamicAccordion header="Ve interactive" subtitle="Marketing" content={VeIntractive} />
                <DynamicAccordion header="Vimeo" subtitle="Marketing" content={Vimeo} />
                <DynamicAccordion header="YouTube Video" subtitle="Marketing" content={Youtube} />
                <DynamicAccordion header="ID to request consent data" subtitle="Marketing" content={CopyCode} />
                  
                </Tabs.TabPane>
                
              </Tabs>
            </div>
          </div>
        </div>
      </Modal>
     
    );
  };

  return (
    <div>
      <a
        className="floating-logo"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <img
          src={images.floatLogo}
          alt="logo"
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
        />
      </a>
      {_modelView()}
     
    </div>
  );
};
export default Icon1;
