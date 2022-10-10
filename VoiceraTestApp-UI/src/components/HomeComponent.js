import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { validdateCandidateDetails } from '../Service/QuestionService';

export const HomeComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    }

    const onSubmit = (e) => {
        console.log(email + ", " + password)
        e.preventDefault();
        validdateCandidateDetails(email, password).then(
            response => {
                // alert(response.data)
                if (response.data === 1) {
                    setError("");
                    navigate('/' + email + "/" + password);
                } else if (response.data > 1) {
                    setError("You have already appeared for this test. Plase talk to admin.")
                } else {
                    setError("Email or passcode is incorrect");
                }
            }
        ).catch((response) => {
            setError("Something went wrong");
            console.log("Error catched", response.data)
        });
    }

    return (
        <div className='mt-4' style={{ display: "flex", justifyContent: "space-around", marginBottom: "8rem" }}>
            <div style={{ width: "50%" }} className="text-muted p-2 mt-5 ms-5">
                <label className='p-2 border rounded' style={{ backgroundColor: "cadetblue", color: "antiquewhite" }}>Please go through below steps before you proceed to test.</label>
                <ul>
                    <li>Do not refresh the page, you might loose the test</li>
                    <li>Do not switch tabs between the test</li>
                    <li>Do not look here and there except the screen</li>
                    <li>Do not copy/paste any stuff</li>
                    <li>Candidate must be visible on camera</li>
                    <li>Keep your camera and mic turned on</li>
                </ul>
            </div>
            <form onSubmit={onSubmit} style={{ width: "40%" }}>
                <div className='p-5 m-2' style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column", height: "18rem" }}>
                    {/* <div className='' style={{ display: "flex", justifyContent: "space-between" }}>
                        <label><strong>Date:</strong> 01-Dec-2022</label>
                        <label><strong>Time:</strong> 05:30 PM to 06:30 PM</label>
                        <label><strong>Duration:</strong> 1 hour</label>
                    </div>< br /> */}

                    <input className='form-control m-1' type="email" placeholder='enter your email' value={email} required onChange={handleEmailChange} />
                    <input className='form-control m-1' type="password" placeholder='enter provided password' value={password} required onChange={handlePasswordChange} />

                    {
                        error && <span className='text-danger m-1 ms-2 '>
                            {error}
                        </span>
                    }

                    <button className='form-control btn border radius m-1' style={{ backgroundColor: "cadetblue" }}
                        disabled={error}>
                        <Link to={"/" + email} style={{ textDecoration: "none", backgroundColor: "cadetblue", color: "antiquewhite" }}>Start Test</Link>
                    </button>
                </div>
            </form>
            <div style={{ width: "10%" }}>
            </div>
        </div>
    )
}
