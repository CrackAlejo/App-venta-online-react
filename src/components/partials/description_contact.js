import style from '../../styles/partials/description_contact.module.css';

export default function ComponentDescriptionContact(){
    return (
        <section className={style.container}>
            <article className={style.description}>
                <h3>Contacto</h3>
                <p className={style.subtitle}>En Comidas lo mejor estamos siempre dispuestos a asesorarlo.</p>
                <p className={style.subtitle}>Contáctese ahora y le brindaremos la mejor atención</p>
                <article className={style.items}>
                    <div className={style.item}>
                        <span>Teléfonos</span>
                        <p>+54 (11) 4315-1400</p>
                    </div>
                    <div className={style.item}>
                        <span>WhatsApp</span>
                        <p>+5411 6868 6767</p>
                    </div>
                    <div className={style.item}>
                        <span>Horarios</span>
                        <p>Lunes a viernes de 9:00 a 18:30 hs.</p>
                        <p>Sábados de 9:45 a 14:00 hs.</p>
                    </div>
                    <div className={style.item}>
                        <span>Email</span>
                        <p>contacto@comidaslomejor.com.ar</p>
                    </div>
                </article>
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