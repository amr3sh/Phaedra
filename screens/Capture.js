import React, { useState } from "react";
import {StyleSheet,Text,View,ImageBackground, TouchableOpacity} from "react-native";
import { Icon,Image } from "@rneui/themed";
// import { Image } from "react-native-elements";
import { COLORS, FONTS, images, SIZES } from "../constants";
import * as ImagePicker from "react-native-image-picker";
import requestCameraPermission from "../utils/Permission";
import { Snackbar } from "react-native-paper";

import LinearGradient from 'react-native-linear-gradient';


export default function Capture({ navigation }) {
  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);
  const options = {};

  const switchOnCamera = () => {
    const permissionGranted = requestCameraPermission();

    //Camera Permission
    if (permissionGranted) {
      ImagePicker.launchCamera(options, (res) => {
        const picData = {
          url: res.assets[0].uri,
          fileName: res.assets[0].fileName,
          type: res.assets[0].type,
        };
        // debugger
        navigation.navigate("Preview", { picData });
      });
    } else {
      setVisible(true);
    }
  };

  const pickImageToUpload = () => {
    ImagePicker.launchImageLibrary(options, (res) => {
      if (res.uri) {
        const picData = {
          url: res.uri,
          fileName: res.fileName,
          type: res.type,
        };
        navigation.navigate("Preview", { picData });
      }
    });
  };

  return (

    <ImageBackground
      source={images.loading}
      style={{ flex: 1, alignItems: "center", flexDirection: "column" }}
    >
      <Image
        source={images.img_top}
        style={{
          flex: 0.65,
          height: 500,
          width: 800,
          resizeMode: "contain",
          marginTop: -140,
        }}
      />

      <Image
        source={images.mainLogo}
        style={{
          flex: 0.2,
          height: 140,
          width: 200,
          resizeMode: "contain",
          marginTop: 0,
        }}
      />

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => switchOnCamera()}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
          }}
        >
          <LinearGradient
            colors={["#2B2B2D", "#1F4547"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 5, paddingHorizontal: 80, paddingVertical: 10 }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Capture</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pickImageToUpload()}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
          }}
        >
          <LinearGradient
            colors={["#1F4547", "#2B2B2D"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 5, paddingHorizontal: 80, paddingVertical: 10 }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Upload</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <Snackbar
        duration={4000}
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={{ backgroundColor: "#FFFFFF" }}
        theme={{ colors: { surface: "grey", accent: "black" } }}
        action={{
          label: "Okay",
          onPress: () => onDismissSnackBar(),
        }}
      >
        You need to allow access to your camera to use this feature.
      </Snackbar>
    </ImageBackground>

    // <ImageBackground
    //   source={images.loading}
    //   style={{ flex: 1, alignItems: "center", flexDirection: "column" }}
    // >
    //   <Image
    //     source={images.img_top}
    //     style={{
    //       flex: 0.65,
    //       height: 500,
    //       width: 800,
    //       resizeMode: "contain",
    //       marginTop: -140,
    //     }}
    //   />

    //   <Image
    //     source={images.mainLogo}
    //     style={{
    //       flex: 0.2,
    //       height: 140,
    //       width: 200,
    //       resizeMode: "contain",
    //       marginTop: 0,
    //     }}
    //   />

    //   <View
    //     style={{
    //       display: "flex",
    //       flexDirection: "row",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <Icon
    //       raised
    //       name="camera"
    //       type="font-awesome"
    //       color="#131316"
    //       size={40}
    //       onPress={() =>switchOnCamera()}
    //       style={{ padding: 300 }}
    //     />
    //     <Icon
    //       raised
    //       name="upload"
    //       type="font-awesome"
    //       color="#3c5ba5"
    //       size={40}
    //       style={{ padding: 300 }}
    //       onPress={() =>pickImageToUpload()}
    //     />
        
    //   </View>
    //   <View style={{ display: "flex", flexDirection: "row" }}>
    //     <Text style={{ ...FONTS.h3, color: COLORS.white, marginRight:50 }}>Capture</Text>
    //     <Text style={{ ...FONTS.h3, color: COLORS.white }}>Upload</Text>
    //   </View>

    //   <Snackbar
    //     duration={4000}
    //     visible={visible}
    //     onDismiss={onDismissSnackBar}
    //     style={{ backgroundColor: "#FFFFFF" }}
    //     theme={{ colors: { surface: "grey", accent: "black" } }}
    //     action={{
    //       label: "Okay",
    //       onPress: () => onDismissSnackBar(),
    //     }}
    //   >
    //     You need to allow access to your camera to use this feature.
    //   </Snackbar>
    // </ImageBackground>

  );
}

const styles = StyleSheet.create({});
