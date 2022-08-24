import React from "react";
import { isNaN, useFormik } from "formik";

const ValidateFormData = (props) => {
    const errors = {
        Name: "",
        productId: "",
        Price: ""
    }
    if (!props.Name) {
        errors.Name = "Name is required";
    } else if (props.Name.length < 4) {
        errors.Name = "Name too short";
    }
    if (!props.Price) {
        errors.Price = "Price is required";
    } else if (isNaN(props.Price)) {
        errors.Price = "Invalid Price";
    }
    if (!props.productId) {
        errors.productId = "Id is required";
    } else if (!/[A-Z]{3}[0-9]{2}/.test(props.productId)) { //min 3 Capital ltr and 2 numeric
        errors.productId = "Invalid Id- Please match with the pattern";
    }
    return errors;

}


const FormComponent = () => {
    const formik = useFormik({
        initialValues: {
            productId: '',
            Name: '',
            Price: '',
            inStock: false
        },
        validate: ValidateFormData,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <>
            <div className="container-fluid">
                <form onSubmit={formik.handleSubmit}>
                    <h1>Register Product</h1>
                    <dl>
                        <dt>productId</dt>
                        <dd><input className="form-control" type="text" name="productId" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.productId} /> </dd>
                        <dd className="text-danger">
                            {(formik.touched.productId && formik.errors.productId) ? formik.errors.productId : null}
                        </dd>
                        
                        <dt>Name</dt>
                        <dd><input className="form-control" type="text" name="Name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Name} /> </dd>
                        <dd className="text-danger">
                            {(formik.touched.Name && formik.errors.Name) ? formik.errors.Name : null}
                        </dd>
                        
                        <dt>Price</dt>
                        <dd><input className="form-control" type="text" name="Price" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Price} /> </dd>
                        <dd className="text-danger">
                            {(formik.touched.Price && formik.errors.Price) ? formik.errors.Price : null}
                        </dd>
                        
                        <dt>InStock</dt>
                        <dd className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" name="inStock" onChange={formik.handleChange} checked={formik.values.inStock} /> 
                        </dd>
                    </dl>
                    <div className="d-grid">
                        <input type="submit" className="btn btn-success" value="Register"/>
                    </div>
                </form>
            </div>
        </>
    )
}
export default FormComponent;