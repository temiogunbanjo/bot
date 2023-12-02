import { createSlice } from "@reduxjs/toolkit";
import { getAllCampaigns } from "../actions/campaign.action";
import { clearStorage } from "../../utility/storage";

const initialState = {
  campaigns: {
    isLoading: false,
    data: [],
  },
};

const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    logout(state, action) {
      window.location.href = "/";
      clearStorage();
    },
  },
  extraReducers: (builder) => {
    // CLIENT LOGIN
    builder
      .addCase(getAllCampaigns.fulfilled, (state, { payload, ...rest }) => {
        console.log("fulfilled", state, payload);
        state.campaigns.isLoading = false;
        state.campaigns.data = payload;
      })
      .addCase(getAllCampaigns.pending, (state, action) => {
        state.campaigns.isLoading = true;
      })
      .addCase(getAllCampaigns.rejected, (state, { error }) => {
        console.log("rejected");
        state.campaigns.isLoading = false;
      });

    // CLIENT REGISTER
    // builder
    //   .addCase(registerApi.fulfilled, (state, { payload }) => {
    //     console.log("fulfilled", payload);
    //     state.register.isLoading = false;
    //     notify("Registration successful", { type: "success" });
    //     window.location.href = "/email_sent";
    //   })
    //   .addCase(registerApi.pending, (state, action) => {
    //     state.register.isLoading = true;
    //   })
    //   .addCase(registerApi.rejected, (state, { error }) => {
    //     console.log("rejected");
    //     state.register.isLoading = false;
    //   });
  },
});

export const { logout } = campaignSlice.actions;
export default campaignSlice;
