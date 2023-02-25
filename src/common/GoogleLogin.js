import React from "react";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useCallback } from "react";
import { useState } from "react";
import { socailLoginInitiate } from "../redux/actions/authentication";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";

function GoogleLogin({ text }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const parsedData = state?.data ? JSON.parse(state.data) : null;

  const onLoginStart = useCallback(() => {}, []);

  function handleUserLogin(data) {
    dispatch(
      socailLoginInitiate(
        {
          image: data?.picture,
          firstName: data?.given_name,
          lastName: data?.family_name,
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
      <LoginSocialGoogle
        client_id={
          // "398656668658-33safng2srs6gegv3f5u7adqngfr79jt.apps.googleusercontent.com" ||
          "310723912321-33dn2kc09a3blbukq8eq5cmah5m8qqd0.apps.googleusercontent.com" ||
          ""
        }
        onLoginStart={onLoginStart}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        // redirect_uri={"https://passenger.labtest.org.in/landing"}
        onResolve={({ provider, data }) => {
          console.log(provider, data);
          handleUserLogin(data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton text={text} style={{ borderRadius: "11px" }} />
      </LoginSocialGoogle>
    </div>
  );
}

export default GoogleLogin;
