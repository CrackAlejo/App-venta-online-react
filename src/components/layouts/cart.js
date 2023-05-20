import { Fragment } from "react"

import ComponentMenu from "../partials/menu.js";
import ComponentDescriptionCart from "../partials/description_cart.js";
import ComponentDetails from "../partials/details.js";

export default function ComponentCart(){
    return (
        <Fragment>
            <ComponentMenu/>
            <ComponentDescriptionCart/>
            <ComponentDetails/>
        </Fragment>
    )
}