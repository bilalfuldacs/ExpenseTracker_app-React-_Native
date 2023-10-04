import React from 'react'
import { Text,FlatList } from 'react-native'
import ExpenseItem from './ExpenseItem'

const renderItem=(itemData)=>{
return (<ExpenseItem {...itemData.item}/>)
console.log(itemData.item);
}
function ExpensesList({expenses}) {

  return (
    <FlatList data={expenses} renderItem={renderItem} keyExtractor={(item)=>item.id}>List Of expenses</FlatList>
  )
}

export default ExpensesList