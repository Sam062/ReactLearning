import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CategoriesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        this.setState({
            categories: [
                { "categoryId": 1, "categoryName": "Electronics" },
                { "categoryId": 2, "categoryName": "Fashon" }
            ]
        })
    }


    render() {
        return (
            <div>
                <h3>Categories</h3>
                <ol className='list-unstyled'>
                    {
                        this.state.categories.map(category =>
                            <li key={category.categoryId}>
                                <Link to={"/products/"+category.categoryId} className='btn btn-secondary mt-1'>{category.categoryName}</Link>
                            </li>
                        )
                    }
                </ol>
            </div>
        )
    }
}

export default CategoriesComponent