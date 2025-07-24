import { createSlice } from "@reduxjs/toolkit";
import packages from "../../consumables/packages";

const initialState = {
    packages
}
const packageSlice = createSlice({
    name:"package",
    initialState,
    reducers:{
        selectPackage: (state, action) => {
            const selectedPackage = state.packages.find(
                (pkg) => pkg.id === action.payload
            );
            if (selectedPackage) {
                return {
                    ...state,
                    selectedPackage,
                };
            }
            return state;
        }
      
    }
})
export const { selectPackage } =packageSlice.actions;
export default packageSlice.reducer