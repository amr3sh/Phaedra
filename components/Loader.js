import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, Modal } from "react-native-paper";
import { FONTS, SIZES } from "../constants";

export default function Loader({ loading }) {
  return (
    <Modal animationType="slide" transparent={true} visible={loading}>
      <View style={styles.modalView}>
        <ActivityIndicator size={50} color="#0000ff" />
        <Text style={{ ...FONTS.h3, marginTop: 40, textAlign: "center" }}>
          Processing Image
        </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    justifyContent: "center",
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
