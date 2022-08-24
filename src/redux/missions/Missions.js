import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsApi = 'https://api.spacexdata.com/v3/missions';

// fetch missions thunk
export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async ({ limit }) => {
    const response = await axios.get(`${missionsApi}?limit=${limit}`);
    return response.data;
  },
);
const initialState = [];

// mission slice
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: {
      reducer: (state, action) => state.map((mission) => (mission.mission_id !== action.payload
        ? mission
        : { ...mission, reserved: true })),
    },
    leaveMission: {
      reducer: (state, action) => state.map((mission) => (mission.mission_id !== action.payload
        ? mission
        : { ...mission, reserved: false })),
    },
  },

  extraReducers: {
    [fetchMissions.fulfilled]: (state, { payload }) => {
      const requiredMissionsData = payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
      return requiredMissionsData;
    },
  },
});

export const selectMissions = (state) => state.missions;
export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
