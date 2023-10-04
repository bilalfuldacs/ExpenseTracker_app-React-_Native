import React, { useContext } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { ExpenseContext } from "../store/Expenses_context";
import { getMinusDays } from "../util/FormatDate";
function RecentExpenses() {
  const expensesCtx = useContext(ExpenseContext);
  const recentExpenses = expensesCtx.expenses.filter((item) => {
    const today = new Date();
    const date7daysAgo = getMinusDays(today, 7);
    return item.date > date7daysAgo;
  });


  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallBackText="No expense for last 7 days"
    />
  );
}

export default RecentExpenses;
