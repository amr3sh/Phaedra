import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Image, Button, Icon } from "@rneui/themed";
import { SuggestionModal, InfoModal, Loader } from "../components";
import { COLORS, FONTS, images, SIZES } from "../constants";
import { getImageLabel, getImage, getPresetImage } from "../services/apiendpoints";

import Exif from 'react-native-exif';

import LinearGradient from 'react-native-linear-gradient';

export default function Preview({ route, navigation }) {
  const [picUrl, setPicUrl] = useState(null);
  const [picDataObj, setPicDataObj] = useState({});
  const [imgLabel, setImgLabel] = useState('');
  const [imageMetaData, setImageMetaData] = useState('');
  const [loading, setLoading] = useState(false);
  const [photoQuality, setPhotoQuality] = useState(false);
  const [showModal, setShowModal] = useState({
    suggestionModal: false,
    infoModal: false,
  });

  useEffect(() => {
    const { picData } = route.params;
    setPicUrl(picData.url);
    // debugger
    if(picData) {
      setPicDataObj(picData);
      getImageClass(picData);
    }
  }, [route]);

  //Managing the Image Label 
  const getImageClass = async (imageData) => {
    setLoading(true);
    const exif = await Exif.getExif(imageData.url);
    setImageMetaData(exif);
    const { data } = await getImageLabel(imageData);
    const label = JSON.parse(data);
    console.log(label.result)
    label.result === "Correct" ? setPhotoQuality(true) : setPhotoQuality(false);
    setImgLabel(label.result);
    setLoading(false);
  }

  const getEnhancedImage = async (imageData) => {
    setLoading(true);
    const { data } = await getImage(imageData);
    // debugger
    const finalImage = JSON.parse(data)
    // debugger
    setLoading(false);
    navigation.navigate("EnhancedImage", { picUrl: finalImage.status});
  };

  const getPresetAppliedImage = async (imageData) => {
    setLoading(true);
    const { data } = await getPresetImage(imageData);
    debugger
    const finalImage = JSON.parse(data)
    debugger
    setLoading(false);
    navigation.navigate("PresetApplied", { picUrl: finalImage.status});
  };
  

  const renderLabel = () =>
    photoQuality ? (
      <View>
        <Text
          style={{
            ...FONTS.h3,
            backgroundColor: "green",
            color: "white",
            padding: 10,
            marginBottom: 5,
            top: -20,
            borderRadius: 10,
            paddingHorizontal: 50,
          }}
        >
          GOOD
        </Text>
        <Text style={{ textAlign: "center", top: -15  }}>{imgLabel}</Text>
      </View>
    ) : (
      <View>
        <Text
          style={{
            ...FONTS.h3,
            backgroundColor: "red",
            color: "white",
            padding: 10,
            marginBottom: 5,
            top: -20,
            borderRadius: 10,
            paddingHorizontal: 50,
          }}s
        >
          BAD
        </Text>
        <Text style={{ textAlign: "center", top: -15 }}>{imgLabel}</Text>
      </View>
    );

  return (
    <View>
    <ImageBackground
      source={{ uri: picUrl }}
      style={{ height: SIZES.height - 50, width: SIZES.width }}
    >
      <View
        style={{
          top: SIZES.height - 720,
          display: "flex",
          backgroundColor: "lightgrey",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 20,
          marginHorizontal: 50,
          marginHorizontal: 90,
          elevation: 1,
        }}
      >
        <Text
          style={{
            ...FONTS.h2,
            padding: 20,
            color: "#3c5ba5",
            top: -10,
            fontWeight: "bold",
          }}
        >
          Photo Quality
        </Text>
        {renderLabel()}
      </View>
    </ImageBackground>

    <ImageBackground
      source={images.mainBG}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
        top: -10,
        height: 120,
        marginTop: 0
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Icon
          raised
          name="info-with-circle"
          type="entypo"
          color="#3c5ba5"
          size={25}
          style={styles.btnStyle}
          onPress={() =>
            setShowModal({
              infoModal: true,
              suggestionModal: false,
            })
          }
        />
        <Text style={{ color: "white", marginTop: -4, paddingBottom: 5, fontSize: 12 }}>
          Information
        </Text>
      </View>
      
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: 10,
        }}
      >
        <Icon
          raised
          name="settings"
          type="simple-line-icons"
          color="#3c5ba5"
          size={25}
          style={styles.btnStyle}
          onPress={() =>
            setShowModal({
              suggestionModal: true,
              infoModal: false,
            })
          }
        />
        <Text style={{ color: "white", marginTop: -4, paddingBottom: 5, fontSize: 12 }}>
          Recommend
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Icon
          raised
          name="camera-enhance"
          type="material-icons"
          color="#3c5ba5"
          size={25}
          style={styles.btnStyle}
          onPress={() => getEnhancedImage(picDataObj)}
        />
        <Text style={{ color: "white", marginTop: -4, paddingBottom: 5, fontSize: 12 }}>
          Enhance
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Icon
          raised
          name="filter"
          type="material"
          color="#3c5ba5"
          size={25}
          style={styles.btnStyle}
          onPress={() => getPresetAppliedImage(picDataObj)}
        />
              <Text style={{ color: "white", marginTop: -4, paddingBottom: 5, fontSize: 12 }}>
          Apply Preset
        </Text>
      </View>

      <SuggestionModal
        modalVisible={showModal.suggestionModal}
        data={imageMetaData}
        label={imgLabel}
        onHide={() =>
          setShowModal({
            suggestionModal: false,
            infoModal: false,
          })
        }
      />

      <InfoModal
        modalVisible={showModal.infoModal}
        data={imageMetaData}
        onHide={() =>
          setShowModal({
            suggestionModal: false,
            infoModal: false,
          })
        }
      />
    </ImageBackground>

    {loading && <Loader loading={loading} />}
  </View>


  );
}

const styles = StyleSheet.create({
  btnStyle: {},
});
