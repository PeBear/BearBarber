import {StatusBar, useColorScheme} from 'react-native';
import {DarkTheme, DefaultTheme, NavigationContainer,} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigator from './src/navigation/RootNavigator';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import React from 'react';
import {AppearanceProvider} from 'react-native-appearance';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeContext} from './src/app/theme-context';

// const loadingTasks: Task[] = [
//   () =>
//     LoadFontsTask({
//       "opensans-regular": require("../assets/fonts/opensans-regular.ttf"),
//       "roboto-regular": require("../assets/fonts/roboto-regular.ttf"),
//     }),
//   () =>
//     AppStorage.getMapping(defaultConfig.mapping).then((result) => [
//       "mapping",
//       result,
//     ]),
//   () =>
//     AppStorage.getTheme(defaultConfig.theme).then((result) => [
//       "theme",
//       result,
//     ]),
// ];

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF",
  },
};

const navigatorDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#222B45",

  },
};
// const navigatorDarkTheme = {
//   dark: false,
//   colors: {
//     primary: "#222B45",
//     background: "#222B45",
//     card: "#222B45",
//     text: "#FFF",
//     border: "rgb(199, 199, 204)",
//     notification: "rgb(255, 69, 58)",
//   },
// };

export default function App() {
  const [isDarkTheme, setDarkTheme] = React.useState(false);

  const toggleDark = () => {
    setDarkTheme(!isDarkTheme);
  };

  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme();

  return (
    <React.Fragment>
      <IconRegistry icons={[EvaIconsPack]} />
      <AppearanceProvider>
        <ThemeContext.Provider value={{ isDarkTheme, toggleDark }}>
          <ApplicationProvider
            {...eva}
            theme={isDarkTheme ? eva.dark : eva.light}
          >
            <SafeAreaProvider>
              <StatusBar
                barStyle={isDarkTheme ? "light-content" : "dark-content"}
              />
              <NavigationContainer
                theme={isDarkTheme ? navigatorDarkTheme : navigatorTheme}
              >
                <Stack.Navigator>
                  <Stack.Screen
                    name="RootNavigator"
                    component={RootNavigator}
                    options={{ headerShown: false }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </SafeAreaProvider>
          </ApplicationProvider>
        </ThemeContext.Provider>
      </AppearanceProvider>
    </React.Fragment>
  );
  // return (
  //   <>
  //     <IconRegistry icons={EvaIconsPack} />
  //     <ApplicationProvider {...eva} theme={eva.light}>
  //       <NavigationContainer theme={navigatorTheme}>
  //         <Stack.Navigator>
  //           <Stack.Screen
  //             name="RootNavigator"
  //             component={RootNavigator}
  //             options={{ headerShown: false }}
  //           />
  //         </Stack.Navigator>
  //       </NavigationContainer>
  //     </ApplicationProvider>
  //   </>
  // );
}

// const Splash = ({ loading }): React.ReactElement => (
//   <SplashImage
//     loading={loading}
//     source={require('../assets/images/image-splash.png')}
//   />
// );
//
// export default (): React.ReactElement => (
//   <AppLoading
//     tasks={loadingTasks}
//     initialConfig={defaultConfig}
//     placeholder={Splash}>
//     {props => <App {...props} />}
//   </AppLoading>
// );
