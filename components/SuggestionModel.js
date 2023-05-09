import React from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { Image, Icon } from "@rneui/themed";
import { FONTS } from "../constants";

export default function SuggestionModal({ modalVisible, onHide, data, label }) {
  const getRecommendedShutterSpeed = (shutterSpeed) => {
    if(shutterSpeed > 1/200 && shutterSpeed < 1/800) return "1/30"
    if(shutterSpeed > 1/800) return "1/60"
    if(shutterSpeed < 1/20) return "1/40"
    return ""
  }

  const getRecommendedISO = (iso) => {
    if(iso > 1600 && iso < 2500) return "400"
    if(iso > 2500) return "500"
    if(iso < 200) return "400"
    return ""
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        onHide(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => onHide(!modalVisible)}
          >
            <Icon name="times" type="font-awesome" size={25} />
          </Pressable>
          <Text style={styles.modalText}>Suggest Settings</Text>
        {label === "Correct" && <Text style={{ textAlign: "center" }}>Image quality is good. No settings recommended.</Text>}
        {(label === "Shutter Speed High" || label === "Shutter Speed Low") && <Text style={{ textAlign: 'center' }}>{`Shutter Speed: ${getRecommendedShutterSpeed((data.exif || {}).ExposureTime)}`}</Text>}
        {(label === "ISO High" || label === "ISO Low") &&<Text style={{ textAlign: 'center' }}>{`ISO: ${getRecommendedISO((data.exif || {}).ISOSpeedRatings)}`}</Text>}
        </View>
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 60,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  button: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 10,
    top: -30,
    justifyContent: "flex-end",
  },
  buttonOpen: {
    // backgroundColor: "#F194FF",
  },
  buttonClose: {
    // backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginTop: -20,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "#3c5ba5",
    ...FONTS.h2,
  },
});
