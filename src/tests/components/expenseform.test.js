//Testing user interaction with forms
import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from "../../components/ExpenseForm";
import Expenses from "../fixtures/expenses";

//No Expense
test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})

test("should render ExpenseForm correctly", () => {
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
    const amount = 5000;
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find("input").simulate("change"), {
        target: { value }
    }
    expect(wrapper.stat("amount")).toBe(value)
});

test("should set amount if invalid input", () => {

})