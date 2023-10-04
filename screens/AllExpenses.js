import React,{useContext} from 'react'
import { Text } from 'react-native'
import ExpensesOutput from '../components/expenses/ExpensesOutput'
import { ExpenseContext } from '../store/Expenses_context';
function AllExpenses() {
    const expensesCtx=useContext(ExpenseContext);
  return (
<ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total"/>
  )
}

export default AllExpenses