
export const APRI_MODAL = 'APRI_MODAL'
export const CHIUDI_MODAL = 'CHIUDI_MODAL'

const reducer = (state, action) => {
    if (action.type === APRI_MODAL) {
        return ({
            ...state,
            isModalOpen: true,
        })
    }
    if (action.type === CHIUDI_MODAL) {
        return ({
            ...state,
            isModalOpen: false
        })
    }
}

export default reducer