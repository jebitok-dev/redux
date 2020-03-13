import { createStore, combineReducers} from 'redux'
import uuid from 'uuid';

//ADD EXPENSE (action creator)
const addExpense = (expense = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: expense.description ? expense.description: '',
            note: expense.note ? expense.note: '',
            amount: expense.amount ? expense.amount: 0,
            createdAt: expense.createdAt ? expense.createdAt: 0
        }
    }
}
 
//Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {    
        case 'ADD_EXPENSE':
            //return state.concat(action.expense) 
            /*return [ 
                ...state,
                action.expense
            ]*/
            return Object.assign({}, state, action.expense)
        default:
            return state;
    }
}

//filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({
     description: 'freelance', amount: 500}));
const expenseTwo = store.dispatch(addExpense({
    description: 'coffee', amount: 600}))
const expenseThree = store.dispatch(addExpense());