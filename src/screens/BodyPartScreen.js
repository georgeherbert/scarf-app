import React from 'react';
import {Image, StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

const checkSwitch = (bodyPart) => {
    switch(bodyPart) {
        case 'Head':
            return (<Image style={styles.feet} source={require('../../assets/Head.png')}/>)
        // break;
        case 'Neck':
            return (<Image style={styles.closeUp} source={require('../../assets/Neck.png')}/>)
        case 'Upper Body':
            return (<Image style={styles.closeUp} source={require('../../assets/UpperB.png')}/>)
        case 'Left Upper Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/RightUA.png')}/>)
        case 'Right Upper Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/LeftUA.png')}/>)
        case 'Lower Body':
            return (<Image style={styles.closeUp} source={require('../../assets/LowerBody.png')}/>)
        case 'Left Lower Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/LeftLowerArm.png')}/>)
        case 'Right Lower Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/RightLowerArm.png')}/>)
    }
}

const BodyPartScreen = ({route, navigation }) => {
    const bodyPart = route.params.paramKey
    return (
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 2, width: 250, justifyContent: 'center'}}>
                <Text style={styles.titleText} >Your mole is located in the: {bodyPart} </Text>
            </View>
            <View style={{flex: 6, justifyContent: 'center', backgroundColor: 'white'}}>
                {checkSwitch(bodyPart)}
            </View>
            <View style={{flex: 2.5, width: 300, justifyContent: 'center'}}>
                <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("MoleType")}>
                    <Text style = {styles.doneText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    closeUp: {
        flex:10,
        resizeMode: 'contain',
        width: 200,
        height: 200,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center'
    },
    // button: {
    //     alignItems: "center",
    //     backgroundColor: "#71A1D1",
    //     padding: 15,
    // },
    // text: {
    //     color: "white",
    // },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        position: "absolute",
        width: "97.5%",
        bottom: 10
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
});

//https://www.geeksforgeeks.org/switch-vs-else/ ---- may be useful for explaining decisions in portfolio
export default BodyPartScreen;