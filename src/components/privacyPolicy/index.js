import React, { useState, useEffect, useLayoutEffect } from "react";
import { Layout, Menu } from "antd";
import images from "../../themes/appImage";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
import Icon1 from "../../common/icon";
const { Option } = Select;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const PrivacyPolicy = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Value1, setValue1] = useState(0);

  const handleChange = (event, newValue) => {
    setValue1(newValue);
  };

  const [value, setValue] = React.useState(1);

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
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div className="mobileabout text-item">
        <div className="container-fluid spacert">
          <h3>{appConstants.privacy}</h3>
        </div>
      </div>
      <div className="press">
        <div className="container-fluid">
          {/* <h2 className="line">{appConstants.privacy}</h2> */}
          {/* <div className="text-line" style={{ paddingBottom: "20px" }}>
            <img src={images.border1} style={{ width: "400px" }} />
          </div> */}
          <div className="">
            <div class="line-text_text investors">
              
            <Box sx={{ width: '100%' }}>
      <Box sx={{ margin:"0px",padding:'0px'}}>
        <Tabs value={Value1} onChange={handleChange} aria-label="basic tabs example" style={{width:'100%',justifyContent:'center',margin:"0px",padding:'0px'}}>
          <Tab label="Genral Privacy Notice" {...a11yProps(0)}  style={{width:"50%",}} />
          <Tab label="Recruitment Privacy Policy" {...a11yProps(1)}  style={{width:"50%",}} />
          
        </Tabs>
      </Box>
      <TabPanel value={Value1} index={0}>
       <h4 className="my-2"><strong>Introduction</strong></h4>
       <p className="my-2">In this privacy notice, when we refer to “Trainline”, “we”, “us” or “our” we mean Trainline plc and its subsidiary companies, and when we refer to “you” or “your”, we mean visitors to this website.</p>
       <p className="my-2">Trainline respects your privacy and is committed to protecting your personal data. This privacy notice will inform you as to how we process your personal data when you visit our website. This privacy notice will also tell you about your rights and how the law protects you.</p>
       <p className="my-2">It is important that you read this privacy notice together with any other privacy notice or fair processing notices we may provide on specific occasions.</p>
       <p className="my-2">If you have any questions about this privacy notice, including any requests to exercise your legal rights, please contact us.</p>
       <p className="my-2">Please note that Trainline processes the personal data of its customers in different ways to those contemplated by this Site and, as such, the consumer website (https://www.thetrainline.com) has its own privacy notice. This can be accessed here.</p>
       <ol className="my-2">
        <li className="my-1">The data we collect about you</li>
        <li className="my-1">How is your personal data collected</li>
        <li className="my-1">How we use your personal data</li>
        <li className="my-1">Disclosures of your personal data</li>
        <li className="my-1">International transfers</li>
        <li className="my-1">Data security</li>
        <li className="my-1">Data retention</li>
        <li className="my-1">Your legal rights</li>
        <li className="my-1">Contacting us</li>
        
       </ol>
       <h4 className="my-2"><strong>1.  The data we collect about you</strong></h4>
       <p className="my-2">Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you when you use our site or interact with us; which we have grouped together as follows:</p>
       <ul className="my-2">
        <li className="my-1"><strong>Identity Data</strong> includes first name and last name.</li>
        <li className="my-1"><strong>Contact Data</strong>  includes company name and email address.</li>
        <li className="my-1"><strong>Technical Data</strong>includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
        <li className="my-1"><strong>Usage Data</strong> includes information about how you use our website.</li>
        <li className="my-1"><strong>Communications Data</strong>  includes all communications we have with you whether by email, post, phone or otherwise.</li>
       
       </ul>
       <p className="my-2">We may also process Aggregated Data such as statistical data EG number of visitors to our site over a defined period.</p>
       <h4 className="my-2"><strong>2.  How is your personal data collected?</strong></h4>
       <p className="my-2">We use different methods to collect data from and about you including through:</p>
       <p className="my-2"> <strong>Direct interactions.</strong> You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email or otherwise.</p>
       <ol className="my-2" style={{listStyleType:"circle"}}>
        <li className="my-1">Automated technologies or interactions. As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies and other similar technologies. Please see our cookie declaration for further details.</li>
        <li className="my-1">Third parties or publicly available sources. We may receive personal data about you from various third parties and public sources as set out below.  
        <ol className="my-1" style={{listStyleType:"disc"}}>
          <li className="my-1">Technical Data from the following parties:</li>
          
            <ol className="my-1" style={{listStyleType:"square"}}>
            <li className="my-1">Analytics, storage, tools and media providers based in and outside the EU;</li>
            <li className="my-1">IP tracking service providers based within the EU;</li>
            <li className="my-1">automated quality control tools based within the EU;</li>
            <li className="my-1">automated security and compliance tools based outside the EU;</li>
            <li className="my-1">social media and media networks such as Twitter, LinkedIn, Instagram, YouTube and Vimeo based outside the EU; and</li>
            <li className="my-1">email distribution and survey providers based outside the EU;</li>
            </ol>
        </ol>
        </li>
       </ol>
       <h4 className="my-2"><strong>3.  How we use your personal data</strong></h4>
       <p className="my-2">We will only process personal data where we have a genuine need to do so and in line with our obligations under data protection laws. Most commonly, we will use your personal data in the following circumstances:</p>
       <ol className="my-2" style={{listStyleType:'disc'}}>
        <li className="my-1">We will only process personal data where we have a genuine need to do so and in line with our obligations under data protection laws. Most commonly, we will use your personal data in the following circumstances:</li>
        <li className="my-1">Where it is necessary for our legitimate interests (or your legitimate interests or those of a third party).</li>
        <li className="my-1">With your consent.</li>
        <li className="my-1">Where we need to comply with a legal or regulatory obligation.</li>
       
       </ol>
       <h5 className="my-2"><strong>Purposes for which we will use your personal data</strong></h5>
       <p className="my-2">Note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please contact us if you need details about the specific legal ground we are relying on to process your personal data.</p>
       <h5 className="my-2"><strong>1. To manage our relationship with you</strong></h5>
       <p className="my-1">This includes:</p>
       <ol style={{listStyleType:'alphabet'}}>
        <li className="my-1">(a) Notifying you about changes to our terms or privacy notice</li>
        <li className="my-1">(b) Asking you to leave a review or take a survey</li>
        <li className="my-1">(c) Answering any queries you may have</li>
       </ol>
       <p className="my-1">Type of data</p>
       <ol style={{listStyleType:'alphabet'}}>
        <li className="my-1">(a) Identity</li>
        <li className="my-1">(b) Contact</li>
        <li className="my-1">(c) Profile</li>
        <li className="my-1">(d) Communications</li>
       </ol>
       <h5 className="my-2"><strong>3. To use data analytics to improve our website, products/services, marketing, customer relationships and experiences</strong></h5>
       <p className="my-1">Type of data:</p>
       <ol style={{listStyleType:'alphabet'}}>
        <li className="my-1">(a) Identity</li>
        <li className="my-1">(b) Contact</li>
        <li className="my-1">(c) Technical</li>
       </ol>
       <h5 className="my-2"><strong>4. To provide news/updates via an automated email alert service</strong></h5>
       <p className="my-1">Type of data</p>
       <ol style={{listStyleType:'alphabet'}}>
        <li className="my-1">(a) Identity</li>
        <li className="my-1">(b) Contact</li>
          </ol>
          <h5 className="my-2"><strong>Opting out of communications</strong></h5>
          <p className="my-2">You can ask us to stop sending you messages at any time by contacting us.</p>
          <h5 className="my-2"><strong>Cookies</strong></h5>
          <p className="my-2">Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site about aspects of your visit. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org. For more information about the cookies we use, please see our cookie declaration.</p>
          <h5 className="my-2"><strong>Change of purpose</strong></h5>
          <p className="my-2">We will only use your personal data for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.</p>
          <p className="my-2">Please note that we may process your personal data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.</p>
          <h4 className="my-2"><strong>4.  Disclosures of your personal data</strong></h4>
          <p className="my-2">We may have to share your personal data with the parties set out below for the purposes set out above.</p>
          <ol className="my-2" style={{listStyleType:'disc'}}>
            <li className="my-1">Internal Third Parties</li>
            <li className="my-1">External Third Parties:  Digital service providers acting as processors, who provide a number of services, including but restricted to data feeds, hosting, SSL, data analysis, CRM, video streaming, social media and sharing services</li>
            <li className="my-1">Professional advisers including lawyers, bankers, auditors and insurers who provide consultancy, banking, legal, insurance and accounting services</li>
            <li className="my-1">HM Revenue & Customs, regulators and other authorities acting as processors based in the United Kingdom who require reporting of processing activities in certain circumstances</li>
            <li className="my-1">Third parties to whom we may choose to sell, transfer, or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy notice.</li>
           
          </ol>
          <p className="my-2">Third parties to whom we may choose to sell, transfer, or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy notice.</p>
    <h4 className="my-2"><strong>5.  International transfers</strong></h4>
    <p className="my-2">Wherever possible we do not transfer your personal data outside the European Economic Area (EEA).</p>
    <p className="my-2">Some of our external third parties are based outside the European Economic Area (EEA) so their processing of your personal data may sometimes involve a transfer of data outside the EEA.</p>
    <p className="my-2">Whenever we transfer your personal data out of the EEA, we ensure an appropriate  level of protection is afforded to it by ensuring at least one of the following safeguards is implemented:</p>
    <ol className="my-2" style={{listStyleType:'disc'}}>
            <li className="my-1">We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection. For further details, see European Commission: Adequacy of the protection of personal data in non-EU countries.</li>
            <li className="my-1">We rely on standard contractual clauses as approved by the EU Commission.</li>
           
          </ol>
          <p className="my-2">Please contact us if you would like further information on the specific mechanism used by us when transferring your personal data out of the EEA (and a copy of those safeguards).</p>
          <h4 className="my-2"><strong>6.   Data security</strong></h4>
          <p className="my-2">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and are subject to a duty of confidentiality.</p>
     <h4 className="my-2"><strong>7.  Data retention</strong></h4>
     <h5 className="my-2">How long will you use my personal data for?</h5>
     <p className="my-2">We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
     <p className="my-2">To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.</p>
     <p className="my-2">In some circumstances you can ask us to delete your data.  In some circumstances we may anonymise your personal data (so that it can no longer be associated with you) for research or statistical purposes in which case we may use this information indefinitely without further notice to you.</p>
     <h4 className="my-2"><strong>8.  Your legal rights</strong></h4>
     <p className="my-2">Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
     <ol className="my-2" style={{listStyleType:'disc'}}>
      <li className="my-1">Request access to your personal data.</li>
      <li className="my-1">Request correction of your personal data.</li>
      <li className="my-1">Request erasure of your personal data.</li>
      <li className="my-1">Object to processing of your personal data</li>
      <li className="my-1">Request restriction of processing your personal data.</li>
      <li className="my-1">Request transfer of your personal data.</li>
      <li className="my-1">Right to withdraw consent.</li>
    
     </ol>
     <p className="my-2">If you wish to exercise any of the rights set out above, please contact us.</p>
     <p className="my-2"><strong>No fee usually required</strong></p>
     <p className="my-2">You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee where we are permitted to do so by law. </p>
     <p className="my-2"><strong>What we may need from you</strong></p>
     <p className="my-2">We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a necessary measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request, in order to speed up our response.</p>
     <p className="my-2"><strong>Time limit to respond</strong></p>
     <p className="my-2">We try to respond to all legitimate requests within one month, as prescribed by law. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated. </p>
     <h4 className="my-2"><strong>9. Contacting us</strong></h4>
     <p className="my-2">If you’ve got any questions that haven’t been covered, please contact our Data Protection Officer.  Email us at investorprivacy@thetrainline.com, or write to us at Data Protection Officer, PO Box 23972, Edinburgh, EH3 5DA.</p>
     <p className="my-2">You have the right to make a complaint at any time to the relevant supervisory authority for data protection matters. If you are based in the UK, this is the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk). If you are based within the EU, you can find out more here. We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance.</p>
      <p className="my-2"><strong>Changes to the privacy notice and your duty to inform us of changes</strong></p>
      <p className="my-2">We will amend this policy from time to time to comply with applicable laws and regulations or to meet our changing business requirements. You are encouraged to periodically review this page for the latest information on our privacy practices and amendments to this policy.</p>
      </TabPanel>

      <TabPanel value={Value1} index={1}>
       <h4 className="my-2"><strong>Introduction</strong> </h4>
       <p className="my-2">Trainline is committed to protecting the privacy and security of your personal information.</p>
       <p className="my-2">This Privacy Policy describes how we collect and use personal information about you during the recruitment process (whether it is directly applying for a job on Trainline website, or through a recruitment agency or online job portal).</p>
       <p className="my-2">Your personal information is collected and processed by the core Trainline group of companies:</p>
       <ol className="my-2" style={{listStyleType:'disc'}}>
        <li className="my-1">Trainline.com Limited</li>
        <li className="my-1">Trainline SAS</li>
       </ol>
       <p className="my-2">We will refer to the two companies together as "we", "us" or "Trainline" to be clear as joint Data Controllers. It also covers how you can exercise your rights.</p>
       <h4 className="my-2"><strong>The types of personal information we may collect and hold about you</strong></h4>
       <p className="my-2">Personal data means any information about an individual from which that person can be identified, directly or indirectly. The categories of personal data we may collect and hold about you include:</p>
       <ol className="my-2"  style={{listStyleType:'disc'}}>
        <li className="my-1">Name, title, address, telephone number, and personal email address.</li>
        <li className="my-1">Date of birth, gender, and nationality.</li>
        <li className="my-1">CV's, cover letters or any other supplementary document included as part of the application process.</li>
        <li className="my-1">Information about your right to work.</li>
        <li className="my-1">Information regarding your work history, including qualifications, education, experience, or employment references.</li>
       
       </ol>
       <h4 className="my-2"><strong>We may also collect, store, and use the following special categories of sensitive personal data</strong></h4>
       <p className="my-2">Trainline may also collect, store, and use the following "special categories" of sensitive Personal Data (sometimes known as 'Special Category Data'), this could include:</p>
       <p className="my-2"> <strong>Disability info:</strong> Processing is conducted based on consent.</p>
       <ol className="my-2" style={{listStyleType:'disc'}}>
        <li className="my-1">We need this info in order to make reasonable adjustments as part of the recruitment process, and to comply with the relevant Equality and Health and Safety Laws. It is voluntary info that you do not have to give if you would rather not.</li>
       </ol>
       <p className="my-2"> <strong>Criminal convictions & offences info:</strong> Processing is necessary for the performance of employment contract.</p>
       <ol className="my-2" style={{listStyleType:'disc'}}>
        <li className="my-1">If you are applying for a job in our London, Edinburgh, or Paris office (where the nature of the job requires this), we will need info about your criminal convictions and offences to check your criminal record.</li>
       </ol>
       <p className="my-2"> <strong>Diversity and Inclusion:</strong> Processing is conducted based on explicit consent.</p>
       <ol className="my-2" style={{listStyleType:'disc'}}>
        <li className="my-1">To ensure we are reaching a diverse pool of candidates in our London & Edinburgh office, on a voluntary and anonymised basis we will ask candidates about their ethnic origin, sexual orientation and health conditions or impairments to ensure meaningful equal opportunity monitoring and reporting.</li>
        <li className="my-1">Candidate's responses are automatically anonymised in the report and are not linked to their record or shared internally. Data is only accessed via the report and held on an anonymised basis.</li>
       </ol>
       <p className="my-2"> <strong>Financial background checks info:</strong> Processing is necessary for the performance of employment contract.</p>
       <ol className="my-2" style={{listStyleType:'disc'}}>
        <li className="my-1">For roles in our London and Edinburgh office (where applicable and necessary) we will conduct a financial background check. This may involve details relating to active criminal offences and information about your credit score.</li>
        <li className="my-1">We work with third-party service providers (listed below) to check this info, and they process your data as Data Controllers in line with their own privacy policies.</li>
       </ol>
       <p className="my-2"><strong>Experian</strong></p>
       <p className="my-2">This info is processed, where necessary, to help us decide if you are suitable for employment as part of our obligations as an employer. We only work with trusted third parties who carry out these checks, only when it is necessary and relevant to your role. If you are not happy to give us this info, we may not be able to proceed with your offer of employment. Find out more about how Experian process your data.</p>
     <h5 className="my-2"><strong>Information you give us directly</strong></h5>
     <p className="my-2">You give us your personal data, for different reasons at different stages of the application process. To make things simple, we have split the key processing areas into sections below.</p>
     <p className="my-2"><strong>Application and Provisional offer stage</strong></p>
     <p className="my-2">We process personal data that relates to you so that we can -</p>
     <ol className="my-2" style={{listStyleType:'disc'}}>
      <li className="my-1">Confirm your identity and your right to work.</li>
      <li className="my-1">Understand your work history.</li>
      <li className="my-1">Make sure you have the necessary skills to successfully perform the role we have advertised.</li>
     </ol>
     <p className="my-2">We need the above info to be able to enter into a contract for employment.</p>
     <h5 className="my-2"><strong>Information provided indirectly</strong></h5>
     <p className="my-2">If we have given you a provisional offer, we will need to check your references to validate your last three years of employment. This means, you will need to provide us the contact details for referees so we can confirm your work history and skill set.</p>
     <p className="my-2">It is in our legitimate interest to verify your experience. If you choose not to give us the contact details for any references, we will not be able to continue with your application</p>
     <p className="my-2">We may also use publicly available website like Linkedln to identify and contact potential candidates for future roles and to also to post job positions.</p>
     <h5 className="my-2"><strong>Keeping your data</strong></h5>
     <p className="my-2">If you are a successful candidate, your personal info will be held in your employee file, in line with the Privacy Policy set out in our Staff Handbook which will be provided to you once you receive an offer of employment.</p>
     <p className="my-2">If you are an unsuccessful candidate, we may still hold your info in our talent pool in case of any future vacancy or to add into any further applications you may make for new positions with us. This info is hold in line with our legitimate interest.</p>
     <h5 className="my-2"><strong>How long do we retain your data?</strong></h5>
     <p className="my-2">We will hold your data for a maximum of two years from the date your application was submitted.</p>
     <p className="my-2">If you do not want us not to keep your data on file, you can ask for your data to be deleted. Please contact us at privacyguery@thetrainline.com to request for your data to be deleted.</p>
     <p className="my-2">We may retain pseudonymous data and where possible, anonymised statistical information to help inform our recruitment activities.</p>
     <h5 className="my-2"><strong>Sharing of your information</strong></h5>
     <p className="my-2">Your information will be shared internally for the purposes of the recruitment exercise. This includes members of Trainline People Team (HR), recruitment agencies, relevant hiring managers and interviewers involved in the recruitment process.</p>
     <p className="my-2">We may share your info within the Trainline Group of Companies and with third-party service providers, for the purpose of collecting, processing, and validating your info to support your application. These third parties will only have access to the relevant details they need and will not use your info for any other reason. Of course, they will also be required to follow data protection laws, including taking adequate steps to secure and protect your personal info. If any of these third-party service providers are based outside the EEA (European Economic Area), we will make sure that suitable safeguards are in place.</p>
     <h5 className="my-2"><strong>Security</strong></h5>
     <p className="my-2">We take the security of your data very seriously. We have comprehensive internal policies and controls in place to prevent your data being lost, accidentally destroyed, misused or disclosed. These controls also ensure your data is not accessed, except by Trainline employees or trusted third parties, in the performance of their duties.</p>
     <p className="my-2">All third parties engaged to process personal data on our behalf, do so on the basis of strict written instructions and are contractually bound to maintain appropriate technical and organisational measures to protect your data. We have put in place robust procedures to deal with any suspected data security breach and will notify you, and any applicable regulator, of a suspected breach where we are legally required to do so.</p>
     <h5 className="my-2"><strong>Your Rights</strong></h5>
     <p className="my-2">You have the following rights when it comes to our handling of your data.</p>
     <p className="my-2"><strong>Right of access</strong></p>
     <p className="my-2">You have the right to request a copy of the personal data we hold. Find out more about right of access</p>
     <p className="my-2"><strong>Right of rectification</strong></p>
     <p className="my-2">You have the right to request a copy of the personal data we hold. Find out more about right of access</p>
     <p className="my-2"><strong>Right of erasure</strong></p>
     <p className="my-2">You have the right to request that we erase all personal data about you (please note that we may be able to reject or restrict the request in some circumstances, depending on the information we hold and our lawful reason to keep it). Find out more about right of erasure</p>
     <p className="my-2"><strong>Right to restrict processing</strong></p>
     <p className="my-2">In some situations, you have the right to request that we do not use the personal data you have provided (e.g. if you believe it to be inaccurate). Find out more about right to restrict processing</p>
     <p className="my-2"><strong>Right to data portability</strong></p>
     <p className="my-2">This applies to information you give us. You can ask us to transfer this information to another data controller in an easy-to-read manner. Find out more about right to data portability</p>
     <p className="my-2">Please note, we may require proof of ID before we can deal with your request.</p>
     <p className="my-2"><strong>Right to object</strong></p>
     <p className="my-2">You have the right to object to certain processing of your personal data (unless we have overriding compelling grounds to continue processing). Find out more</p>
     <p className="my-2"><strong>How to contact us</strong></p>
     <p className="my-2">If you would like to contact us about this recruitment process, please email our People Team (HR) at people@thetrainline.com.</p>
     <p className="my-2">If  you  would  like  to  exercise  your  rights  under  GDPR,  please  contact privacyguery@thetrainline.com or write to us at Data Protection Officer: 120 Holborn, London EC1N 2TD</p>
     <p className="my-2"><strong>How to contact the regulator</strong></p>
     <p className="my-2">If you believe that the data controller has not complied with your data protection rights, you can complain to the Information Commissioner Office (ICO)</p>
     <p className="my-2">If you are applying for a job in our Paris office, your data will be looked after by Trainline
S.A.S and any complaints need to go to Commission Nationale de L'informatigue et des Libertes (CNIL).</p>
     <p className="my-4">Version 1.3 / July 2021</p>

      </TabPanel>
    
    </Box>
            </div>
          </div>
        </div>
      </div>
      <Icon1 handleClick={handlewClick} />
      <FooterMain />
    </div>
  );
};
export default PrivacyPolicy;
