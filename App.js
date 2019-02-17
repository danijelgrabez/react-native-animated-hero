import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Screen from './components/Screen';
import Text from './components/Text';
import SampleContent from './components/SampleContent';

import NavigationSample from './components/NavigationSample';
import { normalize } from './utils/normalizeSizes';

const HERO_IMAGE = require('./assets/sample.jpg');

const App = props => (
  <Screen
    navigationTitle="Screen title which spans in multiple lines"
    navigation={<NavigationSample />}
    heroImageUrl={HERO_IMAGE}
    heroContent={
      <Text size={30} color="#fff" align="center">Screen title which spans in multiple lines</Text>
    }
  >
    <SampleContent />
  </Screen>
);

export default App;