import React from "react";
import { useFormik } from "formik";

const FormComponent = () => {
    const formik = useFormik({
        initialValues: {
            productId: "",
            Name: "",
            Price: 0,
            inStock: false
        },
        onSubmit: values => {
            document.write(`
                <h2>Product Details</h2>
                <table className="table">
                    <tr>
                        <td>Name</td>
                        <td>${values.Name}</td>
                    </tr>
                    <tr>
                        <td>Product-Id</td>
                        <td>${values.productId}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>${values.Price}</td>
                    </tr>
                    <tr>
                        <td>In Stock</td>
                        <td>${(values.inStock==true)?"Available":"Out Of Stock"}</td>
                    </tr>
                </table>
            `);
        }
    })
    return (
        <>
            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <h1>Register Product</h1>
                    <dl>
                        <dt>productId</dt>
                        <dd><input className="form-control" type="text" name="productId" onChange={formik.handleChange} value={formik.values.productId} /> </dd>
                        <dt>Name</dt>
                        <dd><input className="form-control" type="text" name="Name" onChange={formik.handleChange} value={formik.values.Name} /> </dd>
                        <dt>Price</dt>
                        <dd><input className="form-control" type="text" name="Price" onChange={formik.handleChange} value={formik.values.Price} /> </dd>
                        <dt>InStock</dt>
                        <dd className="form-check form-switch"><input className="form-check-input" type="checkbox" name="inStock" onChange={formik.handleChange} checked={formik.values.inStock} /> </dd>
                    </dl>
                    <div className="d-grid">
                    <button className="btn btn-success">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default FormComponent;