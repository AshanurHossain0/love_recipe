import { createSlice } from "@reduxjs/toolkit";

const initialState={isToastOpen:false,message:"",severity:"success"}

export const toastSlice=createSlice({
    name:"toast",
    initialState,
    reducers:{
        setToast:(state,action)=>{
            state.isToastOpen=action.payload.isToastOpen;
            if(action.payload.message) state.message=action.payload.message;
            if(action.payload.severity) state.severity=action.payload.severity;
        }
    }
})

export const {setToast}=toastSlice.actions;
export default toastSlice.reducer;