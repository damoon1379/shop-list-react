import React from 'react'
import {useState,createContext} from 'react'
import{PRODUCT} from './products'

export const ShopContext = createContext(null);

const getDefault = ()=>{
    const item ={};
    for(let i=0;i<PRODUCT.length;i++){
        item[i]=0;
    }
    return item;
}


export const ShopContextProvider = (props)=>{

const [shopped,setShopped] = useState(getDefault());

const setDefault = ()=>{
    const item ={};
    for(let i=0;i<PRODUCT.length;i++){
        item[i]=0;
    }
    setShopped(item);
}


const addToCart =(itemId)=>{
        setShopped(shopped=>({...shopped,[itemId]:shopped[itemId]+1}));
        console.log(shopped);
        }

const getTotal = ()=>{
    let total=0;
    for(const item in shopped){
        if(shopped[item]>0){
            total+=shopped[item];
        }
    }
    return total;
}

const getTotalPrice=()=>{
    let totalPrices = 0;
    for(const id in shopped){
        if(shopped[id]>0){
        let totalPrice = PRODUCT[id].item.price;
        totalPrices+=totalPrice*shopped[id];
        }
    }
    console.log(totalPrices)
    return totalPrices;
}

const removeFromCart=(id)=>{
setShopped({...shopped,[id]:0});
}

const decreaseFromCart=(id)=>{
    setShopped({...shopped,[id]:shopped[id]-1});
}
    const contextValue={shopped,addToCart,removeFromCart,getTotal,getTotalPrice,decreaseFromCart,setDefault};
    
    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    );
}