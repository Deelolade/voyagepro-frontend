import { createSlice } from "@reduxjs/toolkit";
import packages from "../../consumables/packages";

const initialState = {
    packages
}
const packageSlice = createSlice({
    name:"package",
    initialState,
    reducers:{
      
    }
})
export const { selectPackage } =packageSlice.actions;
export default packageSlice.reducer