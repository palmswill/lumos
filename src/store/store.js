import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./reducers/HouseReducer";

export default configureStore({
  reducer: {
    house: houseReducer
  }
});
