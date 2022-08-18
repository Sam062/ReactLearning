class ProductComponent extends React.Component{
    render(){
        return(
            <>
                <div>
                    <div>
                        <h2>{this.props.name}</h2>
                    </div>
                    <div>
                        <h2>{this.props.price}</h2>
                    </div>
                </div>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render(){
        return(
            <>
                <ProductComponent name={"Shirt"} price={123.4}/>
                <ProductComponent name={"Pant"} price={432.1} />
                <ProductComponent name={"tee"} price={111.1} />
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