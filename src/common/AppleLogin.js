import React from "react";
import { LoginSocialApple } from "reactjs-social-login";
import { AppleLoginButton } from "react-social-login-buttons";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { socailLoginInitiate } from "../redux/actions/authentication";

function AppleLogin({ text, uri }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const parsedData = state?.data ? JSON.parse(state.data) : null;

  const onLoginStart = useCallback(() => {}, []);

  function handleUserLogin(data) {
    dispatch(
      socailLoginInitiate(
        {
          image: data?.picture || "",
          firstName: data?.user || "",
          lastName: data?.user || "",
          fullName: data?.fullName || "",
          email: data?.email,
          isEmailverified: true,
          countryCode: "india",
        },
        parsedData ? parsedData : null,
        state?.prevPage ? state.prevPage : null,
        navigate
      )
    );
  }
  return (
    <div className="social-login-inner-wrapper">
      <LoginSocialApple
        client_id={"passenger.labtest"}
        scope={"name email"}
        redirect_uri={`https://passenger.labtest.org.in/`}
        onLoginStart={onLoginStart}
        onResolve={({ provider, data }) => {
          console.log(provider, data);
          handleUserLogin(data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <AppleLoginButton text={text} style={{ borderRadius: "11px" }} />
      </LoginSocialApple>
    </div>
  );
}

export default AppleLogin;
