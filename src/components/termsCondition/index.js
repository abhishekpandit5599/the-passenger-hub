import React, { useEffect } from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";
import { appConstants } from "../../themes/appConstant";
const { Option } = Select;

const TermsConditions = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(1);

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
          <h3>{appConstants.terms}</h3>
        </div>
      </div>
      <div className="press">
        <div className="container">
          {/* <h2 className="line">{appConstants.terms}</h2> */}
          {/* <div className="text-line" style={{ paddingBottom: '20px' }}>
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div> */}
          <div className="">
            <div class="line-text_text investors">
              <p>
                Last updated on 19th October 2022 These Terms and Conditions
                include information about our booking services and on how you
                can manage your booking including about changes, refunds and
                cancellations and about payment methods. Just to note when we
                capitalise ‘Terms and Conditions’ it’s because we’re talking
                about ours, the ones you’re reading right now, and when it’s
                lowercase that means we’re talking about ones separate to these,
                like terms and conditions of the operators or third-parties.
              </p>
              <p>
                For our French customers we’d like to draw your attention to
                section 13, for our American customers we’d like to draw your
                attention to section 14, and for our Italian customers, we’d
                like to draw your attention to section 15, as there’s some
                important info there that relates just to you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterMain />
    </div>
  );
};
export default TermsConditions;
