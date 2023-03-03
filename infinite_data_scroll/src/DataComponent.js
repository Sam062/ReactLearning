import React from 'react'

function DataComponent({ data, page }) {
    return (
        <div>
            List of Data
            {/* {
                (data && data.length > 0) ?
                    data.map((row, index) => {
                        return <div key={index} style={{ padding: "5rem", margin: "5rem", backgroundColor: "cadetblue", width: "50%" }}>
                            {row.name}
                        </div>
                    })
                    :
                    <div>
                        No data Available
                    </div>
            } */}

            <div style={{ padding: "15rem", margin: "5rem", backgroundColor: "cadetblue", width: "50%" }}>
                {"Page Number : " + page}
            </div>
        </div>
    )
}

export default DataComponent