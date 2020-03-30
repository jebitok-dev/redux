import React from 'react';
import ReactDOM from 'ReactDOM';
import { provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './reducers/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore(); 

store.subscribe(() => {
 const state = store.getState();
 const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
 console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));store.dispatch(setTextFilter('ffe'));

ReactDOM.render(<AppRouter/>, document.getElementById('app'));