import React from 'react';

function FormComponent() {
    const [getName, setName] = React.useState("");
    const [getPrice, setPrice] = React.useState("");
    const [getStock, setStock] = React.useState();
    const [getCity, setCity] = React.useState("");

    const submitForm = () => {
        document.write(`Name=${getName}<br>Price=${getPrice}<br>In Stock=${getStock}<br>City=${getCity}`)
    }

    return (
        <form className='container' onSubmit={submitForm}>
            <h2 className='display-1'>Register Product</h2>
            <div className='mt-2'>
                <label className='form-label'>Product Name</label>
                <div>
                    <input type="text" onChange={e => setName(e.target.value)} name="Name" value={getName} className="form-control" />
                </div>
            </div>
            <div className='mt-2'>
                <label className='form-label'>Price</label>
                <div>
                    <input type="text" onChange={e => setPrice(e.target.value)} name="Price" value={getPrice} className="form-control" />
                </div>
            </div>
            <div className='mt-2'>
                <label className='form-label'>Shipped To</label>
                <div>
                    <select name='City' onChange={e => setCity(e.target.value)} value={getCity} className='form-select'>
                        <option>Select</option>
                        <option>Delhi</option>
                        <option>LKO</option>
                        <option>FZBD</option>
                    </select>
                </div>
            </div>
            <div className='mt-2'>
                <label className='form-label'>In Stock</label>
                <div className='form-check'>
                    <input type="checkbox" onChange={e => setStock(e.target.value)} name="Stock" value={getStock} className="form-check-input" />
                </div>
            </div>
            <div className='mt-2'>
                <div className='d-grid'>
                    <button className='btn btn-primary'>Register</button>
                </div>
            </div>
        </form>
    )

}
export default FormComponent;