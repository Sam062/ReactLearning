const HeaderComponent=function(){
    return (
        <>
            <h1 className="bg-warning text-white text-center">Amazon Shopping</h1>
        </>
    )
}
const NavigationComponent=()=>{
        return <>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </>
}
const FooterComponent=()=>{
   return <>
        <div className="bg-dark text-white text-center">
            &copy; copyright 2022 @Voicera
        </div>
    </>
}
const MainComponent=()=>{
    return <>
        <HeaderComponent />
        <div className="row">
            <div className="col-2" style={{height: "500px"}}>
                <NavigationComponent />
            </div>
            <div className="col-5">
                <p>Other Stuff</p>
            </div>
        </div>
        <FooterComponent />
     </>
 }
 
 


ReactDOM.render(
    <>
    <MainComponent />
    </>,
    document.getElementById("container")
)