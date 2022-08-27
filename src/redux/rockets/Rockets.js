import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];
const rocketsApi = "https://api.spacexdata.com/v3/rockets";
export const fetchRockets = createAsyncThunk(
  "rockets/fetchRockets",
  async () => {
    const response = await axios.get(`${rocketsApi}`);
    return response.data;
  }
);

const rocketsSlice = createSlice({
  name: "rockets",
  initialState,
  reducers: {
    reserveRocket: {
      reducer: (state, action) =>
        state.map((rocket) => (
          rocket.id !== action.payload ? rocket : {...rocket, reserved:true}
        )
        ),
    },
    cancelReserve: {
      reducer: (state, action) =>
        state.map((rocket) => (
          rocket.id !== action.payload ? rocket : {...rocket, reserved: false}
        )
        ),
    },
  },
  extraReducers: {
    [fetchRockets.fulfilled]: (state, { payload }) => {
      const requiredRocketData = payload.map((rocket) => ({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        description: rocket.description,
        image: rocket.flickr_images[0],
        reserved: false,
      }));
      return requiredRocketData;
    },
  },
});

export default rocketsSlice.reducer;

export const { reserveRocket, cancelReserve } = rocketsSlice.actions;

export const selectRockets = (state) => state.rockets;
