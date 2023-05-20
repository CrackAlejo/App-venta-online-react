import Image from 'next/image';

import style from '../../styles/partials/description_company.module.css';

export default function ComponentDescriptionCompany(){
    return (
        <section className={style.container}>
            <article className={style.content}>
                <div className={style.data}>
                    <div className={style.img}>
                        <Image src="/images/logo/logo.jpg" alt="Logo app" width={700} height={700}/>
                    </div>
                    <div className={style.description}>
                        <h3>Comidas lo mejor</h3>
                        <p>
                            Comidas lo mejor es una empresa familiar, que fue ganando prestigio en el exterior a través del tiempo, ofreciendo los mejores productos a nuestros clientes.
                        </p>
                        <p>
                            Antes realizar su compra, no dude en obtener, sin compromiso, nuestra cotización.
                        </p>
                    </div>
                </div>
                <p className={style.subtitle}>
                    Vendemos todo lo necesario para comer saludable
                </p>
            </article>
        </section>
    )
}