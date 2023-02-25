import React, { useState, useEffect, useLayoutEffect } from "react";
import { Button, Layout, Menu, Modal, Spin } from "antd";
import images from "../../../themes/appImage";
// import tableLoading from '../common/tableloading'
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { getMemoizedAuthenticationData } from "../../../redux/selectors/authentication";
import { drawerAction } from "../../../redux/actions/authentication";
import MobileSidebar from "../../../common/mobilesidebar";
import HeaderMain from "../../../common/header";
import FooterMain from "../../../common/footer";
import { appConstants } from "../../../themes/appConstant";
import { jsPDF } from "jspdf";

import printJS from "print-js";
import PrintProvider, { Print, NoPrint } from "react-easy-print";
import {
  FirstLetterUpperCase,
  isObjEmpty,
  SeatNumbersArrayMap,
} from "../../../common/utils";
import {
  getBookingDetailsInitiate,
  updateBookingsState,
} from "../../../redux/actions/myBookings";
import { cancelSeasonTicketInitiate } from "../../../redux/actions/seasonTickets";
import { getMemoizedMyBookingsData } from "../../../redux/selectors/myBookings";

const BookingDetails = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname, state } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [refundReason, setRefundReason] = useState("");

  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState } = authenticationData;
  const myBookingsData = useSelector(getMemoizedMyBookingsData);
  const { bookingDetailsLoader, bookingDetailsSuccess, bookingDetails } =
    myBookingsData;

  console.log("this is pathname = ", state, bookingDetails);
  const handlewClick = () => {
    let action = drawerState ? false : true;
    dispatch(drawerAction(action, "drawerState"));
  };

  useEffect(() => {
    if (state?.useDetails) {
      dispatch(
        getBookingDetailsInitiate({ bookingId: state.useDetails._id }, navigate)
      );
    }
    // return () => {
    //   dispatch(updateBookingsState(null, 'screenName'))
    // }
  }, []);

  useEffect(() => {
    document.title = "The PassengerHub";
    window.scrollTo(0, 0);
  }, []);

  const handleCancel = () => {
    setIsModalOpen1(false);
  };

  const handleOk = () => {
    dispatch(
      cancelSeasonTicketInitiate(
        {
          ticketId: bookingDetails?.ticketId,
          reason: refundReason,
        },
        navigate
      )
    );
  };

  const _Modal = () => {
    return (
      <Modal
        title="Refund Booking"
        centered
        className="sharemodal loginer Confirmationseasons"
        width={700}
        footer={null}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ margin: ".5rem 2rem" }}>
          <h3 style={{ marginTop: ".5rem", fontSize: "22px", fontWeight: 600 }}>
            Order Id : {bookingDetails?.ticketId}
          </h3>
          <div className="form-group mt-4">
            <h5>Write a reason for refund booking</h5>
            <textarea
              className="form-control"
              placeholder="Description"
              autoComplete="off"
              name="description"
              rows={4}
              value={refundReason}
              onChange={(e) => setRefundReason(e.target.value)}
            >
              Description
            </textarea>
          </div>
        </div>

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              background: "gray",
              height: "3rem",
              borderRadius: "5px",
              color: "white",
              fontWeight: 600,
            }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            style={{
              background: "gray",
              width: "6rem",
              height: "3rem",
              borderRadius: "5px",
              background:
                " linear-gradient( 90deg, #84e0ab 5%, #7bd0d3 51.25%, #84e0ab 93.75% )",
              color: "white",
              fontWeight: 600,
              marginLeft: "10px",
            }}
            onClick={handleOk}
          >
            Submit
          </Button>
        </div>
      </Modal>
    );
  };
  const _Modal1 = () => {
    return (
      <Modal
        title="Cancel Booking"
        centered
        className="sharemodal loginer Confirmationseasons"
        width={700}
        footer={null}
        visible={isModalOpen1}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ margin: ".5rem 2rem" }}>
          <h3 style={{ marginTop: ".5rem", fontSize: "22px", fontWeight: 600 }}>
            Order Id : {bookingDetails?.ticketId}
          </h3>
          <div className="form-group mt-4">
            <h5>Write a reason for Cancel booking</h5>
            <textarea
              className="form-control"
              placeholder="Description"
              autoComplete="off"
              name="description"
              rows={4}
              value={refundReason}
              onChange={(e) => setRefundReason(e.target.value)}
            >
              Description
            </textarea>
          </div>
        </div>

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              background: "gray",
              height: "3rem",
              borderRadius: "5px",
              color: "white",
              fontWeight: 600,
            }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            style={{
              background: "gray",
              width: "6rem",
              height: "3rem",
              borderRadius: "5px",
              background:
                " linear-gradient( 90deg, #84e0ab 5%, #7bd0d3 51.25%, #84e0ab 93.75% )",
              color: "white",
              fontWeight: 600,
              marginLeft: "10px",
            }}
            onClick={handleOk}
          >
            Submit
          </Button>
        </div>
      </Modal>
    );
  };

  return (
    <div>
      <NoPrint>
        <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
        <HeaderMain handleClick={handlewClick} />
      </NoPrint>
      {bookingDetails && (
        <>
          <NoPrint>
            <Print>
              <div
                style={{
                  margin: "6rem auto 2rem",
                  border: "1px solid lightgray",
                  borderRadius: "10px",
                  overflow: "hidden",
                  maxWidth: "700px",
                }}
              >
                <h2
                  style={{
                    fontWeight: 700,
                    fontSize: "35px",
                    letterSpacing: ".5px",
                    marginBottom: "0px",
                    padding: "20px",
                    background:
                      // "linear-gradient( 90deg, #09bb9d 5%, #7bd0d3 51.25%, #09bb9d 93.75% )"
                      " linear-gradient( 90deg, #84e0ab 5%, #7bd0d3 51.25%, #84e0ab 93.75% )",
                    textAlign: "center",
                  }}
                >
                  Order details
                </h2>
                <div className="order-content">
                  <h4>Order Number : {bookingDetails?.ticketId}</h4>
                  <h5>Order Summary</h5>
                  <div className="o-c-data">
                    <div className="o-c-d-title">Order Date :</div>
                    <div className="o-c-value">
                      {moment(bookingDetails?.createdAt).format("YYYY-MM-DD")}
                    </div>
                  </div>
                  <div className="o-c-data">
                    <div className="o-c-d-title">Ticket ID :</div>
                    <div className="o-c-value">{bookingDetails?.ticketId}</div>
                  </div>
                  <div className="o-c-data">
                    <div className="o-c-d-title">Payment Card :</div>
                    <div className="o-c-value">Visa</div>
                  </div>
                  <h5>Billing Details</h5>
                  <div className="o-c-data">
                    <div className="o-c-d-title">Name and Address :</div>
                    <div className="o-c-value">
                      {bookingDetails?.user?.fullName}
                      <br />
                      {bookingDetails?.user?.address}
                    </div>
                  </div>
                  <h5>Items in this order</h5>
                  <div className="o-c-i-data">
                    <div className="o-c-i-d-title">Item</div>
                    <div className="o-c-i-value">Price</div>
                  </div>
                  <hr />
                  <div className="o-c-i-data">
                    <div className="o-c-i-d-title">
                      {bookingDetails?.duration} Travelcard{" "}
                      {bookingDetails?.source}
                      <br />
                      From{" "}
                      {moment(bookingDetails?.bookingDate).format(
                        "YYYY-MM-DD"
                      )}{" "}
                      to{" "}
                      {bookingDetails?.duration &&
                        moment(bookingDetails?.bookingDate)
                          .add(
                            bookingDetails?.duration.split(" ")[0],
                            bookingDetails?.duration.split(" ")[1] == "Day"
                              ? "d"
                              : "M"
                          )
                          .format("YYYY-MM-DD")}
                      <br />
                      Collected at: Stockwell
                      <br />
                      Status {bookingDetails?.status}
                    </div>
                    <div className="o-c-i-value">£41.20</div>
                  </div>
                  <div className="o-c-i-data mt-1">
                    <div className="o-c-i-d-title">Total Charged</div>
                    <div className="o-c-i-price">£41.20</div>
                  </div>
                </div>
              </div>
            </Print>

            <div
              style={{
                marginTop: "1rem",
                marginBottom : "2rem",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button
                className="color1"
                style={{
                  height: "2rem",
                  borderRadius: "5px",
                  color: "white",
                  fontWeight: 600,
                }}
                onClick={() => {
                  setIsModalOpen1(true);
                }}
              >
                Cancel
              </Button>
              <Button
                style={{
                  height: "2rem",
                  marginLeft: "10px",
                  borderRadius: "5px",
                  color: "#000",
                  fontWeight: 600,
                }}
                onClick={() => {
                  setIsModalOpen1(true);
                }}
              >
                Refund
              </Button>
              <Button
                style={{
                  width: "6rem",
                  height: "2rem",
                  marginLeft: "10px",
                  borderRadius: "5px",
                  color: "#000",
                  fontWeight: 600,
                }}
                // onClick={() => printJS("test", "html")}
                onClick={() => {
                  const doc = new jsPDF();
                  doc.save("bill.pdf");
                }}
              >
                Download
              </Button>
            </div>
          </NoPrint>
        </>
      )}
      <NoPrint>
        <FooterMain />
      </NoPrint>
      {_Modal()}
      {_Modal1()}
    </div>
  );
};
export default BookingDetails;
