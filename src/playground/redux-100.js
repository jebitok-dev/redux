import { createStore } from 'redux';

const store = createStore((state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? 
            action.incrementBy : 1
            return {
                count: state.count + incrementBy
            }   
    case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ?
        action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
    case 'RESET':
        return {
            count: 0
        }
    case 'SET':
       // const count = typeof action.count === 'number' ? action.count : 1
        return{
            count: action.count
        }
            default:
                return state;
    }
});
store.subscribe(() => {
    console.log(store.getState())
})
//Actions -> an object that gets sent to the store
store.dispatch ({
    type: 'INCREMENT',
    incrementBy: 5
});
store.dispatch ({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch ({
    type: 'DECREMENT'
});

store.dispatch ({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'SET',
    count: 150
})