export const setZoneID = (id) => {
    window.localStorage.setItem('zone_id', id)
}

export const getZoneID = () => {
    return window.localStorage.getItem('zone_id')
}

export const removeZoneID = () => {
    window.localStorage.removeItem('zone_id')
}