import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosServices from "../../utility/defaultAxiosService";

export const getAllCampaigns = createAsyncThunk(
  "campaign/getAllCampaigns",
  async (thunkAPI) => {
    try {
      const res = await axiosServices.get(`/campaigns`);
      const data = res?.data?.payload;
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      throw error;
    }
  }
);

export const getSingleCampaign = createAsyncThunk(
  "campaign/getSingleCampaign",
  async (campaignId, thunkAPI) => {
    try {
      const res = await axiosServices.get(`/campaign/${campaignId}`);
      const data = res?.data?.payload;
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      throw error;
    }
  }
);

export const getSingleCategory = createAsyncThunk(
  "campaign/getSingleCategory",
  async (categoryId, thunkAPI) => {
    try {
      const res = await axiosServices.get(`/campaigns/category/${categoryId}`);
      const data = res?.data?.payload;
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      throw error;
    }
  }
);
