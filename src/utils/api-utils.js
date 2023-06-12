import axios from "axios";

const getHeader = (token) => {
  if (token) {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer 7|hSUvevOn5E8nfrFwE4T2Z1PVtUQx7Of82mhLObIx`,
    };
  } else {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }
};
export const postRequest = async (url, data, token = null) =>
  await axios
    .post(url, data, { headers: getHeader(token) })
    .then((res) => res.data)
    .catch((error) => console.log(error));

export const getRequest = async (url, token) =>
  await axios
    .post(url, null, { headers: getHeader(token) })
    .then((res) => res.data)
    .catch((error) => console.log(error));
