import React from 'react';
import {connect } from "react-redux";
import { editExpense, removeExpense} from '../actions/expenses';
//use curly braces when using return
//react-router-dom gives us the object(props),match,params & id 

export class EditExpensePage extends React.Component {
    onSubmit=(expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    }
    onRemove = () => {
        this.props.removeExpense({id: this.props.expense.id})
        this.props.history.push("/")
    };
    render () {
        return (
            <div>
                <ExpenseForm 
            expense={this.props.expense} onSubmit={this.onSubmit}
            />
                <button onClick={() => {this.onRemove}}>Remove</button>
            </div> 
        )
    }
}

const mapStateToProps = (dispatch) => {
    return {
        expense: state.expense.find( (expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (id) => dispatch(removeExpense(id))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps) (EditExpensePage);