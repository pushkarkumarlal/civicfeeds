import React from 'react';
// import { View, SafereaView, Text, Pressable } from 'react-native';
// import { Link } from 'expo-router';

// import Loginpage from './login/loginpage';
// import OtpVerification from './createaccount/otp-verification-register-page/otp-verification';
// import UserInfo from './createaccount/user-info/user-info';

// const driver = () => {
//     return (
//         <>
//             <Loginpage />
//         </>
//     );
// };
// export default driver;

//import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './login/loginpage';
import DashboardScreen from './dashboard/dashboard';
import RegisterScreen from './createaccount/phonenum/phonenum'
import OtpVerificationScreen from './createaccount/otp-verification-register-page/otp-verification'
import UserInfoScreen from './createaccount/user-info/user-info';
import checkPhoneNumberRegisteredScreen from './forgetPassword/checkPhoneNumberRegistered';
import OtpVerificationForgetPasswordScreen from './forgetPassword/otpVerificationForgetPassword';
import createNewPasswordScreen from './forgetPassword/createNewPassword';


const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Dashboard: DashboardScreen,
    Register:RegisterScreen,
    OtpVerification:OtpVerificationScreen,
    UserInfo:UserInfoScreen,
    checkPhoneNumberRegistered:checkPhoneNumberRegisteredScreen,
    OtpVerificationForgetPassword:OtpVerificationForgetPasswordScreen,
    createNewPassword:createNewPasswordScreen
    
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);
