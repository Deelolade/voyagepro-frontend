import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    packages: [],
    selectedPackage: null,
}
const packageSlice = createSlice({
    name: "package",
    initialState,
    reducers: {
        selectPackage: (state, action) => {
            state.selectedPackage = action.payload; 
        },

    }
})
export const { selectPackage } = packageSlice.actions;
export default packageSlice.reducer