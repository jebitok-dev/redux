import uuid from 'uuid';
//destructuring
export const addExpense = (
    {
     description = '',//if no description, then give "";
     note = '',
     amount = 0,
     createdAt = 0
    } = {}
   ) => ({
    type: 'ADD_EXPENSE',
    expense: {
     id: uuid(),
     description,
     note,
     amount,
     createdAt
    }
   });// REMOVE_EXPENSE
 export  const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
   });
   // EDIT_EXPENSE
 export  const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });
