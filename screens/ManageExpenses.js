import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constants/Style";
import Button from "../UI/Button";
import { ExpenseContext } from "../store/Expenses_context";
function ManageExpenses({ route, navigation }) {
  const expensesCtx = useContext(ExpenseContext);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmlHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(expenseId,{
        description: "paper",
        amount: 20,
        date: new Date("2022-12-2"),
      });
    } else {
      expensesCtx.addExpense({
        description: "paper",
        amount: 20,
        date: new Date("2022-12-2"),
      });
    }
    navigation.goBack();
  }
  function deletelHandler() {
    navigation.goBack();
    expensesCtx.deleteExpense(expenseId);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmlHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deletelHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenses;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    paddingTop: 8,
    marginTop: 16,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
