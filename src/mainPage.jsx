import {PRODUCT} from './products'
import React from 'react'
import {Product} from './product'
import './style/mainPage.css'
const items = PRODUCT;

export const Main=()=>{
return(<>
    <label htmlFor="mainpage" style={{fontSize:'larger',color:'orangered'}}> <b> Deserts</b></label>
<div className='mainpage' id='main-page'>
    
    <div className='items' >
{
    items.map(item=>{
        return(
            
            <Product data={item}/>
            
        )
    })
}
</div>
</div>
</> )
}