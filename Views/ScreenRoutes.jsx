import React from 'react';
import { SafeAreaView } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Calculadora from './Calculadora';
import Home from './Home';

import SCREENS from './Routes';

function ScreenRoutes() {
    return (
        <NativeRouter>
            <SafeAreaView>
                <Routes>
                    <Route exact path={SCREENS.HOME} Component={Home} />
                    <Route path={SCREENS.CALCU} Component={Calculadora} />
                    
                </Routes>

            </SafeAreaView>
        </NativeRouter>
    )
}
export default ScreenRoutes