import { HomeScreen } from "../screens/HomeScreen";
import React from "react";
import StatisticScreen from "../screens/StatisticScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPaymentModal from "../screens/payment/AddPaymentModal";
import TransactionScreen from "../screens/transactions/TransactionScreen";
import { Text } from "@ui-kitten/components";
import QRScannerScreen from "../screens/qrscanner/QRScannerScreen";
import { LoginScreen } from "../screens/init/LoginScreen";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName={"HomeScreen"}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="StatisticScreen"
        component={StatisticScreen}
        options={{
         'Statistic'atistic",
        }}
      />
      <Stack.Screen
        name="TransactionScreen"
        component={TransactionScreen}
        options={{
         'Transaction'saction",
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
         'Login' "Login",
        }}
      />

      <Stack.Group
        screenOptions={({ navigation }) => ({
          pres'modal'n: "modal",
          headerLeft: () => <Text onPress={navigation.goBack}>Cancel</Text>,
        })}
      >
        <Stack.Screen
          name="AddPaymentModal"
          component={AddPaymentModal}
          options={{
         'Add Payment'd Payment",
          }}
        />
        <Stack.Screen
          name="QRScannerScreen"
          component={QRScannerScreen}
          options={{
         'QRScannerScreen'nerScreen",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
