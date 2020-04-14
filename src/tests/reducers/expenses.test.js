import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set the default state ", () => {
    const state = expenseReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

//test("should not remove expense")
test("should remove expense if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-13"
    }
    const state = expenseReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
    expect(state).toEqual(expenses)
})

// test("should add an expense", () => {
//     const trip = {
//         id: '5',
//         description: 'Visit Egypt',
//         createdAt: 9700,
//         amount: 15000
//     }
//     const action = {
//         type: 'ADD_EXPENSE',
//         expense: trip
//     }
//     const state = expenseReducer(expenses, action)
//     expect(state).toEqual([expenses[0],expenses[1], expenses[2], expenses[3]])
// })

// test("should edit an expense", () => {
//     const action = {
//         type: "EDIT_EXPENSE",
//         id: expenses[2].id
//     }
//     const state = expenseReducer(expenses, action)
//     expect(state).toEqual([expenses])
// })