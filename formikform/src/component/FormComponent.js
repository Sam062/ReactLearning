import React from "react";
import { useFormik } from "formik";

const FormComponent = () => {
    const formik = useFormik({
        initialValues: {
            productId: "",
            Name: "",
            Price: ""
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
                <button>Register</button>



            </form>
        </>
    )
}
export default FormComponent;