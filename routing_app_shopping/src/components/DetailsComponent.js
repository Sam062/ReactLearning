import React from "react";
import { useParams } from "react-router-dom";

const DetailsComponent = ()=>{
    let {id, name}=useParams();

    return (
        <div>
            <h1 className="display-2">Product Details</h1>
            <dl>
                <dt>ID</dt>
                <dd>{id}</dd>
                <dt>Name</dt>
                <dd>{name}</dd>
            </dl>
        </div>
    )
}

export default DetailsComponent;