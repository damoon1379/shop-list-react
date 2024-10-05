
const products = await fetch('../data.json')
.then(response=>response.json());

const items =[];

const setProduct=()=>{
    
    for(let i=0;i<products.length;i++){
        items[i]={id:i,num:0,item:products[i]}
    }
}
setProduct();
export const PRODUCT= items;
