import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
      
    },

    container2: {
        flex: 9,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    container3: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
        marginTop:100,
    },

    container1_1: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    leftArrowImage: {
        resizeMode: 'contain',
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        marginTop:25,
        marginButtom:25,
    },
    input: {
        marginTop: 25,
        marginBottom: 25,
        backgroundColor: 'rgba(217, 217, 217, 0.5)',

        height: 55,
        width: 320,
        fontSize: 20,
        textAlign: 'center',

        alignSelf: 'center',
        borderColor: 'black',

        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 3,


        borderRadius:10,
    },

    details: {
        resizeMode: 'contain',
        alignItems: 'center',
    },

    registerButton: {
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignContent: 'center',
        height: 50,
        width: 90,
    },

    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    picker: {
        height: 50,
        width: 320,
        borderColor: '#000000',
        backgroundColor: 'lightgray',
        marginTop: 25,
        marginBottom: 25,
        borderRadius:25,
    },
});
export default styles;
