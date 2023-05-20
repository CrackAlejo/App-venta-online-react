import style from '../../styles/partials/preload_cart.module.css';

export default function ComponentPreloadCart(){
    return (
        <section className={style.container}>
            <ion-icon name="sad-outline"></ion-icon>
            <span>
                No tienes productos agregados aun
            </span>
        </section>
    )
}