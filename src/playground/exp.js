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

// const addExpense = (
//     {
//         description = '',
//         note = '',
//         amount = 0,
//         createdAt = 0
//     } = {}
// ) => {
//     return {
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: uuid(),
//             description,
//             note,
//             amount,
//             createdAt
//         }
//     }
// }

//REMOVE_EXPENSE
const removeExpense = (expense = {}) => {
    return{
        type: 'REMOVE_EXPENSE',
        id: expense.id
    }
}

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
} 
//SET_TEXT_FILTER
const setTextFilter = (text = '') => {
    return {
    type: 'SET_TEXT_FILTER',
    text
    }
}

//SORT_BY_AMOUNT
const sortByAmount = () => {
    return {
    type: 'SORT_BY_AMOUNT'
    }
}
//SORT_BY_DATE
const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}
//SET_START_DATE
const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}
 //SET_END_DATE
const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}

//Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {    
        case 'ADD_EXPENSE':
            return [ 
                ...state,
                action.expense
            ];
            //return state.concat(action.expense) 
            //return Object.assign({}, state, action.expense); - good for {}
        case 'REMOVE_EXPENSE':
            // return [
            //     ...state,
            //     ...action.expense
            // ]
            return state.filter((expense) => expense.id !== action.id);
        case 'EDIT_EXPENSES':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return Object.assign({},expense, action.updates)
                //  return {
                //     ...expense,
                //     ...action.updates
                // };
                 } else {
                    return expense;
                } 
            })
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
        case 'SET_TEXT_FILTER':
            return Object.assign({}, state, {text: action.text})
            //return Object.assign((action.text));
        case 'SORT_BY_AMOUNT':
            return Object.assign({}, state, {
                sortBy: 'amount'
            });
        case 'SORT_BY_DATE':
            return Object.assign({}, state, {
                sortBy: 'date'
            });
        case 'SET_START_DATE':
            return Object.assign({}, state, {startDate: action.startDate})
        case 'SET_END_DATE':
            return Object.assign({}, state, {endDate: action.endDate})
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

// const filterOne = store.dispatch(setTextFilter({
//     text: 'sport'
// }))

store.dispatch(removeExpense({id: expenseThree.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {description: 'MilkShake'}));
store.dispatch(setTextFilter('binance'));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(5000));
store.dispatch(setEndDate(10000));