import axios from "axios";
import { AppDispatch } from "../store";
import { IQuitUser } from "../../models/IQuitUser";
import {QuitUserSlice} from "./QuitUserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


// export const fetchQuitUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(QuitUserSlice.actions.quitUsersFetching())
//         const response = await axios.get<IQuitUser[]>('');
//         dispatch(QuitUserSlice.actions.quitUsersFetchingSuccess(response.data))
//     } catch (err) {
//         if (err instanceof Error) {
//         dispatch(QuitUserSlice.actions.quitUsersFetchingError(err.message))
//         } else {
//             console.log('Unexpected error', err);
//         }
//     }
// }

export const fetchQuitUsers = createAsyncThunk(
    'quituser/fetchall',
    async(_, thunkAPI) => {
        try {
            const response = await axios.get<IQuitUser[]>('https://json.extendsclass.com/bin/4591d7dd24f7');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")           
        }

    }
)