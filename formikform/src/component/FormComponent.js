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
            document.write(JSON.stringify(values));
        }
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <h1>
                    Register Product
                </h1>
                productId : <input type="text" name="productId" onChange={formik.handleChange} value={formik.values.productId} /> <br />
                Name : <input type="text" name="Name" onChange={formik.handleChange} value={formik.values.Name} /><br />
                Price : <input type="text" name="Price" onChange={formik.handleChange} value={formik.values.Price} /><br />
                In Stock: <input type="checkbox" name="inStock" onChange={formik.handleChange} checked={formik.values.inStock} />

                <button>Register</button>



            </form>
        </>
    )
}
export default FormComponent;