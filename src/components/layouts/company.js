import { Fragment } from "react"

import ComponentMenu from "../partials/menu.js";
import ComponentDescriptionCompany from "../partials/description_company.js";
import ComponentDetails from "../partials/details.js";

export default function ComponentCompany(){
    return (
        <Fragment>
            <ComponentMenu/>
            <ComponentDescriptionCompany/>
            <ComponentDetails/>
        </Fragment>
    )
}