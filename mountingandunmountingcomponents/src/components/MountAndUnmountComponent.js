import React from 'react';

export default class MountAndUnmountComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            msg: ''
        }
        this.componentWillUnmount= this.componentWillUnmount.bind(this);
    }
    timer() {
        this.setState({
            date: new Date(),
            msg: ''
        })
    }
    displaytime;
    componentDidMount() {
        this.displaytime = setInterval(() => this.timer(), 1000);
        this.setState({
            msg: "Component mounted"
        })
        alert('Component mounted');
    } 

    componentWillUnmount() {
        clearInterval(this.displaytime);
        this.setState({
            msg: "Component Unmounted | CleanedUp"
        })
    }
    render() {
        return (
            <>
                <div className='container mt-3'>
                    <button className='btn btn-primary' onClick={this.componentWillUnmount}>Unmount Component</button>
                    <h1 className='display-1 text-secondary'>{this.state.date.toLocaleTimeString()}</h1>
                    <p className='text-danger'>{this.state.msg}</p>
                </div>
            </>
        )
    }
}
