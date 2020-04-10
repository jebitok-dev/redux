import moment from 'moment';
import selectExpenses from "../../selectors/expenses";
import expenses from "../fixtures/expenses"

test('should filter by text value', () => {
    const filters = {
        text: 'o',
        //text: 'ijay',
        //text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
    //expect(result).toEqual([expenses[0], expenses[1]])
    //expect(result).toEqual([])
})

test("should filter by start date", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
})

test("should filter by end date", () => {
    const filters = {
        text: '', 
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(3, 'days')
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})

test("should filter by sort by date", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    } 
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test("should filters by sort by amount", () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
})