import React from 'react';
import {connect } from "react-redux";
import { editExpense, removeExpense} from '../actions/expenses';
//use curly braces when using return
//react-router-dom gives us the object(props),match,params & id 

export class EditExpensePage extends React.Component {
    onSubmit={expense => {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push("/");
} 
render () {
    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm 
        expense={props.expense} />
            <button onClick={() => {
        props.dispatch(removeExpense({id: props.expense.id}));
        props.history.push("/");
        }}
        >Remove</button>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (expense) => dispatch(editExpense(expense))
    }
}
 
export default connect(null, mapDispatchToProps) (EditExpensePage);