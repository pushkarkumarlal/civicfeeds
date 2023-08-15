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
import DashboardScreen from './dashboard/dashboard'; // create this screen too

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Dashboard: DashboardScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);
