import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { Link } from 'expo-router';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import styles from './otp-verification.style';

const rightArrow = require('../../../assets/logos/ArrowRightSmall.png');
const leftArrow = require('../../../assets/logos/ArrowLeftSmall.png');
const otpVerificationImage = require('../../../assets/logos/OtpVerification.png');

const OtpVerification = () => {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />

                <View style={styles.container1}>
                    <View style={styles.container1_1}>
                        <Link href="../phonenum/phonenum">
                            .
                            <Image
                                style={styles.topHeaderBackArrow}
                                source={leftArrow}
                            />
                        </Link>
                    </View>

                    <View style={styles.container1_2}>
                        <Image
                            style={styles.otpVerification}
                            source={otpVerificationImage}
                        />
                    </View>
                </View>

                <View style={styles.container2}>
                    <TextInput style={styles.input} textAlign="center" />
                    <TextInput style={styles.input} textAlign="center" />
                    <TextInput style={styles.input} textAlign="center" />
                    <TextInput style={styles.input} textAlign="center" />
                </View>

                <View style={styles.container3}>
                    <Link href="../user-info/user-info">
                        {' '}
                        <Image source={rightArrow} />
                    </Link>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default OtpVerification;
