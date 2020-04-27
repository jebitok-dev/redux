import React from "react";
import moment from "moment";
import { singleDatePicker, SingleDatePicker } from "react-dates";


export default class ExpenseForm extends React.Component  {
    constructor(props) {
        super(props)
        this.state={
            description: props.expense ? props.expense.description: "",
            note:   props.expense ? props.expense.note: "",
        amount: props.expense(100).toString(),
        createdAt: props.expense ? moment(props.expense.createdAt): moments,
        calendarFocused: false,
        error: ''
        }        
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
     if (amount.match(/^\d*(\.\d{0,2})?&/)){
        this.setState(() => ({amount}))
    }
    onDateChange= (createdAt) => {
        this.setState(() => ({createdAt}));
    }
    onFocusChange=({ focused }) => {
        this.setState(() => ({ calendarFocused: focused}));
    }
    onSubmit = (e) => {
        e.prevent.default()

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide description and amount'}))
        } else {
            this.setState(() => ({error: ''}))
        } this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
        })
    }
}

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form>
                    <input
                    type="text"
                    placeholder="description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                   />
                   <input
                   type="text"
                   placeholder="amount"
                   value={this.state.amount}
                   onChange={this.onAmountChange}
                   />
                   <SingleDatePicker
                   date={this.state.createdAt}
                   onDateChange={this.onFocusChange}
                   numberOfMonths={1}
                   isOutsideRange={()=> false}
                   />
                   <textarea
                   placeholder="Add a note for expense(optional) "
                   value={this.state.note}
                   onChange={this.onNoteChange}
                   ></textarea>
                   <button>Add Expense</button>
                </form>
            </div>
        )
    }
}