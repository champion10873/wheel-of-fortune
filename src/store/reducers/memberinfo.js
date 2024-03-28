import { createSlice } from "@reduxjs/toolkit";
 
const memberInfo = createSlice({
    name: 'memberinfo',
    initialState: [],
    reducers: {
        saveMember(state, action) {
            state = action.payload;
            return state;
        }
    }
});

export const { saveMember } = memberInfo.actions;
export default memberInfo.reducer;