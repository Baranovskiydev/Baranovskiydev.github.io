import { IQuitUser } from "../../models/IPresentUser"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchQuitUsers } from "./ActionCreators";

interface QuitUserState {
    users: IQuitUser[];
    isLoading: boolean;
    error: string;
}

const initialState: QuitUserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const QuitUserSlice = createSlice({
    name: "QuitUser",
    initialState,
    reducers:{
    },
    extraReducers: {
        [fetchQuitUsers.fulfilled.type]: (state, action: PayloadAction<IQuitUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchQuitUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchQuitUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default QuitUserSlice.reducer;