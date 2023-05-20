import Image from 'next/image';
import Link from 'next/link';

import style from '../../styles/partials/description_catalogue.module.css';

export default function ComponentDescriptionCatalogue(){
    return (
        <section className={style.container}>
            <article className={style.presentation}>
                <div className={style.menu}>
                    <Link href="/">Inicio</Link>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    <span>Tienda online</span>
                </div>
                <div className={style.data}>
                    <div className={style.details}>
                        <h2>HELADOS</h2>
                        <p>TODOS LOS SABORES</p>
                        <Link href="/products/[category]" as={"/products/ice_crems"}>
                            ELEGÍ EL TUYO
                        </Link>
                    </div>
                    <div className={style.img}>
                        <Image src="/images/ice_crems/img2.jpg" alt="Helados" width={700} height={700}/>
                    </div>
                </div>
            </article>
            <article className={style.description}>
                <h3>COMIDAS LO MEJOR ES TU MEJOR OPCIÓN</h3>
                <div className={style.items}>
                    <div className={style.item}>
                        <div className={style.icon}>
                            <ion-icon name="cash-outline"></ion-icon>
                        </div>
                        <div className={style.info}>
                            <span>MEJOR PRECIO</span>
                            <p>Comprá al mejor precio del mercado.</p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.icon}>
                            <ion-icon name="accessibility-outline"></ion-icon>
                        </div>
                        <div className={style.info}>
                            <span>TRANQUILIDAD</span>
                            <p>Consume productos altamente saludables.</p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.icon}>
                            <ion-icon name="megaphone-outline"></ion-icon>
                        </div>
                        <div className={style.info}>
                            <span>ASESORAMIENTO</span>
                            <p>Te asesoramos para realizar la mejor compra.</p>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.icon}>
                            <ion-icon name="sparkles-outline"></ion-icon>
                        </div>
                        <div className={style.info}>
                            <span>DESCUENTOS</span>
                            <p>Descuento por pago en efectivo.</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className={style.data}>
                <div className={style.items}>
                    <div className={style.item}>
                        <div className={style.description}>
                            <div>
                                <h2>JUGOS</h2>
                                <p>Totalmente saludables y nutritivos</p>
                            </div>
                            <div>
                                <Link href="/products/[category]" as={"/products/juices"}>Ver</Link>
                            </div>
                        </div>
                        <div className={style.img}>
                            <Image src="/images/juices/img2.jpg" alt ="Jugos" width={700} height={700}/>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.description}>
                            <div>
                                <h2>CARNES</h2>
                                <p>Sabor irresistible</p>
                            </div>
                            <div>
                                <Link href="/products/[category]" as={"/products/meats"}>Ver</Link>
                            </div>
                        </div>
                        <div className={style.img}>
                            <Image src="/images/meats/img3.jpg" alt="Carne" width={700} height={700} />
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.description}>
                            <div>
                                <h2>ENSALADAS</h2>
                                <p>Preparada totalmente con verduras naturales</p>
                            </div>
                            <div>
                                <Link href="/products/[category]" as={"/products/salads"}>Ver</Link>
                            </div>
                        </div>
                        <div className={style.img}>
                            <Image src="/images/salads/img1.jpeg" alt="Ensaladas" width={700} height={700} />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}