
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import LoginScreen from './screens/login/loginPage';
import DashboardScreen from './screens/dashBoard/dashboard';
import RegisterScreen from './screens/createAccount/phonenum/phonenum'
import OtpVerificationScreen from './screens/createAccount/otp-verification-register-page/otp-verification'
import UserInfoScreen from './screens/createAccount/user-info/user-info';
import checkPhoneNumberRegisteredScreen from './screens/forgetPassword/checkPhoneNumberRegistered';
import OtpVerificationForgetPasswordScreen from './screens/forgetPassword/otpVerificationForgetPassword';
import createNewPasswordScreen from './screens/forgetPassword/createNewPassword';


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
