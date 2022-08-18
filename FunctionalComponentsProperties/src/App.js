const ProductComponent=(props)=>{
    return <>
        <div>
            <div>
                <h2>{props.name}</h2>
            </div>
            <div>
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
        <div>
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