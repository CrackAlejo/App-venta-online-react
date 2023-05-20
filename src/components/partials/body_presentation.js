import Link from 'next/link';
import Image from 'next/image';

import { Fragment } from 'react';
import style from '../../styles/partials/body_presentation.module.css';

import { useMediaQuery } from 'react-responsive'

export default function ComponentBodyPresentation(){

    const is_mobil_img_1 = useMediaQuery({ query: '(min-width: 840px)' })
    const is_mobil_img_2 = useMediaQuery({ query: '(min-width: 620px)' })

    return (
        <Fragment>
            <section className={style.container_cards}>
                <article className={style.content_cards}>
                    <article className={style.cards}>
                        <div className={style.item}>
                            <div className={style.icon}>
                                <ion-icon name="cash-outline"></ion-icon>
                            </div>
                            <div className={style.description}>
                                <span>Mejores precios</span>
                                <span>DEL MERCADO</span>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.icon}>
                                <ion-icon name="bulb-outline"></ion-icon>
                            </div>
                            <div className={style.description}>
                                <span>Respondemos sus pedidos</span>
                                <span>EN EL ACTO</span>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.icon}>
                                <ion-icon name="ribbon-outline"></ion-icon>
                            </div>
                            <div className={style.description}>
                                <span>Brindamos calidad</span>
                                <span>EN PRODUCTOS</span>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.icon}>
                                <ion-icon name="people-outline"></ion-icon>
                            </div>
                            <div className={style.description}>
                                <span>Atencion al cliente</span>
                                <span>ASEGURADA</span>
                            </div>
                        </div>
                    </article>
                </article>
            </section>
            <section className={style.container_location}>
                <article className={style.content_location}>
                    <article className={style.location}>
                        <div className={style.description}>
                            <h3>Comidas lo mejor</h3>
                            <p>Es una compañía de alimentos enfocada en promover un estilo de vida saludable y contribuir a disminuir el impacto climático. Sabemos que las decisiones cotidianas que tomamos forman nuestros hábitos e inciden de forma directa en los recursos del planeta. Por eso desarrollamos comida rica, sustentable y saludable.</p>
                            <p>Orgullosos de compartirlo, invitamos a que más organizaciones se sumen a este movimiento.</p>
                            <Link href="/products/[category]" as={"/products/all"}>
                                <span>CONOCER MÁS SOBRE COMIDAS LO MEJOR</span>
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </Link>
                        </div>
                        <div className={style.img}>
                            <Image src="/images/logo/logo.jpg" alt="Logo app" width={700} height={700} />
                        </div>
                    </article>
                </article>
            </section>
            <section className={style.container_juices}>
                <article className={style.content_juices}>
                    <article className={style.juices}>
                        <h4>Vendemos jugos saludables</h4>
                        <p>TE AYUDAMOS A COMER MEJOR</p>
                        <Image src="/images/juices/img1.jpg" alt="Jugos" width={(is_mobil_img_1)? 800 : (is_mobil_img_2)? 600 : 300} height={(is_mobil_img_1)? 450 : (is_mobil_img_2)? 350 : 250}/>
                    </article>
                </article>
            </section>
        </Fragment>
    )
}