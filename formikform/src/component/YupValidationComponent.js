import React from "react";
import { isNaN, useFormik, yupToFormErrors } from "formik";
import * as yup from "yup";


const YupValidationComponent = () => {
    const formik = useFormik({
        initialValues: {
            Name: "",
            Salary: "",
            Email: ""
        },
        validationSchema: yup.object({
            Name: yup.string().required("User name required.").min(4, "Username too short.").max(10, "Username too long."),
            Salary: yup.number().required("Salary required.").typeError("Invalid Salary"),
            Email: yup.string().required("Email required.").email("Invalid Email.")
        }),
        onSubmit: values=>{
            alert(JSON.stringify(values));
        }
    })
    return (
        <>
            <div className="container-fluid">
                <form onSubmit={formik.handleSubmit}>
                    <h1 className="display-1">Register User</h1>
                    <dl>
                        <dt>User Name</dt>
                        <dd>
                            <input className="form-control" type="text" name="Name" {...formik.getFieldProps("Name")} />
                        </dd>
                        <dd className="text-danger">{(formik.touched.Name && formik.errors.Name)?formik.errors.Name:null}</dd>

                        <dt>Salary</dt>
                        <dd>
                            <input className="form-control" type="text" name="Salary" {...formik.getFieldProps("Salary")} />
                        </dd>
                        <dd className="text-danger">{(formik.touched.Salary && formik.errors.Salary)?formik.errors.Salary:null}</dd>

                        <dt>Email</dt>
                        <dd>
                            <input className="form-control" type="email" name="Email" {...formik.getFieldProps("Email")} />
                        </dd>
                        <dd className="text-danger">{(formik.touched.Email && formik.errors.Email)?formik.errors.Email:null}</dd>
                    </dl>
                    <div className="d-grid">
                        <button className="btn btn-success">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default YupValidationComponent;