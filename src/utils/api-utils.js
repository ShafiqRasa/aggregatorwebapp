import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const getHeader = (token) => {
  if (token) {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
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
    .catch((error) => error);

export const getRequest = async (url, token) => {
  return await axios
    .get(`${baseUrl}${url}`, { headers: getHeader(token) })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
