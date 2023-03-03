import React from 'react'

function DataComponent({ data, page }) {
    return (
        <div>
            <div style={{ position: 'fixed', marginLeft: "40%", overflow: ""}}>
                <h1>Infinite Scroll</h1>
            </div>
            {
                (data && data.length > 0) && data.map((d, index)=>{
                    return <div key={index} style={{ padding: "15rem", margin: "5rem", backgroundColor: "cadetblue", width: "50%" }}>
                    {"Page Number : " + ++index}
                </div>
                })
            }
        </div>
    )
}

export default DataComponent