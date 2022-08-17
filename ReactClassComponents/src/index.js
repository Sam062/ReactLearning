 var subtitle="Online SHopping";

class HeaderComponent extends React.Component {
    title= "Amazon Shopping";
    render() {
        return (
            <>
                <h1>{this.title} - {subtitle}</h1>
            </>
        )
    }
}
class NavComponent extends React.Component {
    render() {
        return (
            <>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </>
        )
    }
}
class FooterComponent extends React.Component {
    render() {
        return (
            <>
                <div className="text-dark text-center">
                    &copy; copyright 2022 @Voicera
                </div>
            </>
        )
    }
}
class MainComponent extends React.Component {
    render() {
        return (
            <>
                <HeaderComponent />
                <div className="row">
                    <div className="col-2" style={{ height: "500px" }}>
                        <NavComponent />
                    </div>
                    <div className="col-5">
                        <p>Other Stuff</p>
                    </div>
                </div>
                <FooterComponent />
            </>
        )
    }
}

ReactDOM.render(
    <MainComponent />,
    document.getElementById("container")

)