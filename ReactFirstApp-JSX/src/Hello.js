var product={
    Name: "Shoes",
    Price: 12345,
    Instock: true,
    Preview: "../assets/img.jsp"
}
const element=(
    <>
       <dl>
            <dt>Name</dt>
            <dd>{product.Name}</dd>
            <dt>Price</dt>
            <dd>{product.Price}</dd>
            <dt>Instock</dt>
            <dd>{(product.Instock==true)?"Available":"Out of stock"}</dd>
            <dt>Preview</dt>
            <dd>
                <img src={product.Preview} width='100' hight='100'></img>
            </dd>
       </dl>
    </>
);
ReactDOM.render(
    element,
    document.getElementById("container")
)