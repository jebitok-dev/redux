
// Expenses Reducer
const expensesReducerDefaultState = [];
export default const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
     case 'ADD_EXPENSE':
      return [
       ...state,
       action.expense
      ];
     case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
     case 'EDIT_EXPENSE':
      return state.map((expense) => {
       if (expense.id === action.id) {
           return Object.assign({},expense, action.updates);
       //  return {
       //   ...expense,
       //   ...action.updates
       //  };
       } else {
        return expense;
       }
      });
     default:
      return state;
    }
   };