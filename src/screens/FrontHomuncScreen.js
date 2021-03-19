import React from "react";
import {View, StyleSheet, ScrollView, TouchableOpacity, Image} from "react-native";

const FrontHomuncScreen = ({navigation}) => {
    const clickHandler = (bodyPart) => {
        console.log(bodyPart, "homunc log")
        navigation.navigate("BodyPart", {paramKey: bodyPart})
    }
    return (
        <ScrollView persistentScrollbar={true} style={styles.scrollView}>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Rotate")}>
                    <Image style={styles.rotate} source={require('../../assets/New/Rotation.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Head or Neck")}>
                    <Image style={styles.head} source={require('../../assets/New/Head.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Rotate")}>
                    <Image style={styles.rotate} source={require('../../assets/New/Rotation.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Arm")}>
                    <Image style={styles.arm} source={require('../../assets/New/RightUA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso")}>
                    <Image style={styles.chest} source={require('../../assets/New/ChestTop.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Arm")}>
                    <Image style={styles.arm} source={require('../../assets/New/LeftUA.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Arm")}>
                    <Image style={styles.lowerArm} source={require('../../assets/New/RightLA.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso")}>
                    <Image style={styles.body} source={require('../../assets/New/FrontMiddle.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Arm")}>
                    <Image style={styles.lowerArm} source={require('../../assets/New/LeftLA.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Volar Right Hand")}>
                    <Image style={styles.hand} source={require('../../assets/New/RightHand.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Torso")}>
                    <Image style={styles.body} source={require('../../assets/New/FrontLower.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Volar Left Hand")}>
                    <Image style={styles.hand} source={require('../../assets/New/LeftHand.png')} />
                </TouchableOpacity>
            </View>
            <View style = {styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Upper Leg")}>
                    <Image style={styles.leg} source={require('../../assets/New/RightUL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Upper Leg")}>
                    <Image style={styles.leg} source={require('../../assets/New/LeftUL.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Right Lower Leg")}>
                    <Image style={styles.lowerLeg} source={require('../../assets/New/RightLL.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Left Lower Leg")}>
                    <Image style={styles.lowerLeg} source={require('../../assets/New/LeftLL.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.flexbox}>
                <TouchableOpacity onPress={() => clickHandler("Dorsum Right Foot")}>
                    <Image style={styles.foot} source={require('../../assets/New/RightFoot.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => clickHandler("Dorsum Left Foot")}>
                    <Image style={styles.foot} source={require('../../assets/New/LeftFoot.png')} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

//although some of the values are similar, they are very accurate so the body flows completely.
//so they can't be merged together!
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    flexbox: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    head: {
        width: 115,
        height: 95,
        resizeMode: 'contain',
    },
    arm: {
        width: 75,
        height: 100,
        resizeMode: 'contain',
    },
    chest: {
        width: 110,
        height: 100,
        resizeMode: 'contain',
    },
    lowerArm: {
        width: 76,
        height: 58,
        resizeMode: 'contain',
    },
    body: {
        width: 109,
        height: 57,
        resizeMode: 'contain',
    },
    hand: {
        width: 69,
        height: 55,
        resizeMode: 'contain',
    },
    leg: {
        width: 137,
        height: 87,
        resizeMode: 'contain',
    },
    lowerLeg: {
        width: 133,
        height: 90,
        resizeMode: 'contain',
    },
    foot: {
        width: 138,
        height: 50,
        resizeMode: 'contain',
    },
    rotate: {
        width: 160,
        height: 95,
        resizeMode: 'contain',
    },
});

export default FrontHomuncScreen;