import { FETCH_MENUS, FETCH_ORDERS, FETCH_HISTORY, ADD_ORDER, DELETE_ORDER, HANDLE_BAYAR,CHANGE_AMOUNT_ORDER } from '../utils/constants';
import axios from 'axios';
import swal from 'sweetalert';
import api from '../api/api';

const baseUrl = `http://localhost:3000`;

export const fetchMenus = () => {
    return async (dispatch) => {
        try {
            const response = await api.get('menus')
            if(response) {
                dispatch({ type: FETCH_MENUS, payload: response.data })
            }
        } catch (error) {
            console.log(error, `<<<<<<<<< error`);
        }
    }
}

export const fetchOrders = () => {
    return async (dispatch) => {
        try {
            const response = await api.get('orders');
            if(response) {
                dispatch({ type: FETCH_ORDERS, payload: response.data })
            }
            return response;
        } catch (error) {
            console.log(error, `<<<<<<<<<< error fetch orders`);
        }
    }
}

export const fetchHistory = () => {
    return async (dispatch) => {
        try {
            const response = await api.get('history');
            if(response) {
                dispatch({ type: FETCH_HISTORY, payload: response.data })
            }
            return response;
        } catch (error) {
            console.log(error, `<<<<<<< error fetch history`);
        }
    }
}

export const getOneOrder = async (id) => {
    const response = await api.getOne(`orders?product_id=${id}`);
    return response;
}

export const addOrder = (e, payload) => {
    return async (dispatch) => {
        const { data } = await getOneOrder(e.id);

        if(payload) {
            const response = await api.put(`orders/${payload.id}`, payload);
            if(response) {
                dispatch({ type: CHANGE_AMOUNT_ORDER })
            }
        } else if(data.length > 0) {
            const payload = {
                ...data[0],
                amount: data[0].amount + 1,
                total_price: data[0].total_price + data[0].price 
            }

            const response = await api.put(`orders/${data[0].id}`, payload);
            if(response) {
                dispatch({ type: ADD_ORDER, payload: response.data })
            }
        } else {
            const payload = {
                ...e,
                amount: 1,
                product_id : e.id,
                total_price: e.price
            }
            
            delete payload.id

            const response = await api.post(`orders`, payload)
            if(response) {
                dispatch({ type: ADD_ORDER, payload: response.data })
            }
        }
        return dispatch(fetchOrders());
    }
}

export const deleteOrder = (id) => {
    return async (dispatch) => {
        try {
            const response = await api.delete(`orders/${id}`)
            if(response) {
                dispatch({ type: DELETE_ORDER })
                dispatch(fetchOrders())
            }
        } catch (error) {
            console.log(error, `<<<<<< error delete order`);
        }
    }
}

export const handleBayar = () => {
    return async (dispatch) => {
        try {
            const {data} = await dispatch(fetchOrders());
            const payload = {
                created_at: "01-01-2022",
                orders: data
            }
            const response= await api.post(`history`, payload);

            if(response) {
                dispatch({ type: HANDLE_BAYAR, payload: response.data});
                if(data.length >= 1) {
                    data.map((e) => {
                        dispatch(deleteOrder(e.id))
                    })
                }
                swal("Transaksi berhasil di bayarkan", "", "success");
            }

        } catch (error) {
            console.log(error, `<<<<<<< error handle bayar`);   
        }
    }
}
