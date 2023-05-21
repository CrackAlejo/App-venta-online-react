import Image from 'next/image';

import { useContext, useEffect, useState } from 'react';
import style from '../../styles/partials/description_cart.module.css';

import { Global_context } from '../../context/global_context.js';

import ComponentPreloadCart from './proload_cart';

export default function ComponentDescriptionCart(){
    const global_context = useContext(Global_context);
    const [total,setTotal] = useState();

    const capture_index_products = (product) => {
        global_context.add_products_cart(product);
    }

    const amount_dishes = (product_selected,value) => {
        global_context.products_cart.filter(product => product == product_selected).map(product => {
            product.amount = (value)? product.amount + 1 : product.amount - 1
        })
        setTotal((value)? (total + product_selected.price) : (total - product_selected.price));
    }

    useEffect(() => {
        const calculate_total = () => {
            let new_total = 0;
            global_context.products_cart.map((product) => {
                new_total += product.price * product.amount,
                console.log(product.amount)
            })
            setTotal(new_total);
        }
        calculate_total();
    },[global_context.products_cart])

    return (
        <section className={style.container}>
            {
                (global_context.products_cart.length == 0)?
                    <ComponentPreloadCart/>
                :
                    <>
                        <h1 className={style.title}>
                            <span>
                                Tu carrito
                            </span>
                            <span>
                                <ion-icon name="cash-outline"></ion-icon>
                                <span>Total: ${total}</span>
                            </span>
                        </h1>
                        <article className={style.products}>
                            {
                                global_context.products_cart.map((product,index) => {
                                    return (
                                        <div className={style.product} key={index}>
                                            <div className={style.data}>
                                                <div>
                                                    <span>{product.subtitle}</span>
                                                    <span>${product.price*product.amount}</span>
                                                    <span>
                                                        {product.amount} 
                                                        {(product.amount==1)? " Plato":" Platos"}
                                                    </span>
                                                </div>
                                                <div>
                                                    <button className={style.button} onClick={() => capture_index_products(product)}>
                                                        <ion-icon name="trash-outline"></ion-icon>
                                                        <span>Quitar</span>
                                                    </button>
                                                    {
                                                        product.amount == 1 ? 
                                                            <button className={style.button} onClick={() => amount_dishes(product,true)}>
                                                                <ion-icon name="add-outline"></ion-icon>
                                                                <span>Otro plato</span>
                                                            </button>
                                                        :
                                                            <div className={style.buttons}>
                                                                <button onClick={() => amount_dishes(product,true)}>
                                                                    <ion-icon name="add-outline"></ion-icon>
                                                                </button>
                                                                <span>Platos</span>
                                                                <button onClick={() => amount_dishes(product,false)}>
                                                                    <ion-icon name="remove-outline"></ion-icon>
                                                                </button>
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className={style.img}>
                                                <Image src={product.img} alt={product.img} width={700} height={700}/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </article>
                    </>
            }
        </section>
    )
}