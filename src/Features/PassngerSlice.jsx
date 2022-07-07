import { addData, deleteData, getData, updateData } from "./axioshelper";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchPassanger = createAsyncThunk(
  "passanger/fetchPassanger",
  async () => {
    const response = await getData("passenger?page=0&size=10");
    const passanger = response.data;
    return passanger;
  }
);
export const fetchArlines = createAsyncThunk("airlines", () => {
  const airlines = getData("airlines");
  return airlines;
});

export const fetchSelectedPassanger = createAsyncThunk(
  "passanger/fetchSelectedPassanger",
  (id) => {
    const selectedpassanger = getData(`passenger/${id}`);
    return selectedpassanger;
  }
);

export const addPassanger = createAsyncThunk(
  "passanger/addPassanger",
  (data, { dispatch }) => {
    console.log("add passanger", data);
    const response = addData("passenger", data);
    console.log(response);
    dispatch(fetchPassanger());
  }
);

export const updatePassanger = createAsyncThunk(
  "passanger/updatePassenger",
  (data, id) => {
    console.log("id,data", id, data);
    const response = updateData(`passenger/${id}`, data);
    return response;
  }
);

export const deletePassanger = createAsyncThunk(
  "passanger/deletePassanger",
  async (id, { dispatch }) => {
    const response = await deleteData(`passenger/${id}`);
    dispatch(fetchPassanger());
    return response.data;
  }
);

const initialState = {
  passangers: [],
  selectedPassanger: {},
  airlines: [],
};

const passangerSlice = createSlice({
  name: "passanger",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchPassanger.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, passangers: payload };
    },
    [fetchArlines.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, airlines: payload };
    },

    [fetchSelectedPassanger.fulfilled]: (state, { payload }) => {
      console.log("selectedFetched Successfully!");
      return { ...state, selectedPassanger: payload };
    },
    [deletePassanger.fulfilled]: (state, { payload }) => {
      console.log("delete Successfully!", payload);
    },
    [addPassanger.fulfilled]: (state, { payload }) => {
      console.log("add Successfully!", payload);
    },
    [updatePassanger.fulfilled]: (state, { payload }) => {
      console.log("update suceessfully ", payload);
    },
  },
});

export const getSelectedPassager = (state) =>
  state.passangerSlice.selectedPassanger;
export const getArlines = (state) => state.passangerSlice.airlines;
export default passangerSlice.reducer;
