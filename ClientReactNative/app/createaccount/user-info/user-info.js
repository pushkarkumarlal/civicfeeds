import {React,useState} from "react";
import {View,SafeAreaView,Text,Image,TouchableOpacity,StatusBar,KeyboardAvoidingView} from 'react-native'
import { Link } from "expo-router";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import {Picker} from '@react-native-picker/picker';

const rightArrow=require('../../../assets/logos/ArrowRightSmall.png')
const leftArrow=require('../../../assets/logos/ArrowLeftSmall.png')
const detailsImage=require('../../../assets/logos/Details.png')
import styles from './user-info.style'

const UserInfo=()=>{

   
        const [selectedGender, setSelectedGender] = useState(''); // State to store the selected gender
      
        const handleGenderChange = (itemValue) => {
          setSelectedGender(itemValue);
        };

    return(
        <View style={{flex:1}} >
      <StatusBar  backgroundColor="#f0f0f0" barStyle="dark-content"/>
        <SafeAreaView style={styles.container}>
       

        <KeyboardAvoidingView  style={styles.container}  behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={styles.container1_1}>
                <Link href={'../otp-verification-register-page/otp-verification'} >.
                    <Image style={styles.leftArrowImage} source={leftArrow}/>
                </Link>
                </View>
                
                <View style={styles.container1_2}>
                <Image style={styles.details} source={detailsImage}/>
                    </View>
            </KeyboardAvoidingView>
           
                <KeyboardAvoidingView  style={styles.container2}  behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                
            <TextInput style={styles.input} placeholder="First Name*"  placeholderTextColor="black" textAlign="center"/>
            <TextInput style={styles.input} placeholder="Last Name*"  placeholderTextColor="black" textAlign="center"/>
            <TextInput style={styles.input} placeholder="User Name -Already taken"  placeholderTextColor="black" textAlign="center"/>
          

            <Picker
        selectedValue={selectedGender}
        style={styles.picker}
        onValueChange={(itemValue) => handleGenderChange(itemValue)}
      >
        <Picker.Item label="Gender*" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      <TextInput style={styles.input} placeholder="Country*"  placeholderTextColor="black" textAlign="center"/>
      <TextInput style={styles.input} placeholder="State/Province*"  placeholderTextColor="black" textAlign="center"/>
      <TextInput style={styles.input} placeholder="city/area*"  placeholderTextColor="black" textAlign="center"/>
      <TextInput style={styles.input} placeholder="Pincode*"  placeholderTextColor="black" textAlign="center"/>   

            </ScrollView>
            </KeyboardAvoidingView>
                    

            <KeyboardAvoidingView  style={styles.container3}  behavior={Platform.OS === 'ios' ? 'padding' : null}>
                
               <Link href='/otp-verification'> <Image source={rightArrow}/></Link>
                
            </KeyboardAvoidingView>

        </SafeAreaView>
       
        </View>
    )
}

export default UserInfo;