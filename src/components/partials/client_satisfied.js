import style from '../../styles/partials/client_satisfied.module.css';

export default function ComponentClientSatisfied(){
    return (
        <section className={style.container}>
            <article>
                <h1>
                    Clientes satisfechos
                </h1>
                <div className={style.items}>
                    <div className={style.item}>
                        <span>35.290</span>
                        <p>VENTAS</p>
                    </div>
                    <div className={style.item}>
                        <span>41.185</span>
                        <p>CLIENTES FELICES</p>
                    </div>
                    <div className={style.item}>
                        <span>0</span>
                        <p>RECLAMOS</p>
                    </div>
                </div>
            </article>
        </section>
    )    
}