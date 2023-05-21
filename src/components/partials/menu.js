import Image from 'next/image';
import Link from 'next/link';

import style from '../../styles/partials/menu.module.css';
import { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive'

export default function ComponentMenu(){
    const [selected_menu,setSelected_menu] = useState(null);

    const is_mobil = useMediaQuery({ query: '(min-width: 850px)' })
    const is_mobil_img = useMediaQuery({ query: '(max-width: 500px)' })

    useEffect(() => {
        if(selected_menu){
            setSelected_menu(null);
        }
    },[is_mobil]);

    return (
        <section className={style.container}>
            <article className={style.menu}>
                <div className={style.button} onClick={() => setSelected_menu(!selected_menu)}>
                    <ion-icon name={(selected_menu)? "close-outline" : "menu-outline"}></ion-icon>
                </div>
                <article>
                    <div className={style.logo}>
                        <Image src="/images/logo/Logo.jpg" alt="Logo app" width={(is_mobil_img)? 50 : 70} height={(is_mobil_img)? 50 : 70}/>
                    </div>
                    <div className={style.items}>
                        <Link href="/" >
                            <ion-icon name="home-outline"></ion-icon>
                            <span>INICIO</span>
                        </Link>
                        <Link href="/company">
                            <ion-icon name="easel-outline"></ion-icon>
                            <span>EMPRESA</span>
                        </Link>
                        <Link href="/products/[category]" as={"/products/all"}>
                            <ion-icon name="pulse-outline"></ion-icon>
                            <span>PRODUCTOS</span>
                        </Link>
                        <Link href="/catalogue">
                            <ion-icon name="reader-outline"></ion-icon>
                            <span>CATALOGO</span>
                        </Link>
                        <Link href="/contact">
                            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                            <span>CONTACTO</span>
                        </Link>
                        <Link href="/cart">
                            <ion-icon className={style.trolley} name="cart-outline"></ion-icon>
                        </Link>
                    </div>
                </article>
                <div className={(selected_menu==null)? style.hidden_menu : (selected_menu)? style.view_menu : style.close_menu}>
                    <div>
                        <Link href="/">
                            <ion-icon name="home-outline"></ion-icon>
                            <span>INICIO</span>
                        </Link>
                        <Link href="/company">
                            <ion-icon name="easel-outline"></ion-icon>
                            <span>EMPRESA</span>
                        </Link>
                        <Link href="/products">
                            <ion-icon name="pulse-outline"></ion-icon>
                            <span>PRODUCTOS</span>
                        </Link>
                        <Link href="/catalogue">
                            <ion-icon name="reader-outline"></ion-icon>
                            <span>CATALOGO</span>
                        </Link>
                        <Link href="/contact">
                            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                            <span>CONTACTO</span>
                        </Link>
                    </div>
                    <div className={style.icon}>
                        <ion-icon name="reader-outline"></ion-icon>
                    </div>
                </div>
            </article>
        </section>
    )
}