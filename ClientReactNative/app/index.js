import React from "react";
import {View,SafereaView,Text,Pressable} from 'react-native'
import {Link} from 'expo-router'

import Loginpage from './login/loginpage'
import OtpVerification from "./createaccount/otp-verification-register-page/otp-verification";
import UserInfo from "./createaccount/user-info/user-info";

const driver=()=>{
    return(
        <>
       <Loginpage/>
        </>
    )
}
export default driver;