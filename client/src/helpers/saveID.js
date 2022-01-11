export const setSaveID = (id) => {
    window.localStorage.setItem('save_id', id)
}

export const getSaveID = () => {
    return window.localStorage.getItem('save_id')
}

export const removeSaveID = () => {
    window.localStorage.removeItem('save_id')
}