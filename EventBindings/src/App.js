class ProductComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
        this.databaseOps = this.databaseOps.bind(this)
    }
    databaseOps(SynthaticEvent) {
        switch (SynthaticEvent.target.name) {
            case "insert":
                this.setState({
                    msg: "Record Inserted"
                })
                break;
            case "delete":
                this.setState({
                    msg: "Record deleted"
                })
                break;
            case "update":
                this.setState({
                    msg: "Record updated"
                })
                break;
        }
    }

    render() {
        return (
            <>
                <div>
                    <button name="insert" onClick={this.databaseOps}>Insert</button> Construcor binding
                    <button name="update" onClick={this.databaseOps.bind(this)}>Update</button> Event binding
                    <button name="delete" onClick={()=>this.databaseOps(event)}>Delete</button> Callback binding
                    <h1>{this.state.msg}</h1>
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