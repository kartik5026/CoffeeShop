const { createSlice } = require("@reduxjs/toolkit");
const initialState = []
export const Slice = createSlice({
    name:"Slice",
    initialState,
    reducers:{
        addToCart: (state,action)=>{
            const obj = action.payload;
           state.push(obj);
        },
        removeFromCart: (state,action)=>{
            state.splice(action.payload,1);
        },
        clearCart:(state)=>{
            state.length=0;
        }
    }
})

export const {addToCart,removeFromCart,clearCart} = Slice.actions;
export default Slice.reducer;