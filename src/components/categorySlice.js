import { createSlice,current } from "@reduxjs/toolkit";
import {products} from "./products";
import { products_types } from "../utils/constants";

const initialState={
    products:products,
}

const categorySlice=createSlice({
    name:'category',
    initialState,
    reducers:{
        filterOnCategoryAndProduct(state,action){
            // If no categories are selected, return the original products array
            if(action.payload.categories.length===0 && action.payload.prices.length===0)
                return {
                    ...state,
                    products:products
                }

                console.log('hereeee',action.payload.prices)
                
             // Filter categories based on selected categories and product types
            const updatedCategories=products.filter((product)=>{
               const categoryMatch=action.payload.categories.length===0 || action.payload.categories.includes(product.category_type);
               // Here if no products are selected we return true so all of the products of selected category will be displayed. 
               // If none of the product type of category are present in the selected products we again return true so all the products of selected categpory will be displayed.
               // Otherwise if none of the 2 statements are true we check if the selected products include the product type of the item we are iterating on, if yes we return true.
                const productMatch=action.payload.products.length===0 
                                  || !action.payload.products.some(selectedProduct=>products_types[product.category_type].includes(selectedProduct))
                                  || action.payload.products.includes(product.product_type);
                let productPriceRange=''
                switch(true){
                    case product.price > 1500:
                        productPriceRange='1500+'
                        break;

                    case product.price > 1000:
                        productPriceRange='1000-1500'
                        break;

                    case product.price > 500:
                        productPriceRange='500-1000'
                        break;
                    
                    case product.price > 0:
                        productPriceRange='0-500'
                        break;
                }
                
                console.log(productPriceRange,product.price)
                const priceMatch=action.payload.prices.length===0 
                                  || action.payload.prices.includes(productPriceRange)
            
               if(categoryMatch && productMatch && priceMatch)
                    return product
              })
          
              return{
                ...state,
                products:updatedCategories,
              }
         },
    }
})

export const {filterOnCategoryAndProduct}=categorySlice.actions
export const selectAllItems=(state)=>state.category;

export default categorySlice.reducer