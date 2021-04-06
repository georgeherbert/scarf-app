import React, { useState,  } from 'react';

import {View, Text, StyleSheet, TouchableOpacity , ScrollView} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const SurveyScreen = ({navigation}) => {

    const finishFunction = () => {
        let total = a1+a2+a3+a4+a5+a6+a7+a8+a9+a10
        console.log("total= ", total )
        navigation.navigate("LastSCQOLITScreen", total)
    }

    const [a1, seta1] = useState(null)
    const [a2, seta2] = useState(null)
    const [a3, seta3] = useState(null)
    const [a4, seta4] = useState(null)
    const [a5, seta5] = useState(null)
    const [a6, seta6] = useState(null)
    const [a7, seta7] = useState(null)
    const [a8, seta8] = useState(null)
    const [a9, seta9] = useState(null)
    const [a10, seta10] = useState(null)

    return(
        <ScrollView persistentScrollbar={true} style={styles.scrollView}>
            <View style = {{marginHorizontal: '2.5%'}}>
                <Text style = {styles.startText}>
                    The purpose of this questionnaire is to measure how much having skin cancer has affected your quality of life
                    over the last week. Please answer scroll through the questionnaire and select an answer for all  ten questions.
                </Text>
                <View style = {{marginTop:15,zIndex:10}}>
                    <Text style = {styles.questionTitle}>Question 1</Text>
                    <Text style = {styles.questionText}>Over the last week, how much have you been concerned that your skin cancer might come back?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Very much so', value: 3},
                            {label: 'Moderately so', value: 2},
                            {label: 'Somewhat', value: 1},
                            {label:'Not at all', value:0},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => seta1(item.value)}
                    />
                </View>
                <View style = {{marginTop:15,zIndex:9}}>
                    <Text style = {styles.questionTitle}>Question 2</Text>
                    <Text style = {styles.questionText}>Over the last week, how much have you felt that you needed more information on how to recognize skin cancer
                        or prevent it?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Very much so', value: 3},
                            {label: 'Moderately so', value: 2},
                            {label: 'Somewhat', value: 1},
                            {label:'Not at all', value:0},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => seta2(item.value)}
                    />
                </View>
                <View style = {{marginTop:15,zIndex:8}}>
                    <Text style = {styles.questionTitle}>Question 3</Text>
                    <Text style = {styles.questionText}>Over the last week how much have you worried about covering up your skin and keeping out of the sun?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Very much so', value: 3},
                            {label: 'Moderately so', value: 2},
                            {label: 'Somewhat', value: 1},
                            {label:'Not at all', value:0},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => seta3(item.value)}
                    />
                </View>
                <View style = {{marginTop:15,zIndex:7}}>
                    <Text style = {styles.questionTitle}>Question 4</Text>
                    <Text style = {styles.questionText}>Over the last week, how much have you felt a need for reassurance from your doctor or nurse, in respect to your
                        skin cancer or its treatment?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Very much so', value: 3},
                            {label: 'Moderately so', value: 2},
                            {label: 'Somewhat', value: 1},
                            {label:'Not at all', value:0},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => seta4(item.value)}
                    />
                </View>
                <View style = {{marginTop:15,zIndex:6}}>
                    <Text style = {styles.questionTitle}>Question 5</Text>
                    <Text style = {styles.questionText}>Over the last week, how much have you felt emotional, anxious, depressed, guilty or stressed, in respect to your skin cancer or its treatment?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Very much so', value: 3},
                            {label: 'Moderately so', value: 2},
                            {label: 'Somewhat', value: 1},
                            {label:'Not at all', value:0},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => seta5(item.value)}
                    />
                </View>
                <View style = {{marginTop:15,zIndex:5}}>
                    <Text style = {styles.questionTitle}>Question 6</Text>
                    <Text style = {styles.questionText}>Over the last week, how much have you been bothered about any disfigurement or scarring, in respect to your skin cancer or its treatment?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Very much so', value: 3},
                            {label: 'Moderately so', value: 2},
                            {label: 'Somewhat', value: 1},
                            {label:'Not at all', value:0},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => seta6(item.value)}
                    />
                </View>
                <View style = {{marginTop:15,zIndex:4}}>
                    <Text style = {styles.questionTitle}>Question 7</Text>
                    <Text style = {styles.questionText}>Over the last week, how much have you felt shock or disbelief about having been diagnosed with skin cancer?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Very much so', value: 3},
                            {label: 'Moderately so', value: 2},
                            {label: 'Somewhat', value: 1},
                            {label:'Not at all', value:0},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => seta7(item.value)}
                    />
                </View>
                <View style = {{marginTop:15,zIndex:3}}>
                    <Text style = {styles.questionTitle}>Question 8</Text>
                    <Text style = {styles.questionText}>Over the last week, how much skin discomfort or inconvenience have you experienced, in respect to your skin
                        cancer or its treatment?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Very much so', value: 3},
                            {label: 'Moderately so', value: 2},
                            {label: 'Somewhat', value: 1},
                            {label:'Not at all', value:0},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => seta8(item.value)}
                    />
                </View>
                <View style = {{marginTop:15,zIndex:2}}>
                    <Text style = {styles.questionTitle}>Question 9</Text>
                    <Text style = {styles.questionText}>Over the last week, how much have you had concerns about dying from your skin cancer?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Very much so', value: 3},
                            {label: 'Moderately so', value: 2},
                            {label: 'Somewhat', value: 1},
                            {label:'Not at all', value:0},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => seta9(item.value)}
                    />
                </View>
                <View style = {{marginTop:15,zIndex:1}}>
                    <Text style = {styles.questionTitle}>Question 10</Text>
                    <Text style = {styles.questionText}>Over the last week, to what extent have you felt the need for emotional support from your family or friends, in
                        respect to your skin cancer or its treatment?</Text>
                    <DropDownPicker
                        items = {[
                            {label: 'Very much so', value: 3},
                            {label: 'Moderately so', value: 2},
                            {label: 'Somewhat', value: 1},
                            {label:'Not at all', value:0},
                        ]}
                        containerStyle = {styles.dropDownContainer}
                        labelStyle = {styles.dropDownLabel}
                        onChangeItem = {item => seta10(item.value)}
                    />
                </View>
                {/*<Text style = {styles.startText}>Thanks for doing the SCQOLIT survay. Tap the finished button below to get your results</Text>*/}
                <TouchableOpacity style = {styles.finishedButton} onPress ={finishFunction}>
                    <Text style = {styles.finishedText}>Finished</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    scrollView: {
        backgroundColor: 'white',
        flex: 1
    },
    startText:{
        marginTop:20,
        marginLeft:5,
        fontWeight:'bold',
        fontSize:18,
        textAlign: 'center'
    },

    questionView:{
        marginTop:10
    },
    questionTitle:{
        fontWeight: 'bold',
        fontSize:20,
        marginBottom:5,
        marginTop:10
    },
    questionText:{
        marginBottom:5,
        marginLeft:5
    },

    container: {
        flex: 1,
        marginTop: 150,
    },

    finishedButton:{
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        marginVertical:'10%',
    },
    finishedText:{
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    },

    dropDownContainer: {
        height: 40,
        marginTop: 5,
    },
    dropDownLabel: {
        fontSize: 20,


    },


})

export default SurveyScreen;
