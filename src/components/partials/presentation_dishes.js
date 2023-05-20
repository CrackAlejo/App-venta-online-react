import Image from 'next/image';

import { useContext, useEffect, useState } from 'react';
import style from '../../styles/partials/presentation_dishes.module.css';

import { Global_context } from '../../context/global_context.js';

export default function ComponentPresentationDishes({categorye_selected,list_dishes}){
    const global_context = useContext(Global_context);

    const [title,setTitle] = useState();

    const capture_index_products = (index) => {
        const product_selected = list_dishes[index];
        global_context.add_products_cart(product_selected);
    }

    const verify_add_product = (product) => {
        return global_context.products_cart.includes(product);
    }

    useEffect(() => {
        const load_title = (categorye_selected) => {
            switch(categorye_selected){
                case "all":         return "TODOS NUESTROS PRODUCTOS";
                case "breakfasts":  return "DESAYUNOS";
                case "brownis":     return "BRAUNIS";
                case "half_moons":  return "MEDIALUNAS";
                case "desserts":    return "POSTRES";
                case "ice_crems":   return "HELADOS";
                case "juices":      return "JUGOS";
                case "paninis":     return "PANINIS";
                case "pancakes":    return "PANQUEQUES";
                case "toasts":      return "TOSTADOS";
                case "salads":      return "ENSALADAS";
                case "meats":       return "CARNES";
                case "burgers":     return "HAMBURGUESAS";
                default:            return "ALGUNOS DE NUESTROS PRODUCTOS";
            }
        }
        setTitle(load_title(categorye_selected));
    },[categorye_selected]);
    
    return (
        <section className={style.container}>
            <h1>{title}</h1>
            <article className={style.list}>
                {
                    list_dishes.map((dishes,index) => {
                        return (
                            <div className={style.card} key={index}>
                                <Image src={dishes.img} alt={dishes.subtitle} width={700} height={700} />
                                <div className={style.description}>
                                    <span>{dishes.subtitle}</span>
                                    <span>${dishes.price}</span>
                                </div>
                                <div className={style.add_cart} onClick={() => capture_index_products(index)} style={verify_add_product(dishes)? {color:"var(--color-font-fifth)",boxShadow:"0 5px 12px -5px var(--color-font-fifth)"} : {color:"var(--color-text-primary)"} }>
                                    <ion-icon name={verify_add_product(dishes)? "checkmark-circle-outline" : "add-circle-outline"}></ion-icon>
                                    <span style={verify_add_product(dishes)? {color:"var(--color-font-fifth)"} : {color:"var(--color-text-primary)"} }>
                                        {
                                            verify_add_product(dishes)? "Producto agregado" : "Agregar producto"
                                        }
                                    </span>
                                    <ion-icon name="cart-outline"></ion-icon>
                                </div>
                            </div>
                        )
                    })
                }
            </article>
        </section>
    )
}