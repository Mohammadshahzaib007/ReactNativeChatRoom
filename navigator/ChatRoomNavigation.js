import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreem from "../Screens/HomeScreen";
import ChatScreen from "../Screens/ChatScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../Screens/SignupScreen";

const ChatRoomNavigator = createStackNavigator({
  Home: HomeScreem,
  Chat: ChatScreen,
  Login: LoginScreen,
  Signup: SignupScreen,
}, {
    initialRouteName: 'Login'
});

export default createAppContainer(ChatRoomNavigator);
