import Link from 'next/link';
import style from '../../styles/partials/details.module.css';

export default function ComponentDetails(){
    return (
        <section className={style.container}>
            <p className={style.title}></p>
            <div className={style.items}>
                <div className={style.item}>
                    <span className={style.subtitle}>
                        Sobre nosotros
                    </span>
                    <p>
                        Comidas lo mejor es una empresa familiar, que fue ganando prestigio en el exterior a través del tiempo, ofreciendo los mejores productos a nuestros clientes.
                    </p>
                </div>
                <div className={style.item}>
                    <span className={style.subtitle}>
                        Secciones
                    </span>
                    <div className={style.list}>
                        <Link href="/">
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
                        <Link href="/">
                            <ion-icon name="newspaper-outline"></ion-icon>
                            <span>TERMINOS Y CONDICIONES</span>
                        </Link>
                    </div>
                </div>
                <div className={style.item}>
                    <span className={style.subtitle}>
                        Atencion
                    </span>
                    <div className={style.data}>
                        <ion-icon name="time-outline"></ion-icon>
                        <span>Lunes a viernes de 9:00 a 18:30 hs.</span>
                    </div>
                    <div className={style.data}>
                        <ion-icon name="time-outline"></ion-icon>
                        <span>Sábados de 9:45 a 14:00 hs.</span>
                    </div>
                </div>
                <div className={style.item}>
                    <span className={style.subtitle}>
                        Contacto
                    </span>
                    <div className={style.data}>
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        <span>+5411 6868 6767</span>
                    </div>
                    <div className={style.data}>
                        <ion-icon name="call-outline"></ion-icon>
                        <span>+64(11) 4315-1400</span>
                    </div>
                    <div className={style.data}>
                        <ion-icon name="call-outline"></ion-icon>
                        <span>0810-345-0305</span>
                    </div>
                    <div className={style.data}>
                        <ion-icon name="mail-outline"></ion-icon>
                        <span>contacto@comidaslomejor.com.ar</span>
                    </div>
                </div>
            </div>
            <p className={style.footer}>
                <span>
                    Al utilizar este sitio web, usted acepta nuestros Términos y Condiciones
                </span>
                <span>
                    Comidas lo mejor
                </span>
                <span>
                    <ion-icon name="aperture-outline"></ion-icon>
                    <strong>SOFTWARE</strong>
                </span>
            </p>
        </section>
    )
}