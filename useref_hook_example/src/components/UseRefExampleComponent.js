import React, { useRef, useState } from 'react'

export const UseRefExampleComponent = () => {
    const luckyName = useRef(null);
    const [showName, setShowName] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        const nm = luckyName.current.value;
        nm === "" ? alert('Please fill the data') : setShowName(true);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <h5>Input lucky name</h5>

                <input type="text" ref={luckyName} />
                <button>Submit</button>
            </form>
            {
                showName ? <h2>
                    your lucky name is {luckyName.current.value}
                </h2> : ""
            }
        </div>
    )
}
