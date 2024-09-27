import React, { useContext } from "react"

const GridWithRowHints = ({ appContext }) => {
    const info = useContext(appContext)
    return (
        <div className='grid-with-row-hints'>
            {
                info.grid.map((row, rIndex) => {
                    return (
                        <div key={rIndex} className='nonogram-row'>
                            <div className={`mr-4 hint ${info.highlighted.row === rIndex ? 'highlight' : ''}`}>
                                {
                                    info.rowHints[rIndex].map((hints, hintsIndex) => {
                                        return <div key={hintsIndex} className={`row-hint`}>{hints}</div>
                                    })
                                }
                            </div> {/*La prima cella di ogni riga è l'indizio della riga i-esima */}
                            {
                                row.map((cell, colIndex) => {
                                    const cellKey = `${rIndex}-${colIndex}`;
                                    const isError = info.celleErrate.hasOwnProperty(cellKey)
                                    return <div
                                        key={cellKey}
                                        className={`nonogram-cell
                                        ${cell ? 'filled' : ''}
                                        ${cell === 2 ? 'aiuto' : ''} ${isError ? 'wrong' : ''}`}
                                        onClick={() => {
                                            if (!isError) {
                                                info.toggleCell(rIndex, colIndex)
                                            }
                                        }}
                                        onMouseEnter={() => info.handleMouseEnter(rIndex, colIndex)}
                                        onMouseLeave={() => info.handleMouseLeave()}
                                    >
                                        {isError && <div id="wrong"></div>}
                                    </div>
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GridWithRowHints