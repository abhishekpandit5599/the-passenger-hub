import React, { useState, useEffect, useLayoutEffect } from "react";
import { Collapse, Menu, Modal, Tabs } from "antd";
import images from "../../themes/appImage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import {
  drawerAction,
  userProfileInitiate,
} from "../../redux/actions/authentication";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";
import { appConstants } from "../../themes/appConstant";
import toast from "react-nextjs-toast";
import ProfileIncompleteModal from "../../common/ProfileIncompleteModal";
import Icon1 from "../../common/icon";
const { Panel } = Collapse;
const Landing = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setimageSrc] = useState(images.mobilecut);
  const [imageBanner, setBannerImg] = useState(images.banner1);
  const [maskImg, setMaskImg] = useState(images.maskvalue);
  const [imageBannerClass, setBannerImgClass] = useState("slide-top");
  const [fadeAnimClass, setFadeAnimClass] = useState("value-text-jo");

  const imagesArr = [
    images.passenger,
    images.cycle,
    images.taxicut,
    images.mobilecut,
  ];
  const [resultIndex, setResultIndex] = useState(0);

  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState, userProfileDetail } = authenticationData;

  let bannerArr = [images.banner2, images.banner3, images.banner1];
  let maskArr = [images.maskvalue, images.mask_1, images.mask_2];

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useLayoutEffect(() => {
    if (resultIndex < 2) {
      setResultIndex(resultIndex + 1);
    } else {
      setResultIndex(0);
    }
  }, [imageSrc]);

  useEffect(() => {
    // setBannerImgClass('')
    setTimeout(() => {
      setimageSrc(imagesArr[resultIndex]);
      setBannerImgClass("slide-top");
      setFadeAnimClass("value-text-jo");
      setBannerImg(bannerArr[resultIndex]);
      setMaskImg(maskArr[resultIndex]);
    }, 3000);

    setTimeout(() => {
      setBannerImgClass("");
      setFadeAnimClass("");
      setBannerImg(null);
    }, 2950);
  }, [imageSrc]);

  const { SubMenu } = Menu;

  const handlewClick = () => {
    let action = drawerState ? false : true;
    dispatch(drawerAction(action, "drawerState"));
  };

  useEffect(() => {
    document.title = props.title;
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    if (localStorage.getItem("token"))
      dispatch(userProfileInitiate(null, navigate));
  }, []);

  const [open, setOpen] = useState(false);
  // const validateBuyNow = (type) => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login", {
  //       state: { prevPage: type },
  //     });
  //     return;
  //   }

  //   if (!userProfileDetail?.isSocailAccount) {
  //     navigate(`/${type}`, {
  //       state: { key: "landingPage" },
  //     });
  //     return;
  //   }
  //   if (
  //     !userProfileDetail?.title ||
  //     !userProfileDetail?.firstName ||
  //     !userProfileDetail?.fullName ||
  //     !userProfileDetail?.address ||
  //     !userProfileDetail?.postalCode ||
  //     !userProfileDetail?.city ||
  //     !userProfileDetail?.countryCode ||
  //     !userProfileDetail?.phoneNumber
  //   ) {
  //     setOpen(true);
  //     return;
  //   }
  // };

  const validateBuyNow = (type) => {
    if (!localStorage.getItem("token")) {
      navigate("/login", {
        state: { prevPage: type },
      });
      return;
    }

    if (!userProfileDetail?.isSocailAccount) {
      navigate(`/${type}`, {
        state: { key: "landingPage" },
      });
      return;
    }
    if (
      !userProfileDetail?.title ||
      !userProfileDetail?.firstName ||
      !userProfileDetail?.fullName ||
      !userProfileDetail?.address ||
      !userProfileDetail?.postalCode ||
      !userProfileDetail?.city ||
      !userProfileDetail?.countryCode ||
      !userProfileDetail?.phoneNumber
    ) {
      setOpen(true);
      console.log(userProfileDetail);
      return;
    } else {
      navigate(`/${type}`, {
        state: { prevPage: "landingPage" },
      });
      return;
    }
  };
  const _modelView = () => {
    return (
      <Modal
        centered
        width={500}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div>
            <img alt="" src={images.logohome} style={{ width: "200px" }} />
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#000",
                  marginTop: "20px",
                  marginBottom: 0,
                }}
              >
                Privacy Settings
              </p>
              <p
                style={{
                  fontWeight: 700,
                }}
              >
                This tool helps you to select and deactivate various tags /
                trackers / analytic tools used on this website. More info see
                Privacy Statement
              </p>
            </div>
            <div>
              <Tabs defaultActiveKey="1" centered>
                <Tabs.TabPane tab="Categories" key="1">
                  <Collapse defaultActiveKey={["1"]} expandIconPosition="end">
                    <Panel header="Marketing" key="1">
                      <p></p>
                    </Panel>
                    <Panel header="Functional" key="2">
                      <p></p>
                    </Panel>
                    <Panel header="Essential" key="3">
                      <p></p>
                    </Panel>
                    <Panel header="Statistics" key="4">
                      <p></p>
                    </Panel>
                  </Collapse>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Services" key="2">
                  <Collapse defaultActiveKey={["1"]} expandIconPosition="end">
                    <Panel header="Marketing" key="1">
                      <p></p>
                    </Panel>
                    <Panel header="Functional" key="2">
                      <p></p>
                    </Panel>
                    <Panel header="Essential" key="3">
                      <p></p>
                    </Panel>
                    <Panel header="Statistics" key="4">
                      <p></p>
                    </Panel>
                  </Collapse>
                </Tabs.TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div className="banner-section">
        <div className="container-fluid">
          <h2 className="line">
            Train travel made
            <span className="color-d"> Cheaper and Greener</span>
          </h2>
          <div className="row">
            <div className="col-md-6">
              <h5 style={{ paddingLeft: "100px", paddingTop: "40px" }}>
                It’s time to stop overpaying for your commute.
              </h5>
              <h5 style={{ paddingLeft: "100px" }}>
                Split the cost of your train ticket over 12 months, and{" "}
                <span className="color-d">
                  save up to 20% compared to booking daily tickets.
                </span>
              </h5>
              <div className="home-banner-section1">
                <div className="container-fluid">
                  <div className="d-flex pt-4 " style={{ paddingLeft: "90px" }}>
                    <div className="mr-5">
                      <div className="line-text-d">
                        {/* onClick={()=>(navigate('/purchaseOystersearch'))} */}
                        <img
                          alt=""
                          src={images.oyster}
                          onClick={() => {
                            validateBuyNow("purchaseoyster");
                            // if (localStorage.getItem("token")) {
                            //   navigate("/purchaseoyster", {
                            //     state: { prevPage: "landingPage" },
                            //   });
                            // } else {
                            //   navigate("/login", {
                            //     state: { prevPage: "purchaseoyster" },
                            //   });
                            // }
                          }}
                          style={{
                            width: "200px",
                            height: "125px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="line-text-d">
                        <img
                          alt=""
                          src={images.travel}
                          onClick={() => {
                            validateBuyNow("newBookings");
                            // if (localStorage.getItem("token")) {
                            //   navigate("/newBookings", {
                            //     state: { prevPage: "landingPage" },
                            //   });
                            // } else {
                            //   navigate("/login", {
                            //     state: { prevPage: "newBookings" },
                            //   });
                            // }
                          }}
                          style={{
                            width: "200px",
                            height: "125px",
                            cursor: "pointer",
                          }}
                        />
                        {/* <div className="banner_text">
                <img
                  alt=""
                  src={imageBanner}
                  className={imageBannerClass}
                  style={{ width: "700px" }}
                />
              </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner_text">
                <img
                  alt=""
                  src={imageBanner}
                  className={imageBannerClass}
                  style={{ width: "550px", paddingRight: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="logistics text-center" style={{ height: "450px" }}>
        <div className="container">
          <h2 className="line" style={{ paddingTop: "20px" }}>
            Carbon-friendly Commuting
          </h2>
          <div className="text-line small-text">
            We’re on a mission to change the way people travel. We want to make
            travelling by train cheaper and greener, doing our part in the
            global journey to reach net zero emissions.
          </div>
          <h4 className="line" style={{ paddingTop: "20px" }}>
            <b> Why choose train travel?</b>
          </h4>
          <br />

          <div className="row">
            <div className="col-md-4">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <span className="button same1">Reduce CO2</span>
              </div>
              <div className="shopp-text">
                {/* <h4>Real-time tracking and support</h4> */}
                <p>
                  We can only meet climate targets if we reduce the 60% of CO2
                  road emissions that cars are responsible for.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <span className="button same1">Get To work Happier</span>
              </div>
              <div className="shopp-text">
                {/* <h4>Trusted global carriers</h4> */}
                <p>
                  Say goodbye to rush hour traffic, higher fuel consumption and
                  unpredictable journey times.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <span className="button same1">No Parking</span>
              </div>
              <div className="shopp-text">
                {/* <h4>Competitive prices</h4> */}
                <p>
                  Hop on, hop off, with no need to search for expensive
                  city-centre parking options or negotiate busy traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hub-section">
        <div className="container happy_sec">
          <div className="row">
            <div className="col-md-4">
              <div className="item-alert">
                <img alt="" src={imageSrc} style={{ width: "283px" }} />
              </div>
            </div>
            <div className="col-md-8 passenger">
              <h3 class="top-left">Still to come...</h3>
              {/* <h4>Simple . Secure . Share</h4> */}
              <p className="one-time">
                Book your journey end-to-end using The Passenger Hub, including
                reserving bikes, e-scooters and more.
              </p>

              <p className="one-time">
                Subscribe now to be one of the first to try our new
                micro-mobility services, and be kept up-to-date on the launch.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <span className="button same1">Join Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="happy-section">
        <div
          className="container special_margin"
          style={{ marginRight: "0px!important" }}
        >
          <div className="row">
            <div className="col-md-6 top-down">
              <h3>The ultimate getting-to-work perk</h3>
              <h4>
                Give your employees the ultimate getting to work perk by
                bringing the passenger hub to your organisation.
              </h4>
              <div
                className="text-line small-text"
                style={{ textAlign: "left" }}
              >
                Attract your top talent back to the office by offering
                discounted season tickets, bought through us and subsidised by
                you.
                <br />
                Or if you're self-employed, get a cheaper season ticket
                alongside a monthly receipt for your expenses.
              </div>
              <ul class="auto-switch mt-4 d-xl-block">
                <li
                  className={
                    resultIndex == 0
                      ? "button text first active1"
                      : "button text first"
                  }
                >
                  Reduce CO2
                </li>
                <li
                  className={
                    resultIndex == 1
                      ? "button text active1 long-b"
                      : "button text long-b"
                  }
                >
                  Get to Work Happier
                </li>
                <li
                  className={
                    resultIndex == 2
                      ? "button text last active1"
                      : "button text last"
                  }
                >
                  Save Parking Space
                </li>
              </ul>
            </div>
            <div className="col-md-6 special_padding">
              {
                <img
                  alt=""
                  src={maskImg}
                  className={fadeAnimClass}
                  style={{ width: "100%", height: "557px" }}
                />
              }
            </div>
          </div>
        </div>
      </div>

      {/* <div className="happy-section">
        <div className="container special_margin" style={{ marginRight: '0px!important' }}>
          <div className="row">
            <div className="col-md-6 top-down">
              <h3>The ultimate getting-to-work perk</h3>
             
          <div className="text-line small-text" style={{textAlign: "left"}}>
          Or if you’re self-employed, get a cheaper season ticket alongside a monthly receipt for your expenses.

          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              
            }}
          >
            <Link to="/contactUs">
             <span className="button same1">Contact Us</span>
             </Link>
          </div>
            </div>
            <div className="col-md-6 special_padding">
              {
                <img
                  alt=""
                  src={maskImg}
                  className={fadeAnimClass}
                  style={{ width: '100%', height: '557px' }}
                />
              }
            </div>
          </div>
        </div>
      </div> */}
      {/* <a
        className="floating-logo"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <img
          src={images.floatLogo}
          alt="logo"
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
        />
      </a> */}
      <Icon1 handleClick={handlewClick} />
      {_modelView()}
      <FooterMain />
      <ProfileIncompleteModal
        open={open}
        setOpen={setOpen}
        navigate={navigate}
      />
    </div>
  );
};
export default Landing;
