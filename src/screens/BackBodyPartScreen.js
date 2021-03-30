import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';

const checkBackSwitch = (bodyPart) => {
    switch(bodyPart) {
        case 'Head or Neck':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseHead.png')}/>)
        case 'Torso':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseTorso.png')}/>)
        case 'Left Upper Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseLUA.png')}/>)
        case 'Right Upper Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseRUA.png')}/>)
        case 'Left Lower Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseLLA.png')}/>)
        case 'Right Lower Arm':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseRLA.png')}/>)
        case 'Dorsum Left Hand':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseLH.png')}/>)
        case 'Dorsum Right Hand':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseRH.png')}/>)
        case 'Left Upper Leg':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseLUL.png')}/>)
        case 'Right Upper Leg':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseRUL.png')}/>)
        case 'Left Lower Leg':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseLLL.png')}/>)
        case 'Right Lower Leg':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseRLL.png')}/>)
        case 'Plantar Surface Left Foot':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseLFoot.png')}/>)
        case 'Plantar Surface Right Foot':
            return (<Image style={styles.closeUp} source={require('../../assets/Back/CloseRFoot.png')}/>)
    }
}

const BackBodyPartScreen = ({route, navigation }) => {
    const bodyPart = route.params.bodyPart;
    const bool = route.params.highlight;
    return (
        <ScrollView persistentScrollbar={true} style={styles.scrollView}>
            <Text style={styles.titleText}>Your mole is located on the: {bodyPart} </Text>
            <Text style={styles.subText}>{bool}</Text>
            <View style = {{alignItems: 'center'}}>
                {checkBackSwitch(bodyPart)}
            </View>
            <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("MoleType")}>
                <Text style = {styles.doneText}>Confirm</Text>
            </TouchableOpacity>
        </ScrollView>

        // <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        //     <View style={{flex: 3, width: 250, justifyContent: 'center'}}>
        //         <Text style={styles.titleText} >Your mole is located on the: {bodyPart} </Text>
        //     </View>
        //     <View style={{flex: 6, justifyContent: 'center', backgroundColor: 'white'}}>
        //         {checkBackSwitch(bodyPart)}
        //     </View>
        //     <View style={{flex: 2.5, width: 300, justifyContent: 'center'}}>
        //         <TouchableOpacity style={styles.doneBox} onPress={() => navigation.navigate("MoleType")}>
        //             <Text style = {styles.doneText}>Confirm</Text>
        //         </TouchableOpacity>
        //     </View>
        // </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: 'center',
    },
    scrollView: {
        backgroundColor: 'white',
    },
    closeUp: {
        flex:10,
        resizeMode: 'contain',
        width: 200,
        height: 200,
    },
    titleText: {
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 10,
    },
    subText: {
        fontSize: 16,
        textAlign: 'center',
        paddingBottom: 30,
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
        // position: "absolute",
        width: "95%",
        bottom: 10,
        marginTop: 60,
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
});

export default BackBodyPartScreen;