import campaignSlice from "../slices/Campaign.slice";
import AppSlice from "../slices/App.slice";
import GeneralSlice from "../slices/General.slice";

export const reducers = {
  App: AppSlice.reducer,
  Campaign: campaignSlice.reducer,
  General: GeneralSlice.reducer
};
