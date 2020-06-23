const reducer = (state, action) => {
    //console.log("SETTING ACTION", { action })
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.data }
        default:
            return { ...state }
    }
}

export default reducer