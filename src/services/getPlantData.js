import axios from "axios";

const getPlantData = async (base64EncodedArrayFiles) => {
  const data = {
    api_key: "JwvVNsArIzyA0SqeBmYZGkJkkHVTrfWuyVEwVxCmsKQcgibYps",
    images: base64EncodedArrayFiles,
  };

  return await axios
    .post("https://api.plant.id/v2/identify", data)
    .then((res) => {
      console.log("Success:", res.data);
      return res.data;
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};

export default getPlantData;
