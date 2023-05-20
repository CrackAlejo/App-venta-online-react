import { Fragment, useEffect, useState } from "react"

import ComponentMenu from "../partials/menu.js";
import ComponentPresentation from "../partials/presentation.js";
import ComponentBodyPresentation from "../partials/body_presentation.js";
import ComponentPresentationDishes from "../partials/presentation_dishes.js";
import ComponentClientSatisfied from "../partials/client_satisfied.js";
import ComponentDetails from "../partials/details.js";

import get from '../../controllers/dishes.js';

export default function ComponentHome(){
    const [list_dishes,setList_dishes] = useState([]);

    useEffect(() => {
        const load_list_dishes = () => {
            const list = get("dishes");
            setList_dishes(list);
        }
        load_list_dishes();
    },[]);

    return (
        <Fragment>
            <ComponentMenu/>
            <ComponentPresentation/>
            <ComponentBodyPresentation/>
            <ComponentPresentationDishes list_dishes={list_dishes}/>
            <ComponentClientSatisfied/>
            <ComponentDetails/>
        </Fragment>
    )
}