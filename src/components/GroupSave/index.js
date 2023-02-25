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


const GroupSave = (props) => {
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
                    <h3>SWR eTickets GroupSave train tickets</h3>
                    <h5 className="my-2 text-light">Travelling in a group of 3-9 people? Then GroupSave tickets could be for you</h5>
                </div>
            </div>
            <div className="cheap-train-tickets ">
                <div className="container">
                <div className="col">
                    <h3 className="my-3"><strong>GroupSave</strong></h3>
                    <p className="my-2">GroupSave train tickets could save you up to 34% off adult tickets when 3 to 9 people are travelling together in Standard Class. We’ll automatically apply the GroupSave discount when you buy your train tickets online and on the SWR app.</p>
                    <h3 className="my-2">Travelling in a group of 10+ people?</h3>
                    <p className="mb-1">If 10 or more of you are travelling together you can save with a Group Travel ticket for off-peak journeys.</p>
                    <h3 className="my-2">GroupSave discount for families</h3>
                    <p className="mb-2">If you’re travelling with children (aged 5-15), it may be cheaper to buy an adult GroupSave ticket for the whole group. To do this enter the number of children travelling as adults into the ticket request.</p>
                    <p className="mb-2">If there are 3-9 adults in the group, it could be cheaper to buy GroupSave train tickets for the adults and add additional children paying the normal child fare.</p>
                    <p className="mb-2">If you travel regularly with the kids, then a Family and Friends Railcard is another great way to save with 1/3 off adult fares, and 60% off child fares.</p>
                    <p className="mb-2">You can't use a Family & Friends Railcard with the GroupSave discount, so check to see which will be better value before you buy. As GroupSave train tickets aren't available nationally, a Family and Friends Railcard could be a great way to save on other group travel journeys..</p>
                    <h3 className="my-2">GroupSave discount for families</h3>
                    <p className="mb-2">The GroupSave train ticket discount is up to 34% off off-peak journeys.</p>
                    <p className="mb-2">Not all train companies offer GroupSave discounts, so check to see which companies offer GroupSave discounts and if it will apply for your whole journey.</p>
                    <h3 className="my-2">Which ticket types is GroupSave applied to?</h3>
                    <p className="mb-2">The GroupSave discount is applicable on the following SWR ticket types:</p>
                    <ul className="my-2">
                        <li><Link>Anytime train tickets</Link></li>
                        <li><Link>Off-Peak train tickets</Link></li>
                        <li><Link>Super-Off Peak train tickets</Link></li>
                        <li><Link>Evening Out train tickets</Link></li>
                        <li><Link>Sunday Out train tickets</Link></li>
                    </ul>
                    <h3 className="my-2">GroupSave discount for families</h3>
                    <p className="mb-2">No, the GroupSave discount is for Standard Class only and not available on First Class train tickets.</p>
                    <h3 className="my-2">Do I need a Railcard for GroupSave?</h3>
                    <p className="mb-2">No, you do not need a Railcard or discount card as GroupSave is automatically applied when you enter between 3-9 people online or on the app.</p>
                    <p className="mb-2">No further discounts are available for children or Railcard holders.</p>
                    <h3 className="my-2">Can I buy GroupSave at the station?</h3>
                    <p className="mb-2">Yes, you can buy train tickets with the GroupSave discount at ticket offices and ticket machines</p>
                    <h3 className="my-2">Can I buy GroupSave tickets on the train?</h3>
                    <p className="mb-2">GroupSave train tickets should be purchased from our website, app or at the station before boarding the train.</p>
                    <h3 className="my-2">With GroupSave tickets can some of the group travel on different trains?</h3>
                    <p className="mb-2">No. With GroupSave you must all travel together on the same train – otherwise you may be asked to pay the full fare for the journey or be liable for a Penalty Fare. If your group needs to split up at any time then you should buy separate GroupSave tickets for each smaller group (3-9 people).</p>
                    <p className="mb-2">When travelling with a GroupSave ticket, make sure you're all close together throughout your journey so that our staff can check your ticket as a group.

</p>
                    </div>

                   
                </div>
            </div>
            <FooterMain />
            <Icon1 handleClick={handlewClick} />
        </div>
    );
};
export default GroupSave;
