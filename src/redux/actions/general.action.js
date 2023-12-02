import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosServices from "../../utility/defaultAxiosService";

export const getAllSchools = createAsyncThunk(
  "schools/getAllSchools",
  async (thunkAPI) => {
    try {
      const res = await axiosServices.get(`/schools`);
      const data = res?.data?.payload;
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      throw error;
    }
  }
);
