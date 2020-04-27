//Testing user interaction with forms
import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from "../../components/ExpenseForm";
import Expenses from "../fixtures/expenses";
import moment from 'moment';

//No Expense
test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})

test("should render Expense Form correctly", () => {
    const wrapper = shallow(<ExpenseForm Expenses={Expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
})

//mimic how someone uses a form 
test("should show error on invalid submission", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {},
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
    const value = "visit Cairo";
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("input").at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state("description")).toBe(value)
});

test("should set note on text area change", () => {
    const note = "awesome music";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("text area").simulate("change", {
        target: { value }
    })
    expect(wrapper.state("note")).toBe(value)
});

test("should set amount if valid input", () => {
    const value = 14.75;
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    })
    expect(wrapper.state("amount")).toBe(value)
});

test("should set amount if invalid input", () => {
    const value  = 37.824;
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    wrapper.find("input").simulate("change", {
        target: { value }
    })
    expect(wrapper.state("amount")).toBe("")
})

test("should call prop onSubmit for valid form submission", () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expenses={expenses[2]} onSubmit={onSubmitSpy}/>)
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe("")
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[2].description,
        amount: expenses[2].amount,
        note: expenses[2].note,
        createdAt: expenses[2].createdAt
    })
})

test("should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("SingleDatePicker").prop("onDateChange")(now)
    expect(wrapper.state(createdAt)).toEqual(now)
})

test('should get calendar focus when clicked', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("SingleDatePicker").prop('onFocusChange') ({ focused });
    expect(wrapper.state ("calendarFocused")).toBe(focused);
})