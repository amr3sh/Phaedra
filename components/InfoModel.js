import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";

import {Icon} from '@rneui/themed';
import { Loader } from ".";
import { FONTS } from "../constants";

export default function InfoModal({ modalVisible, onHide, data }) {
  const [loading, setLoading] = useState(false);

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
          <View style={styles.modalHeader}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onHide(!modalVisible)}
            >
              <Icon name="times" type="font-awesome" size={25} />
            </Pressable>
            <Text style={{ fontWeight: "bold", color: "#3c5ba5", ...FONTS.h2, marginTop: -20, }}>Photo Meta Data</Text>
            <Text style={{ textAlign: 'center' }}>{`Shutter Speed: ${(data.exif || {}).ExposureTime}`}</Text>
            <Text style={{ textAlign: 'center' }}>{`ISO: ${(data.exif || {}).ISOSpeedRatings}`}</Text>
          </View>
        </View>
        {loading && <Loader loading={loading} />}
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
  modalHeader: {
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
    borderRadius: 20,
    padding: 10,
    bottom: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    // elevation: 2,
  },
  buttonOpen: {
    // backgroundColor: "#F194FF",
  },
  buttonClose: {
    // backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    bottom: 15,
    ...FONTS.h3,
  },
});
