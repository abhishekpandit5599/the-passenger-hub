import React, { useLayoutEffect, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Breadcrumb, Layout, Menu } from "antd";
import images from "./../themes/appImage";
import { Link, useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import ReactDOM from 'react-dom';

import { getMemoizedAuthenticationData } from "../redux/selectors/authentication";
import { logoutInitiate } from "../redux/actions/authentication";
import { appConstants, serverUrl } from "../themes/appConstant";
import { fontWeight } from "@mui/system";

const { Header, Content, Footer, Sider } = Layout;


const HeaderMain = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  // const styleLink={
  //   color:"white",
  //   fontWeight:'600'
  // }
  // const NewstyleLink={
  //   color:"black",
  //   fontWeight:'600'
  // }
  const [linkstyle, setlinkstyle] = useState({});
  const [LogoChange, setLogoChange] = useState(images.logohome);
  

  const isLoggedOut = useSelector(getMemoizedAuthenticationData);
  const userData = JSON.parse(localStorage.getItem("userDetails"));
  const { logoutSuccess } = isLoggedOut;
  const { SubMenu } = Menu;
  let token = localStorage.getItem("token");
  
  const [scroll,setScroll] = useState(false);
  
  const handleScroll = () => {
    if (window.pageYOffset >= 10) {
      console.log("Scrolling");
      setScroll(true)
      return true;
    } else {
      console.log("Stopping");
      setScroll(false)
      return false;
    }
  }

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  
  useLayoutEffect(() => {
    if (logoutSuccess) {
      navigate("/");
    }
  }, [logoutSuccess]);
  let activeKey = "";
  switch (location.pathname) {
    case "/finance":
      activeKey = "/finance";
      break;
    case "/about":
      activeKey = "/about";
      break;
    case "/investors":
      activeKey = "/investors";
      break;
    case "/login":
      activeKey = "/login";
      break;
    case "/register":
      activeKey = "/register";
      break;
    //newbooking
    case "/newBookings":
      activeKey = "/newBookings";
      break;
    case "/search":
      activeKey = "/newBookings";
      break;
    case "/paymentbooking":
      activeKey = "/newBookings";
      break;
    //myBookings
    case "/myBookings":
      activeKey = "/myBookings";
      break;
    case "/bookingdetails":
      activeKey = "/myBookings";
      break;
    case "/futurebookingdetails":
      activeKey = "/myBookings";
      break;
    case "/pastbookingdetails":
      activeKey = "/myBookings";
      break;
    case "/onedaybookingdetails":
      activeKey = "/myBookings";
      break;
    case "/longduartionbookingdetails":
      activeKey = "/myBookings";
      break;
    //profile
    case "/Profile":
      activeKey = "/Profile";
      break;
    case "/editprofile":
      activeKey = "/Profile";
      break;
    //oyster
    // case "/purchaseOystersearch":
    //   activeKey = "/purchaseOystersearch"
    //   break;
    case "/purchaseoyster":
      activeKey = "/purchaseoyster";
      break;
    case "/paymentshipping":
      activeKey = "/purchaseoyster";
      break;
    case "/addcarddetails":
      activeKey = "/addcarddetails";
      break;
    case "/carddetails":
      activeKey = "/addcarddetails";
      break;
    case "/seasontickets":
      activeKey = "/seasontickets";
      break;
    case "/changepassword":
      activeKey = "/Profile";
      break;
    case "/landing":
      activeKey = token ? "" : "/landing";
      break;
  }

  // localStorage.setItem('token', '123456789')

  const handleClick = (e) => {
    // navigate(e.key);
    console.log("click ", e);
    // e.key === '/login' &&  dispatch(LogoutAction(history))
  };

  const onLoad = () => randomBgColor();

  const randomBgColor = () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = "#00d9b2";
    return bgColor;
  }

  console.log('====================================');
  console.log(window.pageYOffset)
  return (
    <>
      {!token ? (
        <div className="header-home" style={{ background: {scroll} ? "white" : "transparent"}}>
          <div className="container-fluid">
            <div className="header-desktop">
              <Menu
                //  theme="dark"
                // mode="inline"
                responsive="false"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={[activeKey]}
                selectedKeys={[activeKey]}
                mode="horizontal"
                onClick={handleClick}
              >
                {scroll ? <Menu.Item key="/landing">
                  <Link to="/">
                    <img src={LogoChange} style={{ width: "280px" }} />
                  </Link>
                </Menu.Item> : <Menu.Item key="/landing">
                  <Link to="/">
                    <img src={LogoChange} style={{ width: "280px" }} />
                  </Link>
                </Menu.Item>}

                <Menu.Item key="/finance">
                  <Link to="/finance">
                    <span style={linkstyle}>Finance</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/about">
                  <Link to="/about">
                    <span style={linkstyle}>About Us</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/investors">
                  <Link to="/investors">
                    <span style={linkstyle}>Investors</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/login">
                  <Link to="/login">
                    <span className="line_dash button_space">
                      <span
                        className="button same"
                        style={{ backgroundColor: "#11475B", color: "#fff" }}
                      >
                        Sign In
                      </span>
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/register">
                  <Link to="/register">
                    <span className="line_dash button_space">
                      <span className="button same">Sign Up</span>
                    </span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="/contactus" style={{ marginLeft: "-7px" }}>
                  <Link to="/contactus">
                    <span className="line_dash button_space">
                      <span className="button same2">Contact Us</span>
                    </span>
                  </Link>
                </Menu.Item>
              </Menu>
            </div>
            <div className="menu_left_toogle d-flex responsive-header">
              <img
                alt=""
                src={images.logohome}
                style={{ width: "280px" }}
                onClick={() => {
                  navigate("/");
                }}
              />
              <div className="lite-text" onClick={() => props.handleClick()}>
                <MenuOutlined />
              </div>
            </div>
          </div>
        </div>
      ) : (
          <div className="header-home" style={{ background: scroll ? "white" : "transparent" }}>
          <div className="container-fluid">
            <div className="header-desktop">
              <Menu
                // theme="dark"
                // mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={[activeKey]}
                selectedKeys={[activeKey]}
                mode="horizontal"
                onClick={handleClick}
              >
                {/* <Menu.Item
                  key="/landing"
                  onClick={() => {
                    // localStorage.clear()
                    navigate("/");
                    // dispatch(logoutInitiate())
                  }}
                >
                  <img src={images.logohome} style={{ width: "280px" }} />
                </Menu.Item> */}

                {scroll ? <Menu.Item key="/landing">
                  <Link to="/">
                    <img src={LogoChange} style={{ width: "280px" }} />
                  </Link>
                </Menu.Item> : <Menu.Item key="/landing">
                  <Link to="/">
                    <img src={LogoChange} style={{ width: "280px" }} />
                  </Link>
                </Menu.Item>}
                

                <SubMenu key="SubMenu" title="My Account" className="item_team">
                  <Menu.Item key="/newBookings">
                    <Link to="/newBookings">{appConstants.newBooking}</Link>
                  </Menu.Item>
                  <Menu.Item key="/myBookings">
                    <Link to="/myBookings">{appConstants.myBookings}</Link>
                  </Menu.Item>
                  <Menu.Item key="/Profile">
                    <Link to="/Profile">{appConstants.myProfile}</Link>
                  </Menu.Item>
                  <Menu.Item key="/purchaseoyster">
                    <Link to="/purchaseoyster">{appConstants.purchaseOC}</Link>
                  </Menu.Item>

                  <Menu.Item key="/seasontickets">
                    <Link to="/seasontickets">
                      {appConstants.requestSeasonTkt}
                    </Link>
                  </Menu.Item>

                  <Menu.Item
                    key="/landing"
                    onClick={() => {
                      localStorage.clear();
                      navigate("/");
                      // window.history.replaceState({}, document.title)
                      dispatch(logoutInitiate());
                    }}
                  >
                    Logout
                  </Menu.Item>
                  {/* <SubMenu key="sub3" title="Settings" className="item_team_two">
                        <Menu.Item key="/addcarddetails"><Link to="/addcarddetails">{appConstants.addDebitCreditCard}</Link></Menu.Item>
                        
                        <Menu.Item key="/changepassword"><Link to="/changepassword">{appConstants.changePassword}</Link></Menu.Item>

                        
                      </SubMenu> */}
                </SubMenu>
                {/* <Menu.Item key="/contactus">
                    <Link to="/contactus" >
                      <span className="line_dash button_space" >
                        <span className="button same2">
                          Contact Us
                        </span>
                      </span>
                    </Link>
                  </Menu.Item> */}
                <Menu.Item>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#00BB9C",
                        paddingRight: "18px",
                        paddingLeft: "15px",
                        marginBottom: "0px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "180px",
                      }}
                    >
                      {userData?.fullName ? userData?.fullName : ""}
                    </label>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        lineHeight: "26px",
                          paddingTop: "3px",
                        position : "relative"
                      }}
                    >
                        {
                          userData?.profileImage ?
                            <img
                              className="profile_img"
                              onClick={() => navigate("/Profile")}
                              src={
                                userData?.isSocailAccount && userData?.profileImage
                                  ? userData?.profileImage
                                  : userData?.profileImage
                                    ? `${serverUrl.url}${userData?.profileImage}`
                                    : images.img2
                              }
                              style={{
                                width: "35px!important",
                                height: "35px",
                                borderRadius: "50%",
                                cursor: "pointer",
                              }}
                            /> :
                            <div className="defaultImage" style={{
                              borderRadius: "50%",
                              position: "absolute",
                              fontSize: "12px",
                              width: "95%",
                              height: "95%",
                              textAlign: "center",
                              paddingTop: "6px",
                              background: onLoad(),
                              color : "black"
                            }}>{userData.lastName ? userData.firstName.charAt(0).toUpperCase() + userData.lastName.charAt(0).toUpperCase() : userData.firstName.charAt(0).toUpperCase() + userData.firstName.charAt(1)}
                            </div>
                        }
                    </div>
                  </div>
                </Menu.Item>
              </Menu>
            </div>
            <div className="menu_left_toogle d-flex responsive-header">
              <img
                alt=""
                src={images.logohome}
                style={{ width: "280px" }}
                onClick={() => {
                  navigate("/");
                }}
              />
              <div className="hamburger_menu">
                <label
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    color: "#00BB9C",
                    paddingRight: "18px",
                    paddingLeft: "15px",
                    marginBottom: "0px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "180px",
                  }}
                >
                  {userData?.fullName ? userData?.fullName : ""}
                </label>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      lineHeight: "26px",
                      paddingTop: "3px",
                    }}
                  >
                   
                    {
                      userData?.profileImage ?
                        <img
                          className="profile_img"
                          onClick={() => navigate("/Profile")}
                          src={
                            userData?.isSocailAccount && userData?.profileImage
                              ? userData?.profileImage
                              : userData?.profileImage
                                ? `${serverUrl.url}${userData?.profileImage}`
                                : images.img2
                          }
                          style={{
                            width: "35px!important",
                            height: "35px",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                        /> :
                        <div className="defaultImage" style={{
                          borderRadius: "50%",
                          position: "absolute",
                          fontSize: "13px",
                          width: "95%",
                          height: "95%",
                          textAlign: "center",
                          paddingTop: "25px",
                          fontWeight: "bold",
                          background: onLoad(),
                          color : "black"
                        }}>{userData.lastName ? userData.firstName.charAt(0).toUpperCase() + userData.lastName.charAt(0).toUpperCase() : userData.firstName.charAt(0).toUpperCase() + userData.firstName.charAt(1)}
                        </div>
                    }
                  </div>
              </div>
              <div className="lite-text" onClick={() => props.handleClick()}>
                <MenuOutlined />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default HeaderMain;
