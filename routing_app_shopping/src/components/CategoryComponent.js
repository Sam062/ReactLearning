import React from "react";
import { Link } from "react-router-dom";

const CategoryComponent = () => {
    let categories = [
        { id: 1, Name: 'Electronics' },
        { id: 2, Name: 'Footwear' },
        { id: 3, Name: 'Fashon' }
    ];

    return (
        <div>
            <h2>Categories List</h2>
            <ul className="list-unstyled">
                {
                    categories.map(category =>
                        <li key={category.id}>
                            <Link className="btn btn-info mt-1" to={'/products/'+category.id}>{category.Name}</Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default CategoryComponent;