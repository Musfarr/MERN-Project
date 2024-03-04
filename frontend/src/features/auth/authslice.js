import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'



const user = JSON.parse(localStorage.getItem("user"))


const initialstate = {
    user : null , 
    isError : false,
    isSuccess : false ,
    isLoading : false, 
    message : ''
}


export const authslice = createSlice({
    name : 'auth',
    initialstate ,
    reducers : {
        reset :(state) => {
            state.isError =false
            state.isLoading = false
            state.message = ''
            state.isSuccess = false
        }
     }
})


export const register = createAsyncThunk('auth/register' , async (user , thunkapi ) => {
    try {
        
    } catch (error) {
        
    }
} )

export const {reset} = authslice.actions

export default authslice.reducer