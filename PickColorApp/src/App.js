class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ""
        }
        this.pickColor = this.pickColor.bind(this);
    }

    pickColor(event) {
        switch (event.target.name) {
            case "red":
                this.setState({
                    color: "red"
                })
                break;
            case "white":
                this.setState({
                    color: "white"
                })
                break;
            case "green":
                this.setState({
                    color: "green"
                })
                break;

        }

    }

    render() {
        return (
            <>
                <div className="mt-3">
                    <ul className="d-flex list-unstyled">
                        <li className="me-4"><button className="btn btn-danger" onMouseOver={this.pickColor} name="red">RED</button></li>
                        <li className="me-4"><button className="btn btn-secondary" onMouseOver={this.pickColor} name="white">WHITE</button></li>
                        <li className="me-4"><button className="btn btn-success" onMouseOver={this.pickColor} name="green">GREEN</button></li>
                    </ul>
                    <h1 className="display-1">{this.state.color}</h1>
                </div>
            </>
        )
    }
}
class MainComponent extends React.Component {
    render() {
        return (
            <>
                <RegisterComponent />
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