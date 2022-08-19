class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Category List",
            Categories: ["Electronics", "Fashon", "Footwear"],
            data: [
                { name: "Nike Casuals", price: 450.9 },
                { name: "Shirt", price: 1450.9 }
            ]
        }
    }
    render() {
        return (
            <>
                <h1>{this.state.title}</h1>
                <ul>
                    {
                        this.state.Categories.map(category =>
                            <li>{category}</li>
                        )
                    }
                </ul>
                <h2>Producr List</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(product =>
                                <tr key={product.name}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </>
        )
    }
}
class MainComponent extends React.Component {
    render() {
        return (
            <>
                <ProductComponent />
            </>
        )
    }
}



ReactDOM.render(
    <>
        <MainComponent />
    </>,
    document.getElementById("container")
)