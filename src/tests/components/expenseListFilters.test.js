import React from "react";
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilters, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilters = jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilters={setTextFilters}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />
    );
});

test("should render ExpenseListFilters", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should sort by date", () => {
    const value = "date";
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find("select").simulate("change", {
        target: {value},
    });
    expect({sortByDate}).toHaveBeenCalledWith();
});

test("should sort by amount", () => {
    const value = "amount";
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find("select").simulate("change", {
        target: {value},
    });
    expect({sortByAmount}).toHaveBeenCalledWith();
});