import React from "react"

const ColumnHints = ({ highlighted, columnHints }) => {

    return (
        <>
            <div className='hints-column mb-4'>
                <div className=''></div>
                {
                    columnHints.map((hint, index) => {
                        return (
                            <div
                                key={index}
                                className={`ml-4 hint ${highlighted.col === index ? 'highlight' : ''}`}
                                style={{ flexDirection: 'column' }}>
                                {
                                    hint.map((el, i) => {
                                        return <div key={`${index}-${i}`}>{el}</div>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ColumnHints