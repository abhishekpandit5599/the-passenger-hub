import { createSelector } from "reselect";

export const getMemoizedAuthenticationData = createSelector(
  (state) => state.authentication,
  (authenticationState) => {
    const {
      loginData,
      loginSuccess,
      otpSend,
      loginLoader,
      logoutSuccess,
      drawerState,
      registerSuccess,
      registerLoader,
      changePasswordLoader,
      changePasswordSuccess,
      userProfileDetail,
      userProfileLoader,
      userProfileSuccess,
      forgotPasswordSuccess,
      forgotPasswordLoader,
      forgotLinkVerificationLoader,
      forgotLinkVerificationSuccess,
      forgotLinkVerificationKey,
      resetPasswordLoader,
      resetPasswordSuccess,
      contactUsFormLoader,
      contactUsFormSuccess,
    } = authenticationState;

    return {
      loginData,
      loginSuccess,
      otpSend,
      loginLoader,
      logoutSuccess,
      drawerState,
      registerSuccess,
      registerLoader,
      changePasswordLoader,
      changePasswordSuccess,
      userProfileDetail,
      userProfileLoader,
      userProfileSuccess,
      forgotPasswordSuccess,
      forgotPasswordLoader,
      forgotLinkVerificationLoader,
      forgotLinkVerificationSuccess,
      forgotLinkVerificationKey,
      resetPasswordLoader,
      resetPasswordSuccess,
      contactUsFormLoader,
      contactUsFormSuccess,
    };
  }
);
