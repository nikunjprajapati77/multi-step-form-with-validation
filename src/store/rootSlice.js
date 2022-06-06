import { createSlice } from "@reduxjs/toolkit";

// Slice
const rootSlice = createSlice({
  name: "root",

  initialState: {
    FormStage: 1, // default page stage to show on page load
    FormPage1: "",
    FormPage2: "",
    Pics: "",
    Sign: "",
    SetFormPage1: "",
    SetFormPage2: "",
    FinalForm: "",
    SetFinalForm: "",
  },
  // Reducers
  reducers: {
    setFormPage1: (state, action) => {
      state.SetFormPage1 = action.payload;
    },
    setFormPage2: (state, action) => {
      state.SetFormPage2 = action.payload;
    },

    formStage: (state, action) => {
      state.FormStage = action.payload;
    },
    formPage1: (state, action) => {
      state.FormPage1 = action.payload;
    },
    formPage2: (state, action) => {
      state.FormPage2 = action.payload;
    },
    pics: (state, action) => {
      state.Pics = action.payload;
    },
    sign: (state, action) => {
      state.Sign = action.payload;
    },
    finalForm: (state, action) => {
      state.FinalForm = action.payload;
    },
    setFinalForm: (state, action) => {
      state.SetFinalForm = action.payload;
    },
  },
});

// Actions
export const {
  setFormPage1,
  setFormPage2,
  formStage,
  formPage1,
  formPage2,
  pics,
  finalForm,
  setFinalForm,
  sign,
} = rootSlice.actions;
export const reducer = rootSlice.reducer;
