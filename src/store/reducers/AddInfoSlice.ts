import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AddInfoState{
    fullname: string;
    age: string;
    diagnoses: string;
}

const initialState: AddInfoState = {
    fullname: '',
    age: '',
    diagnoses: '',
}


export const AddInfoSlice = createSlice({
    name: "addInfo",
    initialState,
    reducers:{
        changeAddInfo(state, action: PayloadAction<AddInfoState>){
            state.fullname = action.payload.fullname;
            state.age = action.payload.age;
            state.diagnoses = action.payload.diagnoses;
        }
    }
})

export default AddInfoSlice.reducer;

