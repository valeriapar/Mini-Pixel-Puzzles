import heart_icon from '../img/svg/icone/heart.svg'
import heart_fill_icon from '../img/svg/icone/heart_fill.svg'

const Vite = ({errori}) => {
    if (errori === 0) {
        return (
            <div className='d-flex align-items-center justify-content-around'>
                <Cuore vita={true}/>
                <Cuore vita={true}/>
                <Cuore vita={true}/>
            </div>
        )
    }
    if (errori === 1) {
        return (
            <div className='d-flex align-items-center justify-content-around'>
                <Cuore vita={true}/>
                <Cuore vita={true}/>
                <Cuore vita={false}/>
            </div>
        )
    }
    if (errori === 2) {
        return (
            <div className='d-flex align-items-center justify-content-around'>
                <Cuore vita={true}/>
                <Cuore vita={false}/>
                <Cuore vita={false}/>
            </div>
        )
    }
    if (errori === 3) {
        return (
            <div className='d-flex align-items-center justify-content-around'>
                <Cuore vita={false}/>
                <Cuore vita={false}/>
                <Cuore vita={false}/>
            </div>
        )
    }
}

const Cuore = ({vita}) => {
    return (
        <div className='m-1'>
            <img src={vita ? heart_fill_icon : heart_icon} alt='vita'/>
        </div>
    )
}

export default Vite