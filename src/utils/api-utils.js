import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const getHeader = (token) => {
  if (token) {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer 6|doR359sDWAhxwNnlPjyHDzmTzeHzYbhR2oHDTc8c`,
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
    .post(`${baseUrl}${url}`, data, {
      headers: getHeader(token),
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));

export const getRequest = async (url, token) => {
  console.log(getHeader(token));
  return await axios
    .get(`${baseUrl}${url}`, null, { headers: getHeader(token) })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
