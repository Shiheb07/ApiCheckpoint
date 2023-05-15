import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('userslice/fetchuser',async()=>{
const res = await axios.get('https://jsonplaceholder.typicode.com/users') 
return res.data
})

export const userSlice = createSlice({
    name : "UserSlice" ,
    initialState : [] ,
    reducers : {

    },
    extraReducers : (builder)=> {
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            return action.payload
        })
    }

})

export default userSlice.reducer