class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: '',
                price: ''
            }
        }
        this.nameChanged = this.nameChanged.bind(this);
        this.priceChanged = this.priceChanged.bind(this);
    }

    nameChanged(event) {
        this.setState({
            product: {
                name: event.target.value,
                price: this.state.product.price
            }
        })
    }
    priceChanged(event) {
        this.setState({
            product: {
                name: this.state.product.name,
                price: event.target.value
            }
        })
    }

    render() {
        return (
            <>
                <div>
                    <h3>Register Product</h3>
                    <dl>
                        <dt>Product Name</dt>
                        <dd><input type="text" onChange={this.nameChanged} /></dd>
                        <dt>Product Price</dt>
                        <dd><input type="text" onChange={this.priceChanged} /></dd>
                    </dl>
                    <h3>Product Details</h3>
                    <dl>
                        <dt>Name</dt>
                        <dd>{this.state.product.name}</dd>
                        <dt>Price</dt>
                        <dd>{this.state.product.price}</dd>
                    </dl>
                </div>
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