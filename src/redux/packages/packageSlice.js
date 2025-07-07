import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedUsers : [],
    selectedUser : null,
}
const packageSlice = createSlice({
    name:"chat",
    initialState,
    reducers:{
       selectPackage:{

       }
    }
})
export const { selectPackage } =packageSlice.actions;
export default packageSlice.reducer