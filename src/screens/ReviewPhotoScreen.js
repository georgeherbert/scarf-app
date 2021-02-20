import React from "react";
import { StyleSheet } from "react-native";
import Review from "../components/Review"

const ReviewPhotoScreen = ({ navigation, route }) => {
  return (
    <Review navigation = {navigation} route = {route} />
  );
};

const styles = StyleSheet.create({});

export default ReviewPhotoScreen;