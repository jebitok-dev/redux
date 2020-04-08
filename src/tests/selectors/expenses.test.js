import moment from 'moment';
import selectExpenses from "../../selectors/expenses";

const expenses = [{
    id: '1',
    description: 'Espresso',
    note: 'great',
    amount: 1195,
    createdAt: moment(0)
}, {
    id: '2',
    description: 'Coffee',
    note: 'awesome',
    amount: 2590,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Road trip',
    note: 'fantastic',
    amount: 7850,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

test('should filter by text value', () => {
    const filters = {
        // text: 'o',
        text: 'ijay',
        //text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    //expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
    //expect(result).toEqual([expenses[0], expenses[1]])
    expect(result).toEqual([])
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