import { FETCH_ORDERS, FETCH_MENUS, FETCH_HISTORY, ADD_ORDER, CHANGE_AMOUNT_ORDER, DELETE_ORDER, HANDLE_BAYAR } from '../utils/constants';

const initState = {
    menus: [],
    orders: [],
    history: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_MENUS:
            return {
                ...state,
                menus: action.payload
            }
        case FETCH_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        case FETCH_HISTORY:
            return {
                ...state,
                history: action.payload
            }
        case ADD_ORDER: 
            return {
                ...state,
                orders: [ ...state.orders, action.payload ]
            }
        case CHANGE_AMOUNT_ORDER:
            return {
                ...state,
            }
        case DELETE_ORDER: 
            return {
                ...state
            }
        case HANDLE_BAYAR:
            return {
                ...state,
                history: [ ...state.history, action.payload ]
            }
        default:
            return state;
    }
}

export default reducer;