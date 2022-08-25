import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "../redux/missions/Missions";
import rocketsReducer from "../redux/rockets/Rockets";

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;
