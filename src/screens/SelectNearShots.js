import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import * as SQLite from "expo-sqlite";


const db = SQLite.openDatabase("22.db");

const SelectNearShots = ({ route }) => {
    const [entries, setEntries] = useState([]);

    //Get a list of all the near shot images for a particular mole entry
    useEffect(() => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "SELECT near_shot, date FROM mole_entry WHERE mole_id = ?;",
                    [route.params.id],
                    (_, { rows }) => setEntries(rows._array)
                );
            }
        );
    }, []);

    const [selectedImages, setSelectedImages] = useState([])
    const [change, setChange] = useState(0)


    const displayFarShots = ({ item }) => {
        let uri = item.near_shot

        return(
            <View style = {styles.nearFarShot}>
            <TouchableOpacity style = {styles.nearFarShot} onPress = {() => HandleMultipleSelection(uri)}>
                {selectedImages.includes(uri)
                    ?
                <Image
                    style = {[styles.image, {opacity : 0.5}]}
                    source = {{ uri: uri}}
                   // onLayout = {console.log("selected")}
                />
                :
                <Image
                    style = {[styles.image, {opacity : 1}]}
                    source = {{ uri: uri}}
                  //  onLayout = {console.log("not selected")}
                />}
            </TouchableOpacity>
                <View style = {styles.moleInfo}>
                    <Text style = {styles.moleName}>{item.name}</Text>
                    <Text style = {styles.moleDetails}>{item.comments}</Text>
                    <Text style = {styles.moleDetails}>Last updated: {item.date}</Text>
                </View>
            </View>
        );
    };

    const HandleMultipleSelection = (uri) => {
        let nextSelectedImages = selectedImages

        if (nextSelectedImages.includes(uri)) {
            nextSelectedImages = nextSelectedImages.filter(_uri => _uri !== uri)
        }else {
            nextSelectedImages.push(uri)
        }

        setSelectedImages(nextSelectedImages)
        setChange(change + 1)
    }

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Near shot images:</Text>
           {/* <TouchableOpacity style = {styles.image}  onPress = {console.log("selectedImages")}>
                <Text style={[styles.title]}>DONE</Text>
            </TouchableOpacity>*/}

            <FlatList
                data = {entries}
                extraData = {change}
                renderItem = {displayFarShots}
                keyExtractor = {() => `${Math.floor(Math.random() * 10000)}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 300,
        width: 150,
    },
    nearFarShot: {
        flexDirection: "row",
        marginHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        borderStyle: 'solid',
    },
    title: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 20,
    },
    moleDetails: {
        fontSize: 18,
        paddingLeft: 10,
    },
});

export default SelectNearShots;
