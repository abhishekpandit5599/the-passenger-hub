import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import FooterMain from "../../common/footer";
import Icon1 from "../../common/icon";
import "../../css/trainticekt.css"
import { Link } from "react-router-dom";

// import ButtonCard from "../../common/ButtonCard";


const TwoForOne = (props) => {
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
                    <h3>Two For One</h3>
                </div>
            </div>
            <div className="cheap-train-tickets ">
                <div className="container">
                <div className="col">
                   
                    <p className="my-2">Whether you are heading out for a bite to eat, taking the family to the zoo or soaking up some of the finest views London has to offer, you can take advantage of 2FOR1 on over 150 locations across London when you travel by train.</p>
                    
                    <p className="mb-2">Claiming your 2FOR1 offer is easy. Simply choose your attraction, download your voucher, travel by train and present the voucher and train tickets together when buying your attraction ticket on the day.</p>
                    <p className="mb-2">With over 150 days out to choose from, deciding what you want to do is the only challenge but we have listed some of our favourite sights and attractions below to give you a helping hand.</p>
                   
                    </div>

                   
                </div>
            </div>
            <FooterMain />
            <Icon1 handleClick={handlewClick} />
        </div>
    );
};
export default TwoForOne;
