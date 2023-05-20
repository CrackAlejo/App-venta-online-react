import { Fragment } from "react"

import ComponentMenu from "../partials/menu.js";
import ComponentDescriptionContact from "../partials/description_contact.js";
import ComponentDetails from "../partials/details.js";

export default function ComponentContact(){
    return (
        <Fragment>
            <ComponentMenu/>
            <ComponentDescriptionContact/>
            <ComponentDetails/>
        </Fragment>
    )
}