import React from "react";
import moment from "moment";
import { singleDatePicker, SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker-css'


export default class ExpenseForm extends React.Component  {
    state= {
        description: '',
        note: '',
        amount: "",
        createdAt: moment(),
        calendarFocused: false
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
};

    render() {
        return (
            <div>
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
                </form>
            </div>
        )
    }
}