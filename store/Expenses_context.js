import { createContext,useReducer } from "react"
const dummyexpenses = [
    {
      id: 'e1',
      description: 'Groceries',
      amount: 50.0,
      date: new Date('2023-10-02'),
    },
    {
        id: 'e2',
      description: 'Gasoline',
      amount: 30.0,
      date:new Date( '2023-10-03'),
    },
    {
        id: 'e3',
      description: 'Dinner with friends',
      amount: 75.5,
      date: new Date('2023-10-04') ,
    },
    {
        id: 'e4',
      description: 'Movie tickets',
      amount: 20.0,
      date: '2023-10-05',
    },
    {
      id: 5,
      description: 'Utilities',
      amount: 120.0,
      date: '2023-10-06',
    },
  ];
export const ExpenseContext=createContext({
    expenses:[],
    addExpense:({description,amount,date})=>{},
    deleteExpense :(id)=>{},
    updateExpense :(id,{description,amount,date})=>{},
});

function expensesReducer(state,action){
    switch(action.type){
        case 'Add':
            const id=new Date().toString()+Math.random();
            return [{...action.payload,id:id},...state,]
        case 'Update':
            const updateableExpenseData=state.findIndex((expense)=>expense.id===action.payload.id);
            const updatedExpense=state[updateableExpenseData];
            const expensesItem={...updatedExpense,...action.payload.data};
            const updatedExpenses=[...state];
            updatedExpenses[updateableExpenseData]=expensesItem;
            return updatedExpense

        case 'Delete':
            return state.filter((expense)=>expense.id!== action.payload)
            default:
                return state;

    }


}
function ExpensesContextProvider({children}){
   const[expensesState,dispatchExpenseReducer]= useReducer(expensesReducer,dummyexpenses);

   function addExpense(expenseData){
    dispatch({type:'Add',payload:expenseData})
   }
   function deleteExpense(id){
    dispatch({type:'Delete',payload:id})
   }
   function updateExpense(id,expenseData){
    dispatch({type:'Update',payload:{id,expenseData}})
   }
   const value={
    expenses:expensesState,
addExpense:addExpense,
deleteExpense:deleteExpense,
updateExpense:updateExpense

}
    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}
export default ExpensesContextProvider;