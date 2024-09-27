import React from 'react'

const TopBarGame = ({ level }) => {
    return (
        <div className='d-flex align-items-center justify-content-center container mb-2 mt-2 topbar shadow'
            style={{ fontSize: '30px' }}>
            Level {level[0].id + 1}
        </div>
    )
}

export default TopBarGame