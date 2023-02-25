
import React, {  useEffect } from "react";


import { Link } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";

import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";

import CustomCard from "../../common/CustomCard";


const OurStrategy = (props) => {
 
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
          <h3>Our Strategy</h3>
        </div>
      </div>
      <div className="press">
        <div className="container">
            <h4 className="line"><strong>To achieve our mission to make rail and coach travel easier for customers in all our markets, we invest behind four strategic priorities for long-term growth: enhancing the customer experience, building demand, increasing customer lifetime value, and growing Trainline Solutions. </strong></h4>
        </div>
        <div className="py-5">
        <div className="container-fluid p-2 my-4">
    <div className="row px-md-5">
    <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img src="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/9516/5114/7250/strategy-1-1440x1080.jpg" style={{width:'95%',height:'auto'}} alt="" />
    </div>
    <div className="col-md-6 px-3">
        <h3 className="mb-3 line"><strong> Enhance the customer experience</strong></h3>
        <p>Providing a smart, intuitive and seamless experience for our customers is at the heart of our business – we are continually improving and optimising our user experience on our mobile app and web interface, removing friction for customers while offering them access to unrivalled value and the widest choice. <br /><br />

Through customer insights, research and data, we invest in designing features that enhance the journeys of our customers at every stage, from planning and booking through to post sales.<br /><br />


We have created a platform that consolidates rail and coach inventory for carriers across our European markets, providing one convenient online experience for customers.

We remain committed to delivering the best possible user experience through a pipeline of new, innovative products and features, for deployment to all our customers globally.

</p>
    </div>
   
    </div>
</div>

<div className="container-fluid p-2 my-4">
    <div className="row px-md-5">
    <div className="col-md-6 px-3">
        <h3 className="mb-3 line"><strong> Build demand</strong></h3>
        <p>Our key focus is to create the best possible product market fit in each market and strengthen demand by deploying our marketing playbook. <br /><br />

To date, we have built a strong and highly-rated app experience and a strong brand, notably in the UK. Our addressable customer base remains large and the headroom for Trainline to grow across our core markets remains significant.<br /><br />

We continue to deploy our marketing playbook in order to drive customer acquisition encouraging more customers to choose more environmentally sustainable modes of transport.</p>
    </div>
    <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img src="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/6316/5114/7252/strategy-2-1440x1080.jpg" style={{width:'95%',height:'auto'}} alt="" />
    </div>
    </div>
</div>
<div className="container-fluid p-2 my-4">
    <div className="row px-md-5">
    <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img src="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/9016/5366/3788/strategy-3-1440x1080.jpg" style={{width:'95%',height:'auto'}} alt="" />
    </div>
    <div className="col-md-6 px-3">
        <h3 className="mb-3 line"><strong>Increase customer lifetime value</strong></h3>
        <p>Increasing customer lifetime value means for us, our customers use us more frequently for more of their travel needs – be it commuting, shopping trips, getting to university, business trips, family days out, buying a railcard or international travel. <br /><br />

Through our enhanced product offering and broader marketing, we are significantly increasing our ability to help people make these everyday travel choices. <br /><br />

While helping to drive faster growth, increasing customer lifetime value is also improving our customer economics, allowing us in turn to invest more in customer acquisition.</p>
    </div>
   
    </div>
</div>
<div className="container-fluid p-2 my-4">
    <div className="row px-md-5">
    <div className="col-md-6 px-3">
        <h3 className="mb-3 line"><strong> Grow Trainline Solutions</strong></h3>
        <p>Trainline Solutions combines our  <Link>Platform One technology</Link>  with our Trainline Partner Solutions business. <br /><br />

Trainline Partner Solutions is playing a key role in providing reach and scale to rail operators. Trainline Partner Solutions has primarily focused on opportunities in the UK to date, but we are now starting to breakthrough into European markets with our retailing solutions for carriers as well as distribution capabilities for travel sellers. <br /><br />


Our solutions for Distribution, Carrier IT and Businesses offer further and significant growth headroom for Trainline. We remain focused on increasing demand from our existing accounts and winning new accounts in all three areas.</p>
    </div>
    <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img src="https://trn-13455-s3.s3.eu-west-2.amazonaws.com/media/4416/5366/3810/strategy-4-1440x1080.jpg" style={{width:'95%',height:'auto'}} alt="" />
    </div>
    </div>
</div>
        </div>
      
      </div>
      
      <FooterMain />
    </div>
  );
};
export default OurStrategy;
