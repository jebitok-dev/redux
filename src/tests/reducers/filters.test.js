import moment from 'moment';
import filtersReducer from "../../reducers/filters";

test('should setup filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT' })
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
});

test("should set sort by to amount", () => {
    const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"})
    expect(state.sortBy).toBe("amount")
})

test("should set sort by sort by date", () => {
   const currentState = {
       text: "",
       sortBy: "amount",
       startDate: undefined,
       endDate: undefined
   }
   const state = filtersReducer(currentState, {type: "SORT_BY_DATE"})
   expect(state.sortBy).toBe("date");
})

test("should set text filter", () => {
    const action =  {
        type: "SET_TEXT_FILTER",
        text: "awesome cities"
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe(action.text)
    expect(state.text).toBe("awesome cities")
})

test("should set start date", () => {
    const startDate = moment();
    const action = {
        type: "SET_START_DATE",
        startDate,
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})

test("should set end date", () => {
    const endDate = moment(7500);
    const action = {
        type: "SET_END_DATE",
        endDate,
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})