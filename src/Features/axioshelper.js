import axios from "axios";

const baseurl = process.env.REACT_APP_URL;

export const getData = async (endpoints) => {
  return await axios.get(`${baseurl}/${endpoints}`);
};

export const addData = async (endpoints, data) => {
  const response = await axios.post(`${baseurl}/${endpoints}`, data);
  return response.data;
};
export const updateData = async (endpoints, data) => {
  console.log("data", data);
  const response = await axios.put(`${baseurl}/${endpoints}`, data);
  return response.data;
};
export const deleteData = async (endpoints) => {
  return await axios.delete(`${baseurl}/${endpoints}`);
};
