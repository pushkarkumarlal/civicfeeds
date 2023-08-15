import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 41,
    },

    container1: {
        flex: 1,
    },

    container2: {
        flex: 1,
        justifyContent: 'space-between',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    container3: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },

    container1_1: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    container1_2: {
        flex: 6,
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        height: 55,
        width: 320,
        borderRadius: 25,
        fontSize: 20,
        alignSelf: 'center',
        borderColor: 'black',

        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 3,

        marginBottom: 25,
        marginTop: 20,
    },

    createAccountImage: {
        resizeMode: 'contain',
    },

    registerButton: {
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignContent: 'center',
        height: 50,
        width: 90,
    },
});
export default styles;
