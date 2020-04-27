import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from "../actions/filters";

class ExpenseListFilters extends React.Component {
    state = {
        focusedInput: null
    }
    onDatesChanges = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (focusedInput) => {
        this.setState(() => ({focusedInput}))
    }
    onFocusChange = (focusedInput) => {
        this.setState(() => ({focusedInput}))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onSortChange =(e) => {
        if(e.target.value === "date") {
            this.props.sortByDate();
        } else if (e.target.value === "amount") {
            this.props.sortByAmount()
        }
    };

    render() {
    return (
            <div>
                <input 
                type="text" 
                value={this.props.filters.text}
                onChange={this.props.setTextFilter}
                 />
                <select 
                value={this.props.filters.sortBy}
                // onChange={(e) => {
                //     if (e.target.value === "date") {
                //         props.dispatch.sortByDate
                //     } else if (e.target.value === "amount")
                //     {
                //         props.dispatch(sortByAmount())
                //     }
                // }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.state.onDatesChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={this.state.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
            </div>  
        )
    }
}
    
    

const mapStateToProps = state => {
        return {
        filters: state.filters  
        };
    };

const mapDispatchToProps = dispatch = {
    return {
        setStartDate: startDate =>(setStartDate(startDate)),
        setEndDate: endDate => (setEndDate(endDate)),
        setTextFilter: text => dispatch(setTextFilter(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ExpenseListFilters);