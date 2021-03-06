import React from "react";
import {Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("31.db");

const LastSCQOLITScreen = ({navigation, route}) => {
    const total = route.params.total
    const answers = route.params.answers

    const addToDatabase = () => {
        db.transaction(
            tx => {
                tx.executeSql(
                    `UPDATE survey SET score = ?`,
                    [total],
                    null,
                    (t, error) => {console.log(error);}
                );
            }
        );
    };

    const doneFunction = () => {
        addToDatabase()
        navigation.navigate("InfoList")
    }

    return(
        <ScrollView style = {styles.container}>
            <Text style = {styles.title}>
                Thank you for taking the survey!
                {"\n"}{"\n"}

                Your score is:
            </Text>
            <Text style = {styles.scoreText}>
                {route.params.total}/30
            </Text>

            {(route.params.total >= 20) &&
                <Text style = {styles.recommendText}>
                    Your survey score is high. We recommend you may want to talk to your GP.
                </Text>
            }
            <TouchableOpacity style={styles.doneBox} onPress = {() => doneFunction()}>
                <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        paddingTop: 10,
        textAlign:'center',
        fontSize:30,
    },
    scoreText:{
        textAlign: 'center',
        fontSize:50,
        color: 'red',
    },
    recommendText:{
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 17,
        marginHorizontal: 10,
    },
    doneBox: {
        backgroundColor: "#71A1D1",
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 45,
        bottom: 10,
    },
    doneText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    }
})

export default LastSCQOLITScreen;
