import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import FooterMain from "../../common/footer";
import Icon1 from "../../common/icon";
import "../../css/trainticekt.css"

// import ButtonCard from "../../common/ButtonCard";


const TPHRewards = (props) => {
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
                    <h3>The Passenger Hub Rewards</h3>
                </div>
            </div>
            <div className="cheap-train-tickets ">
                <div className="container">

                    <div className="row my-2">
                       <p className="my-3">Everyone’s looking for a little more these days – and we’re here to help. SWR Rewards is our new rewards scheme, bringing you exclusive offers and deals. Whether you are travelling for pleasure or for work you can grab one of our Rewards every time you travel.</p>
                       <p className="my-3">Sourced by us and local to you, you’ll find incredible days out, delicious food and drink and even more, thanks to our selected partners. Whether you’re heading to the capital for work or a night at the theatre, or just exploring the sights for a long weekend in Dorset, there’s an offer for everyone.</p>
                       <p className="my-3">With more than 150 rewards available, there's bound to be something to make a great day out even greater. Stay a bit later for dinner after a day out in Salisbury with 10% off of your bill at Tinga, or skip the last train home and stay the night in Weymouth with £10 off a night's stay and an upgrade to a sea view room.</p>
                       <p className="my-3">Maybe retail therapy is in order after a long lockdown - save an extra 10% on your shopping at Gunwharf Quays in Portsmouth, and finish it off by saving £50 on your room at Becketts. Or perhaps you're after a night out after work with colleagues or friends? Try 20% off at Sophie's Steak House or Friday Night at the Comedy Club ease the return to the office.</p>
                    </div>
                    <div className="row">
                    <h3 className="my-3">Getting your rewards offers</h3>
                    <p className="my-2">Accessing SWR Rewards is easy! You can be saving money and enjoying even greater days out through the link below</p>
                    <button className="btn  my-2" style={{backgorund:"#95dfac",}}>Choose Your Reward</button>
                    </div>
                    <div className="my-3">
                        <h4 className="my-3">Frequently asked questions</h4>
                        <h3 className="my-1">What is SWR Rewards?</h3>
                        <p className="my-1">SWR Rewards is our new rewards scheme, bringing you exclusive offers and deals every time you book with us.</p>
                        <h3 className="my-1">Does it cost anything to join SWR Rewards?</h3>
                        <p className="my-1">SWR Rewards is free - you just need to buy your train ticket online through southwesternrailway.com or via the SWR app to get access to the great offers. </p>
                        <h3 className="my-1">What rewards are available?</h3>
                        <p className="my-1">We've worked with local businesses across the region to bring you some great offers - from exclusive prices on theatre tickets to money off dinner out and cut-price entry to some of the UK's best theme parks.</p>
                        <h3 className="my-1">What's the difference between Leisure and Commuter Rewards?</h3>
                        <p className="my-1">Rewards for leisure travellers are designed with days out in mind and available across the whole of our network. Our commuter rewards are focused on travellers heading to the capital for work and are available between Monday and Friday. But don't worry - you can claim any reward at any time.</p>
                        <h3 className="my-1">Had a problem redeeming a reward?</h3>
                        <p className="my-1">Please use the contact form on the SWR Rewards website where we will be able to assist you with any questions or queries.</p>
                    </div>
                </div>
            </div>
            <FooterMain />
            <Icon1 handleClick={handlewClick} />
        </div>
    );
};
export default TPHRewards;
