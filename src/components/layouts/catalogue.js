import { Fragment } from "react"

import ComponentMenu from "../partials/menu.js";
import ComponentDescriptionCatalogue from "../partials/description_catalogue.js";
import ComponentDetails from "../partials/details.js";

export default function ComponentCatalogue(){
    return (
        <Fragment>
            <ComponentMenu/>
            <ComponentDescriptionCatalogue/>
            <ComponentDetails/>
        </Fragment>
    )
}