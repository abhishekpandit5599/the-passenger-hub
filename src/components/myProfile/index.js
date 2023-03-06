import React, { useState, useLayoutEffect, useEffect } from "react";
import { Layout, Menu } from "antd";
import images from "../../themes/appImage";
import { Collapse, Select, DatePicker, Space } from "antd";
import { Radio, InputNumber, TimePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import {
  drawerAction,
  userProfileInitiate,
} from "../../redux/actions/authentication";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";
import { FirstLetterUpperCase } from "../../common/utils";
import { appConstants, serverUrl } from "../../themes/appConstant";
const { Option } = Select;

const Profile = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = JSON.parse(localStorage.getItem("userDetails"));
 
  const [value, setValue] = React.useState(1);

  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const {
    drawerState,
    userProfileDetail,
    userProfileLoader,
    userProfileSuccess,
  } = authenticationData;

  const randomBgColor = () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = "#00d9b2";
    return bgColor;
  }


  

  useLayoutEffect(() => {
    dispatch(userProfileInitiate(null, navigate));
  }, []);

  const handlewClick = () => {
    let action = drawerState ? false : true;
    dispatch(drawerAction(action, "drawerState"));
  };
  useEffect(() => {
    document.title = props.title;
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div className="mobileabout text-item">
        <div className="container-fluid spacert">
          <h3>Profile & Billing Contact Details</h3>
        </div>
      </div>
      <div className="press password_small view-detailspage">
        <div className="container">
          {/* <h2 className="line">
            Profile <span className="color-d">Details</span>
          </h2> */}
          {/* <div className="text-line">
            <img src={images.border1} style={{ width: '400px' }} />
          </div> */}
          <div class="team-img">
            {
              userData?.profileImage ? <img
                src={
                  userData?.isSocailAccount && userData?.profileImage
                    ? userData?.profileImage
                    : userData?.profileImage
                      ? `${serverUrl.url}${userData?.profileImage}`
                      : images.img2
                }
              /> : <div className="defaultImage" onLoad={() => randomBgColor()} style={{
                  borderRadius: "50%",
                  position: "absolute",
                fontSize: "13px",
                width: "95%",
                height: "95%",
                textAlign: "center",
                  paddingTop: "25px",
                  fontWeight: "bold",
                  color : "black"
                }}>{userData.lastName ? userData.firstName.charAt(0).toUpperCase() + userData.lastName.charAt(0).toUpperCase() : userData.firstName.charAt(0).toUpperCase() + userData.firstName.charAt(1)}
                </div>
            }
          </div>
          <div className="row">
            <div className="text-input-filed" style={{ width: "100%" }}>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "#84e0ab" }}>Title</label>
                      <input
                        type="text"
                        className="form-control"
                        Value={
                          userProfileDetail?.title
                            ? userProfileDetail?.title
                            : "Mr."
                        }
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "#84e0ab" }}>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        Value={
                          userProfileDetail?.fullName
                            ? userProfileDetail?.fullName
                            : ""
                        }
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "#84e0ab" }}>Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        Value={
                          userProfileDetail?.email
                            ? userProfileDetail.email
                            : ""
                        }
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "#84e0ab" }}>Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        Value={
                          userProfileDetail?.phoneNumber
                            ? `+44 ${userProfileDetail.phoneNumber}`
                            : ""
                        }
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label style={{ color: "#84e0ab" }}>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        Value={
                          userProfileDetail?.address
                            ? userProfileDetail.address
                            : ""
                        }
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "#84e0ab" }}>Postal Code</label>
                      <input
                        type="text"
                        className="form-control"
                        Value={
                          userProfileDetail?.postalCode
                            ? userProfileDetail.postalCode
                            : ""
                        }
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "#84e0ab" }}>City</label>
                      <input
                        type="text"
                        className="form-control"
                        Value={
                          userProfileDetail?.city ? userProfileDetail?.city : ""
                        }
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <h2 className="line space-text_D">
            Billing <span className="color-d">Contact</span> Details
          </h2> */}
          {/* <div className="text-line">
            <img src={images.border1} style={{ width: '400px' }} />
          </div> */}
          <div className="row">
            <div className="text-input-filed" style={{ width: "100%" }}>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "#84e0ab" }}>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        Value={
                          userProfileDetail?.billing?.firstName
                            ? userProfileDetail?.billing?.firstName
                            : ""
                        }
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "#84e0ab" }}>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        Value={
                          userProfileDetail?.billing?.lastName
                            ? userProfileDetail?.billing?.lastName
                            : ""
                        }
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "#84e0ab" }}>Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        Value={
                          userProfileDetail?.billing?.phoneNumber
                            ? `+44 ${userProfileDetail?.billing?.phoneNumber}`
                            : ""
                        }
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "#84e0ab" }}>Fax ID</label>
                      <input
                        type="text"
                        className="form-control"
                        Value={
                          userProfileDetail?.billing?.fax
                            ? userProfileDetail?.billing?.fax
                            : ""
                        }
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "#84e0ab" }}>Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        Value={
                          userProfileDetail?.billing?.email
                            ? userProfileDetail?.billing?.email
                            : ""
                        }
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label style={{ color: "#84e0ab" }}>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        Value={
                          userProfileDetail?.billing?.address
                            ? userProfileDetail?.billing?.address
                            : ""
                        }
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {userProfileDetail?.card?.cardNumber ? (
            <>
              <h2 className="line space-text_D">
                Card <span className="color-d">Details</span>
              </h2>
              {/* <div className="text-line">
              <img src={images.border1} style={{ width: '400px' }} />
            </div> */}
              <div className="row">
                <div className="text-input-filed" style={{ width: "100%" }}>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label style={{ color: "#84e0ab" }}>Card Type</label>
                          <input
                            type="text"
                            className="form-control"
                            Value={
                              userProfileDetail?.card?.cardType
                                ? FirstLetterUpperCase(
                                  userProfileDetail?.card?.cardType
                                )
                                : ""
                            }
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label style={{ color: "#84e0ab" }}>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            Value={
                              userProfileDetail?.card?.name
                                ? userProfileDetail?.card?.name
                                : ""
                            }
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label style={{ color: "#84e0ab" }}>
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            Value={
                              userProfileDetail?.card?.cardExpMonth
                                ? `${userProfileDetail?.card?.cardExpMonth}/${userProfileDetail?.card?.cardExpYear}`
                                : ""
                            }
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label style={{ color: "#84e0ab" }}>
                            Card Details
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            Value={
                              userProfileDetail?.card?.cardNumber
                                ? `XXXX XXXX XXXX ${userProfileDetail?.card?.cardNumber}`
                                : ""
                            }
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          <div className="btn_container">
            <div className="button_bottom text-center">
              <button
                class="button text small-width"
                onClick={() =>
                  navigate("/editprofile", {
                    state: { userId: userProfileDetail?._id },
                  })
                }
              >
                Edit Profile
              </button>
            </div>
            <div className="button_bottom text-center">
              <button
                class="button text small-width"
                onClick={() =>
                  navigate("/addcarddetails", {
                    state: { prevRoute: "Profile" },
                  })
                }
              >
                {userProfileDetail?.card?.cardNumber
                  ? "Card Details"
                  : "Add Card Details"}
              </button>
            </div>
            <div className="button_bottom text-center">
              <button
                class="button text small-width"
                onClick={() => navigate("/changepassword")}
              >
                {appConstants.changePassword}
              </button>
            </div>
          </div>
        </div>
      </div>

      <FooterMain />
    </div>
  );
};
export default Profile;
