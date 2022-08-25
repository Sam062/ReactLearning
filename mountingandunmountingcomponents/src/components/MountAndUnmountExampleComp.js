import React from 'react'


class SuccessComponent extends React.Component{
    componentWillMount() {
        alert("Success component requested");
    }
    componentDidMount() {
        alert("Success Component mounted");
    }
    componentWillUnmount() {
        alert("Success component unmounted and destroyed");
    }
    render() {
        return (
            <h2>Login success</h2>
        )
    }
}
class ErrorComponent extends React.Component {
    componentWillMount() {
        alert("Error component requested");
    }
    componentDidMount() {
        alert("Error Component mounted");
    }
    componentWillUnmount() {
        alert("error component unmounted and destroyed");
    }
    render() {
        return (
            <h2>Invalid password</h2>
        )
    }

}

export default class MountAndUnmountExampleComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: ""
        }
        this.successClick=this.successClick.bind(this);
        this.errorClick=this.errorClick.bind(this);
        
    }

    successClick(){
        this.setState({
            msg: <SuccessComponent />
        })
    }
    errorClick(){
        this.setState({
            msg: <ErrorComponent />
        })
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.successClick}>Success</button>
                    <button onClick={this.errorClick}>Error</button>
                    <p>{this.state.msg}</p>
                </div>
            </>
        )
    }
}