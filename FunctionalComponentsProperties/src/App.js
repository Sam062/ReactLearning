const ProductComponent=(props)=>{
    return <>
        <div className="card">
            <div className="card-header text-center">
                <h2>{props.name}</h2>
            </div>
            <div className="card-body text-center">
                <h2>{props.price}</h2>
            </div>
        </div>
    </>
}

const MainComponent=()=>{
    return <>
        <h2>
            Product Catalog
        </h2>
        <div className="d-flex">
            <ProductComponent name={"Nike Casuals"} price={123.4}/>
            <ProductComponent name={"Boots"} price={243.5}/>
        </div>
    </>
}
 


ReactDOM.render(
    <>
    <MainComponent />
    </>,
    document.getElementById("container")
)