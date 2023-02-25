import React from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { socailLoginInitiate } from "../redux/actions/authentication";

function FacebookLogin({ text }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const parsedData = state?.data ? JSON.parse(state.data) : null;

  const onLoginStart = useCallback(() => {}, []);

  function handleUserLogin(data) {
    dispatch(
      socailLoginInitiate(
        {
          image: data?.picture?.data?.url,
          firstName: data?.first_name,
          lastName: data?.last_name,
          fullName: data?.name,
          email: data?.email,
          isEmailverified: true,
          countryCode: "+44",
        },
        parsedData ? parsedData : null,
        state?.prevPage ? state.prevPage : null,
        navigate
      )
    );
  }
  return (
    <div className="social-login-inner-wrapper">
      <LoginSocialFacebook
        appId={"614466960479720" || ""}
        fieldsProfile={
          "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
        }
        onLoginStart={onLoginStart}
        onResolve={({ provider, data }) => {
          console.log(data, provider);
          handleUserLogin(data);
        }}
        // redirect_uri={"https://passenger.labtest.org.in/landing"}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <FacebookLoginButton text={text} style={{ borderRadius: "11px" }} />
      </LoginSocialFacebook>
    </div>
  );
}

export default FacebookLogin;
