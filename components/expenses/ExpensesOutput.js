import React from 'react'
import { GlobalStyles } from '../../constants/Style'
import { Text,View,StyleSheet } from 'react-native'
import ExpensesSummary from './ExpensesSmmary'
import ExpensesList from './ExpensesList'

  
  
  

function ExpensesOutput({expenses,expensesPeriod,fallBackText}) {
    let content=<Text style={styles.infoText}>{fallBackText}</Text>
    if(expenses.length>0){
        content=  <ExpensesList expenses={expenses}/>
    }
  return (
    <View style={styles.container}>
     <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
   
{content}
    </View>
  )
}

export default ExpensesOutput;
const styles=StyleSheet.create({
    container:{
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700,
        flex:1,
     
    
    
    },
    period:{
        fontSize:14,
        fontWeight:'bold',
        color:GlobalStyles.colors.primary400,
    },
    sum:{
        fontSize:16,
        fontWeight:'bold',
        color:GlobalStyles.colors.primary500,
    },
    infoText:{
        color:'white',
        fontSize:16,
        textAlign:'center',
        marginTop:32
    }
    })