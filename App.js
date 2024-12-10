import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import CircularProgressBarComp from './Components/CircularProgressBar';
import Title from './Components/Title';
import { StatusBar } from 'react-native';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Title/>
    <CircularProgressBarComp/>
  </Layout>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <HomeScreen />
    <StatusBar barStyle="light-content" backgroundColor="#000" />
  </ApplicationProvider>
);