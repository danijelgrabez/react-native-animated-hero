import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Text from '../Text';

const NavigationSampleStyles = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

/**
 * NavigationSample component
 */
const NavigationSample = props => (
  <NavigationSampleStyles {...props}>
    <TouchableOpacity><Text color="white">L</Text></TouchableOpacity>
    <TouchableOpacity><Text color="white">R</Text></TouchableOpacity>
  </NavigationSampleStyles>
);

export default NavigationSample;