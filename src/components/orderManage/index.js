import React, { useState, useEffect, useLayoutEffect } from "react";
import images from "../../themes/appImage";

import { useDispatch, useSelector } from "react-redux";

import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";

import { drawerAction } from "../../redux/actions/authentication";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";
import { getMemoizedSeasonTicketsData } from "../../redux/selectors/seasonTickets";
import { getSeasonTktDetailInitiate } from "../../redux/actions/seasonTickets";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const OrderManager = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState } = authenticationData;

  const handlewClick = () => {
    let action = drawerState ? false : true;
    dispatch(drawerAction(action, "drawerState"));
  };

  useLayoutEffect(() => {
    dispatch(getSeasonTktDetailInitiate({}, navigate));
  }, []);

  const seasonTicketsData = useSelector(getMemoizedSeasonTicketsData);
  const { seasonTktDetail } = seasonTicketsData;

  return (
    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div class="ord-main">
        <div class="ord-main-wrap">
          <h3>
            Confirmation -{" "}
            <span>Order Reference {seasonTktDetail?.ticketId}</span>
          </h3>
          <div class="ord-data-box">
            <h4>Order Summary</h4>
            <div class="ord-data-flex">
              <div class="ord-data-flex-left">
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Order Reference:</div>
                  <div class="ord-detail-value">
                    {seasonTktDetail?.ticketId}
                  </div>
                </div>
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Order Status:</div>
                  <div class="ord-detail-value">
                    Photocard image being Approved
                  </div>
                </div>
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Booker:</div>
                  <div class="ord-detail-value">
                    {" "}
                    {seasonTktDetail?.user?.fullName}
                  </div>
                </div>
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Booking Agency:</div>
                  <div class="ord-detail-value">The Passenger Hub</div>
                </div>
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Account:</div>
                  <div class="ord-detail-value">
                    {" "}
                    XXXX {seasonTktDetail?.user?.card?.cardNumber}
                  </div>
                </div>
              </div>
              <div class="ord-data-flex-right">
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Transaction:</div>
                  <div class="ord-detail-value">New</div>
                </div>
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Transaction Id:</div>
                  <div class="ord-detail-value">00010269</div>
                </div>
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Order Date:</div>
                  <div class="ord-detail-value">
                    {moment(seasonTktDetail?.createdAt).format("lll")}
                  </div>
                </div>
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Delivery Method:</div>
                  <div class="ord-detail-value">
                    {seasonTktDetail?.deliveryMethod}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ord-data-box">
            <h4>
              Order Item {seasonTktDetail?.source} to{" "}
              {seasonTktDetail?.destination}
            </h4>
            <div class="ord-data-flex">
              <div class="ord-data-flex-left">
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Start date:</div>
                  <div class="ord-detail-value">
                    {moment(seasonTktDetail?.startDate).format("Do MMM, YYYY")}
                  </div>
                </div>
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">End Date:</div>
                  <div class="ord-detail-value">
                    {moment(seasonTktDetail?.endDate).format("Do MMM, YYYY")}
                  </div>
                </div>
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Duration:</div>
                  <div class="ord-detail-value">{`${seasonTktDetail?.duration?.m} Months ${seasonTktDetail?.duration?.d} Days`}</div>
                </div>
              </div>
              <div class="ord-data-flex-right">
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Route:</div>
                  <div class="ord-detail-value">
                    Travel is allowed via any permitted route.
                  </div>
                </div>
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Class:</div>
                  <div class="ord-detail-value">{seasonTktDetail?.class}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="ord-data-box">
            <h4>Traveller Details</h4>
            <div class="ord-data-flex">
              <div class="ord-data-flex-left">
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Name:</div>
                  <div class="ord-detail-value">
                    {seasonTktDetail?.user?.fullName}
                  </div>
                </div>
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Photocard Number:</div>
                  <div class="ord-detail-value">
                    {seasonTktDetail?.cardNumber}
                  </div>
                </div>
              </div>
              <div class="ord-data-flex-right">
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Type:</div>
                  <div class="ord-detail-value">
                    {seasonTktDetail?.passengerType}
                  </div>
                </div>
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Fare:</div>
                  <div class="ord-detail-value">£{seasonTktDetail?.price}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="ord-data-box">
            <h4>delivery Address</h4>
            <div class="ord-data-flex">
              <div class="ord-data-flex-left">
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Contact:</div>
                  <div class="ord-detail-value">
                    {seasonTktDetail?.user?.fullName}
                  </div>
                </div>
              </div>
              <div class="ord-data-flex-right">
                <div class="ord-detail-flex">
                  <div class="ord-detail-title">Address:</div>
                  <div class="ord-detail-value">
                    {" "}
                    {seasonTktDetail?.user?.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ord-fee-box">
            <div class="ord-fee-flex">
              <div class="ord-fee-data">
                <div class="ord-fee-title">Oredr Item Costs:</div>
                <div class="ord-fee-value">
                  £{seasonTktDetail?.price - seasonTktDetail?.deliveryFee}
                </div>
              </div>
              <div class="ord-fee-data">
                <div class="ord-fee-title">Transaction Fee:</div>
                <div class="ord-fee-value">£00.00</div>
              </div>
              <div class="ord-fee-data">
                <div class="ord-fee-title">Delivery Fee:</div>
                <div class="ord-fee-value">£{seasonTktDetail?.deliveryFee}</div>
              </div>
              <div class="ord-fee-data total-fee">
                <div class="ord-fee-title">Total:</div>
                <div class="ord-fee-value">£{seasonTktDetail?.price}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export default OrderManager;
