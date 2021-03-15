import {createStore} from 'redux'

const initState = {
    page: 'TopPage',
    login: false,
    username: 'no login',
}

export function Reducer(state = initState, action){
    switch (action.type){
        case 'ChangePage':
            let newpage = state.page;
            return{
                page: newpage,
            }
        default:
            return state;
    }
}

export default createStore(Reducer);