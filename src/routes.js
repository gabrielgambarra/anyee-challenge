import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SplashView from './pages/SplashView';
import Main from './pages/Main';

export default createAppContainer(
    createSwitchNavigator({
        SplashView,
        Main,
    })
);