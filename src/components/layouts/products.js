import { Fragment, useEffect, useState } from "react"

import ComponentMenu from "../partials/menu.js";
import ComponentCategoryesDishes from "../partials/categoryes_dishes.js";
import ComponentPresentationDishes from "../partials/presentation_dishes.js";
import ComponentDetails from "../partials/details.js";

import get from '../../controllers/dishes.js';

import { useRouter } from 'next/router'

export default function ComponentProducts(){
    const [list_dishes,setList_dishes] = useState([]);
    
    const { query : {category} } = useRouter();

    useEffect(() => {
        const load_list_dishes = (categorye) => {
            const list = get(categorye);
            setList_dishes(list);
        }
        load_list_dishes(category);
    },[category]);   

    return (
        <Fragment>
            <ComponentMenu/>
            <ComponentCategoryesDishes category_selected={category}/>
            <ComponentPresentationDishes categorye_selected={category} list_dishes={list_dishes}/>
            <ComponentDetails/>
        </Fragment>
    )
}