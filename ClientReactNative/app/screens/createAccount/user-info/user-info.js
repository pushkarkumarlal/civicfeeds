import { React, useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView,
} from 'react-native';
import { Link } from 'expo-router';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';

const rightArrow = require('../../../../assets/logos/ArrowRightSmall.png');
const leftArrow = require('../../../../assets/logos/ArrowLeftSmall.png');
const detailsImage = require('../../../../assets/logos/Details.png');
import styles from './user-info.style';

const UserInfo = () => {
    const [selectedGender, setSelectedGender] = useState(''); // State to store the selected gender

    const handleGenderChange = (itemValue) => {
        setSelectedGender(itemValue);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : null}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollViewContent}
                    >
                    

                    <View style={styles.container1}>
                        <Image style={styles.details} source={detailsImage} />
                    </View>
                

                <View>
                    
                        <TextInput
                            style={styles.input}
                            placeholder="First Name*"
                            placeholderTextColor="black"
                            textAlign="center"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name*"
                            placeholderTextColor="black"
                            textAlign="center"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="User Name -Already taken"
                            placeholderTextColor="black"
                            textAlign="center"
                        />

                        <Picker
                            selectedValue={selectedGender}
                            style={styles.picker}
                            onValueChange={(itemValue) =>
                                handleGenderChange(itemValue)
                            }
                            
                        >
                            <Picker.Item label="Gender*" value="" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                        </Picker>

                        <TextInput
                            style={styles.input}
                            placeholder="Country*"
                            placeholderTextColor="black"
                            textAlign="center"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="State/Province*"
                            placeholderTextColor="black"
                            textAlign="center"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="city/area*"
                            placeholderTextColor="black"
                            textAlign="center"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Pincode*"
                            placeholderTextColor="black"
                            textAlign="center"
                        />
                    
                </View>

                <View
                    style={styles.container3}
                
                >
                    <Link href="/otp-verification">
                        {' '}
                        <Image source={rightArrow} />
                    </Link>
                </View>
                </ScrollView>
                </KeyboardAvoidingView>
            
        </SafeAreaView>
    );
};

export default UserInfo;
