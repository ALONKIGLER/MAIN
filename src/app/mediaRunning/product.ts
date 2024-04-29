import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Product } from "../../data/data";
import axios from "axios";

const initialState: Product[] = [
  
];   

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      
  
      // const productExists = state.find(p => p.id === action.payload.id);
      // if (!productExists) {
      //   console.log("sss",state)
      //   console.log("qq",action.payload )
      //   state.push(action.payload);
      //   const serializedState = JSON.stringify(state);
      //   localStorage.setItem("state", serializedState);
      // } else{
        //   console.log("poi", action.payload);
        //   // const index = state.findIndex(p => p.id === action.payload.id);
        //   // const updatedBob = {
          //   //   ...productExists,
          //   //   quantity: productExists.quantity + action.payload.quantity
          //   //   ,
          //   // };
          
          //   // state[index] = updatedBob;
          //   // const serializedState = JSON.stringify(state);
          //   // localStorage.setItem("state", serializedState);
          // }
            state.push(action.payload);
        },
    getProduct: (state) => {
    console.log("sss")
    console.log("sss",state)
      const productsStateString = localStorage.getItem("state");
      if (productsStateString !== null) {
     const productsState = JSON.parse(productsStateString);
      state.push(...productsState);
      }
    },
    removeProduct: (state, action: PayloadAction<Product>) => {


      const productIndex = state.findIndex(p => p.id === action.payload.id);
     if (productIndex !== -1) {
       state.splice(productIndex, 1); // Remove the product from the state array
      }
  
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const productExists = state.find(p => p.id === action.payload.id);
      if (!productExists) {
        state.push(action.payload);
      } else {
        const index = state.findIndex(p => p.id === action.payload.id);
        state[index] = action.payload;
      }
      const serializedState = JSON.stringify(state);
      // console.log("ll",serializedState)
      localStorage.setItem("state", serializedState);
    },
    // loadProduct: (state, action: PayloadAction<Slug>) => {
    //   const url = "https://kiglerserver.com/api/v1/product"; // Replace with your Node.js server URL


    //   axios
    //     .post(url)
    //     .then((response) => {
    //       console.log("Response from server:", response.data);
    //       // You'll need to adapt this part based on your server's response format
    //       const updatedProduct: Product = {
    //         id: response.data._id,
    //         name: response.data.name,
    //         price: 12,
    //         quantity: 12,
    //         image: response.data.imageURL,
    //         description: response.data.description,
    //         category: response.data.category,
    //         tags: ["response.data.tags"],
    //         link: "/response.data._id/", // Update this link
    //       };
          
    //       state.push(updatedProduct);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }, 
    removeAllProducts: (state) => {
      localStorage.removeItem('state');
      return [];
    },
  },
  
});

export const {removeAllProducts  ,addProduct,  updateProduct ,getProduct ,removeProduct} = productSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productSlice.reducer;


// function dispatch(arg0: any) {
//   throw new Error("Function not implemented.");
// }

