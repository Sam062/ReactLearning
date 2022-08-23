class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { username: "john" },
                { username: "john12" },
                { username: "john123" },
                { username: "john1234" }
            ],
            userMsg: "",
            passwordMsg: "",
            regExp: /(?=.*[A-Z])\w{4,15}/

        }
        this.verifyUser = this.verifyUser.bind(this);
        this.verifyPassword = this.verifyPassword.bind(this);

    }

    verifyUser(event) {
        for(var user of this.state.users){
            if(user.username==event.target.value){
                this.setState({
                    userMsg: "Username Unavailable!"
                });
                break;
            }else{
                this.setState({
                    userMsg: "Username Available!"
                })
            }
        }
    }
    verifyPassword(event) {
        if(event.target.value.match(this.state.regExp)){
            this.setState({
                passwordMsg: "Strong Password"
            })
        }else{
            if(event.target.value.length<4){
                this.setState({
                    passwordMsg: "poor password"
                })
            }else{
                this.setState({
                    passwordMsg: "weak password"
                })
            }
        }

    }

    render() {
        return (
            <>
                <div>
                    <h3>Register Product</h3>
                    <dl>
                        <dt>User name</dt>
                        <dd><input type="text" onKeyUp={this.verifyUser} /></dd>
                        <dd>{this.state.userMsg}</dd>
                        <dt>Password</dt>
                        <dd><input type="password" onKeyUp={this.verifyPassword} /></dd>
                        <dd>{this.state.passwordMsg}</dd>
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