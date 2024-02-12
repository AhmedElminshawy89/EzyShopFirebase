import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {

    cartItems: [],
    favoriteItems: [],
    totalAmount:0,
    totalQuantity:0,
    quantityFavorite:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addItem:(state,action)=>{
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );

            state.totalQuantity++;

            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            }

            state.totalAmount = state.cartItems.reduce((total,item)=>total+Number(item.price) * Number(item.quantity),0)
        },
        addFavorite:(state,action)=>{
            const newFavorite = action.payload;
            const existingItem = state.favoriteItems.find((item)=>item.id===newFavorite.id);
            if(!existingItem){
                state.quantityFavorite++
                state.favoriteItems.push(
                    {
                        id: newFavorite.id,
                        productName: newFavorite.productName,
                        imgUrl: newFavorite.imgUrl,
                        price: newFavorite.price,
                    }
                )
                toast.success('The Product added to favorite')
            }
            else{
                toast.error('This item has already been added previously')
            }
            
        },
        deleteFavorite:(state,action)=>{
            const id = action.payload;
            const exist = state.favoriteItems.find((item)=>item.id===id);
            if(exist){
                state.favoriteItems = state.favoriteItems.filter((item)=>item.id !==id)
                state.quantityFavorite --
            }
        },
        deleteItem:(state,action)=>{
            const id = action.payload;
            const exisitingItem = state.cartItems.find(item=>item.id===id)

            if(exisitingItem){
                state.cartItems=state.cartItems.filter(item=>item.id!==id)
                state.totalQuantity=state.totalQuantity - exisitingItem.quantity
            }   
            state.totalAmount = state.cartItems.reduce((total,item)=>total + Number(item.price) * Number(item.quantity),0)
        }
    }
})


export const cartActions =cartSlice.actions;
export default cartSlice.reducer;