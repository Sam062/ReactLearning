import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const HomeComponent = () => {

    const [email, setEmail] = useState('');


    return (
        <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", padding: "10rem" }}>
            <input className='form-control' type="email" placeholder='enter your email' onChange={(e) => setEmail(e.target.value)} />

            <Link to={"/" + email} style={{ backgroundColor: "cadetblue", color: "antiquewhite" }} className='form-control btn border radius mt-2'>Start Test</Link>
        </div>
    )
}
