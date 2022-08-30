import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ProductsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []        }
    }


    componentDidMount() {
        this.setState({
            products: [
                { "productName": "Laptop", "price": "66987.9", "categoryId": 1 },
                { "productName": "Earpods", "price": "987.9", "categoryId": 1 },
                { "productName": "Nike Shoes", "price": "6987.9", "categoryId": 2 },
                { "productName": "Shirt", "price": "664.9", "categoryId": 2 },
                { "productName": "Jeans", "price": "669", "categoryId": 2 }
            ]
        })
    }

    render() {
        return (
            <div>
                <h1 className='display-4'>Product List</h1>
                <ol>
                    {
                        this.state.products.map(product =>
                            <li key={product.productName}>{product.productName}</li>
                        )
                    }
                </ol>
                <Link to="/categories">Back to categories</Link>
            </div>
        )
    }
}

export default ProductsComponent