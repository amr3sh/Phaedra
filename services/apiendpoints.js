import RNFetchBlob, { FetchBlobResponse } from "rn-fetch-blob";

const BASE_URL = "http://127.0.0.1:5000/";

export const getImage = async (image) => {
  const res = await RNFetchBlob.fetch(
    "POST",
    "http://127.0.0.1:5000/EnhanceImage",
    {
      "Content-Type": "multipart/form-data"
    },
    [
      {
        name: "photo",
        filename: image.fileName,
        type: image.type,
        data: RNFetchBlob.wrap(image.url)
   }]
   )
   return res
};

export const getPresetImage = async (image) => {
  const res = await RNFetchBlob.fetch(
    "POST",
    "http://127.0.0.1:5000/PresetImage",
    {
      "Content-Type": "multipart/form-data"
    },
    [
      {
        name: "photo",
        filename: image.fileName,
        type: image.type,
        data: RNFetchBlob.wrap(image.url)
   }]
   )
   return res
};

export const getImageLabel = async (image) => {
  const res = await RNFetchBlob.fetch(
    "POST",
    "http://127.0.0.1:5000/qualityCheck",
    {
      "Content-Type": "multipart/form-data"
    },
    [
      {
        name: "photo",
        filename: image.fileName,
        type: image.type,
        data: RNFetchBlob.wrap(image.url)
   }]
   )
   return res
};
