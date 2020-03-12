import { createStore } from 'redux';

const store = createStore((state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }   
    case 'DECREMENT':
            return {
                count: state.count - 1
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
    type: 'INCREMENT'
});
store.dispatch ({
    type: 'INCREMENT'
});
store.dispatch ({
    type: 'DECREMENT'
});

