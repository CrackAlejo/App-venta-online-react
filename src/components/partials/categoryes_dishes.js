import Link from 'next/link';

import style from '../../styles/partials/categoryes_dishes.module.css';

export default function ComponentCategoryesDishes({category_selected}){
    
    const get_style = (category) => {
        return (category == category_selected)? {"color":"var(--color-font-primary)","backgroundColor":"var(--color-text-primary)"} : {};
    }

    return (
        <section className={style.container}>
            <article className={style.list}>
                <Link href="/products/[category]" as={"/products/all"} style={get_style("all")}>Todos</Link>
                <Link href="/products/[category]" as={"/products/meats"} style={get_style("meats")}>Carnes</Link>
                <Link href="/products/[category]" as={"/products/burgers"} style={get_style("burgers")}>Burgers</Link>
                <Link href="/products/[category]" as={"/products/breakfasts"} style={get_style("breakfasts")}>Desayunos</Link>
                <Link href="/products/[category]" as={"/products/brownis"} style={get_style("brownis")}>Braunis</Link>
                <Link href="/products/[category]" as={"/products/desserts"} style={get_style("desserts")}>Postres</Link>
                <Link href="/products/[category]" as={"/products/ice_crems"} style={get_style("ice_crems")}>Helados</Link>
                <Link href="/products/[category]" as={"/products/juices"} style={get_style("juices")}>Jugos</Link>
                <Link href="/products/[category]" as={"/products/paninis"} style={get_style("paninis")}>Paninis</Link>
                <Link href="/products/[category]" as={"/products/pancakes"} style={get_style("pancakes")}>Panques</Link>
                <Link href="/products/[category]" as={"/products/toasts"} style={get_style("toasts")}>Tostados</Link>
                <Link href="/products/[category]" as={"/products/salads"} style={get_style("salads")}>Ensaladas</Link>
            </article>
        </section>
    )
}