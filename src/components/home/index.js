import React, { useState, useEffect, useLayoutEffect } from "react";
import { Layout, Menu } from "antd";
import images from "../../themes/appImage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import ProfileIncompleteModal from "../../common/ProfileIncompleteModal";
import {
  getMemoizedAuthenticationData,
  userProfileInitiate,
} from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";
import Icon1 from "../../common/icon";
import { appConstants } from "../../themes/appConstant";
const Home = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
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
  const [open, setOpen] = useState(false);
  let bannerArr = [images.banner2, images.banner3, images.banner1];
  let maskArr = [images.maskvalue, images.mask_1, images.mask_2];

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

    // window.addEventListener("popstate", function (event) {
    //   let token = localStorage.getItem('token')
    //   if (document.title == "Home" && token) {
    //     console.log("this is back = ", window.location.pathname)
    //     if (window.location.pathname == '/login') {
    //       console.log("this is back tt = ", window.location.pathname)
    //       window.history.back(-2)
    //     } else {
    //     }
    //   }
    // });
  }, []);
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
      return;
    } else {
      navigate(`/${type}`, {
        state: { prevPage: "landingPage" },
      });
      return;
    }
  };

  return (
    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div className="mobileabout booktableview">
        <div className="container-fluid spacert">
          <h3>{appConstants.newBooking}</h3>
        </div>
      </div>
      <div className="home-banner-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <div className="line-text-d">
                {/* onClick={()=>(navigate('/purchaseOystersearch'))} */}
                <img
                  alt=""
                  src={images.oyster}
                  onClick={
                    () => {
                      validateBuyNow("purchaseoyster");
                    }
                    // navigate("/purchaseoyster", {
                    //   state: { key: "landingPage" },
                    // })
                  }
                  style={{ width: "250px", cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="line-text-d">
                <img
                  alt=""
                  src={images.travel}
                  onClick={() => {
                    validateBuyNow("newBookings");
                  }}
                  style={{ width: "250px", cursor: "pointer" }}
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
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>

      <FooterMain />
      <Icon1 handleClick={handlewClick} />
      <ProfileIncompleteModal
        open={open}
        setOpen={setOpen}
        navigate={navigate}
      />
    </div>
  );
};
export default Home;
