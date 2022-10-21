import React, { useContext } from 'react'
import { FirstName, LastName } from '../App';

export const ComponentC = () => {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <div>
            ComponentC

            <div>
                My name is {fname} {lname}
            </div>
        </div>
    )
}
