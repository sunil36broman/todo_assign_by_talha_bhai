import Axios from 'axios'

import * as Types from './types'
Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';


export const loadTransactions = () => dispatch => {
    Axios.get('/posts')
        .then(response => {
            dispatch({
                type: Types.LOAD_TRANSACTIONS,
                payload: {
                    transactions: response.data
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}

export const addNewTransaction = transaction => dispatch => {
    Axios.post('/posts', transaction)
        .then(response => {
            console.log(response)
            dispatch({type: Types.CREATE_TRANSACTION, payload: { transaction: response.data}})
        })
        .catch(error => {
            console.log(error)
        })
}

export const removeTransaction = id => dispatch => {

    Axios.delete(`/posts/${id}`)
        .then(response => {
            console.log(response)
            dispatch({type: Types.REMOVE_TRANSACTION, payload: {id: id}})
        })
        .catch(error => {
            console.log(error)
        })
}

export const updateTransaction = (id, transaction) => dispatch => {
    console.log("updated ttt")
    Axios.put(`/posts/${id}`, transaction)
        .then(response => {
            console.log("updated")
            dispatch({type: Types.UPDATE_TRANSACTION, payload: {transaction: response.data}})
        })
        .catch(error => {
            console.log(error)
        })
}