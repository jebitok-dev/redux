import React from "react";
import { connect } from "react-redux";
import {DateRangePicker} from "react-dates";
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
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (focusedInput) => {
        this.setState(() => ({focusedInput}))
    }

    render(){
    return (
        <div>
            <input type="text" value={props.filters.text}
             onChange={(e)=> {props.dispatch(setTextFilter
             (e.target.value));}} />
            <select 
            value={props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === "date") {
                    props.dispatch.sortByDate
                } else if (e.target.value === "amount")
                {
                    props.dispatch(sortByAmount())
                }
            }}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.focusedInput}
                onFocusChange={this.state.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={()=>false}
            />
        </div>
    )
        
    

const mapStateToProps = state => {
        return {
        filters: state.filters  
        };
    };

export default connect(mapStateToProps) (ExpenseListFilters);