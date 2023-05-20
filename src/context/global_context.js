import { createContext, useState } from "react"

export const Global_context = createContext({})

export default function GlobalContextProvider({children}){
    const [products_cart,setProducts_cart] = useState([]);
    
    const add_products_cart = (new_product) => {
        if(products_cart.includes(new_product)){
            products_cart.filter(product => product == new_product).map(product => product.amount = 1);
            const new_products = products_cart.filter(product => product != new_product);
            setProducts_cart(new_products);
        }else{
            setProducts_cart([...products_cart,new_product]);
        }
    }

    return (
        <Global_context.Provider value={{add_products_cart,products_cart}}>
            {children}
        </Global_context.Provider>   
    )
}