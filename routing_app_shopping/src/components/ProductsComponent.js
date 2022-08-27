import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductsComponent= ()=>{
    let {id} = useParams();

    let products= [
        {Name: "Samsung TV", price: 45000.87, id: 1},
        {Name: "Earpods", price: 420.87, id: 1},
        {Name: "Nike Shoes", price: 5000.87, id: 2},
        {Name: "Boots", price: 4000.87, id: 2},
        {Name: "Shirt", price: 9000.87, id: 3}
    ]
    let result= products.filter(category => category.id==id);

    return (
        <div>
            <h2>Product List</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.map(product=>
                                <tr>
                                    <td>{product.Name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
            <br />
            <Link to='/categories'>Back to Categories</Link>
        </div>
    )
}
export default ProductsComponent;