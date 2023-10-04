import React from 'react';
import { Text } from 'react-native';

export function FormatDate({ date }) {
  // Create a Date object from the provided date string
  const formattedDate = new Date(date);

  // Get the month, day, and year
  const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
  const day = String(formattedDate.getDate()).padStart(2, '0');
  const year = formattedDate.getFullYear();

  // Combine them in the desired format
  const formattedDateString = `${month}/${day}/${year}`;

  return <Text>{formattedDateString}</Text>;
}

export function getMinusDays(date,days){
return new Date(date.getFullYear(),date.getMonth(),date.getDate()-days)
}
