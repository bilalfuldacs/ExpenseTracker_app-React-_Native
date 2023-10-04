import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./constants/Style";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./UI/IconButton";
import ExpensesContextProvider from "./store/Expenses_context";
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({navigation})=>({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight:({tintColor})=><IconButton icon='add' size={24} color={tintColor} onPress={()=>{navigation.navigate('ManageExpenses')}}/>
      })}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="AllExpenses" component={AllExpenses}  options={{
          title: "All Expenses",
          tabBarLabel: "All Expense",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <ExpensesContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
    headerTintColor:'white'}}>
        <Stack.Screen
          name="ExpensesOverview"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ManageExpenses" component={ManageExpenses} options={{presentation:'modal',title:"Manage Expenses"}} />
      </Stack.Navigator>
    </NavigationContainer>
    </ExpensesContextProvider>
  );
}

const styles = StyleSheet.create({});
