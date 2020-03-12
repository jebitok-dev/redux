import { createStore } from 'redux';

const store = createStore((state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }   
    case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ?
        action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
    case 'RESET':
        return {
            count: 0
        }
    case 'SET':
        return{
            count: action.count
        }
            default:
                return state;
    }
});
store.subscribe(() => {
    console.log(store.getState());
})
//Actions -> an object that gets sent to the store
const incrementCount = (payload = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: typeof payload.incrementBy === 'number' ? 
        payload.incrementBy: 1 //payload. applies to object
    }
}

const resetCount = () => {
    return {
        type: 'RESET'
    }
}

const decrementCount = (payload = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: typeof payload.decrementBy === 'number' ? 
        payload.decrementBy: 1
    }
}

const setCount = (payload) => {
    return {
        type: 'SET',
        count: payload.count
    }
} 


store.dispatch (incrementCount({incrementBy: 5}));
store.dispatch (incrementCount());

store.dispatch(resetCount())

store.dispatch(decrementCount({decrementBy: 10}))
store.dispatch(decrementCount())
 
store.dispatch(setCount({count: 150}))



