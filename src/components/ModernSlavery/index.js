import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { Button } from 'antd';
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import FooterMain from "../../common/footer";
import Icon1 from "../../common/icon";
import "../../css/trainticekt.css"
import DownloadButton from "../../common/DownloadButton";


const ModernSlavery= (props) => {
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
          <h3>ModernSlavery</h3>
        </div>
      </div>
      <div className="press p-5">
        <div className="container-fluid ">
         <h4 className="my-3"><strong>This statement is made by Trainline in accordance with the requirements under section 54 of the Modern Slavery Act 2015 (the “Act”).</strong></h4>
        <p className="my-2"><strong>It sets out how we, during the financial year ending 28 February 2022, continued our efforts to ensure that no slavery or human trafficking takes place in our supply chain or any other part of our business.</strong></p>
      <div className="latest-statement py-4">
<br /> <DownloadButton filePath="../../images/FY_21_Modern_Slavery_Statement.pdf" BtnText="Modern Slavery Act"/>
      </div>
        </div>
      </div>
      <FooterMain />
      <Icon1 handleClick={handlewClick} />
    </div>
  );
};
export default ModernSlavery;
