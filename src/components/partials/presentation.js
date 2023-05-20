import style from '../../styles/partials/presentation.module.css';

import Image from 'next/image';

import { useMediaQuery } from 'react-responsive'

export default function ComponentPresentation(){
    const is_mobil = useMediaQuery({ query: '(max-width: 755px)' })

    return (
        <section className={style.container}>
            <article className={style.slider}>
                <div className={style.card}>
                    <Image src="/images/breakfasts/img1.jpg" alt="Desayuno" width={700} height={700}/>
                    <div className={style.description}>
                        <span>
                            DESAYUNO COMPLETO
                        </span>
                        <span>
                            $1.500
                        </span>
                        <span>
                            Queremos verte feliz
                        </span>
                    </div>
                </div>
                <p>
                    <i>El clima perfecto para comenzar tu dia....</i>
                </p>
                <div className={style.data}>
                    <div className={style.item}>
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        {
                            is_mobil?
                                <span>+5411 6868 6767</span>
                            :
                                <span>Pedidos inmediatos por WhatsApp</span>
                        }
                    </div>
                    <div className={style.item}>
                        <div className={style.icon}>
                            <Image src="/images/ice_crems/img1.jpg" alt="Helados" width={700} height={700}/>
                        </div>
                        <div className={style.details}>
                            <span>HELADO</span>
                            <span>$1500</span>
                            <span>1KG</span>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.icon}>
                            <Image src="/images/brownis/img1.jpg" alt="Braunis" width={700} height={700}/>
                        </div>
                        <div className={style.details}>
                            <span>BRAUNI</span>
                            <span>$2000</span>
                            <span>8 porciones</span>
                        </div>
                    </div>
                </div>
            </article>
            <article className={style.quotes}>
                <h3>Hace tu pedido</h3>
                <form action='' method='POST'>
                    <input type="text" placeholder='Nombre y apellido...'/>
                    <input type="email" placeholder='Email...'/>
                    <input type="text" placeholder='Celular...'/>
                    <textarea type="text" placeholder='Mensaje...'></textarea>
                    <button type="submit">
                        <ion-icon name="cash-outline"></ion-icon>
                        <span>
                            PEDIR AHORA
                        </span>
                    </button>
                </form>
            </article>
        </section>
    )
}