import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components';
import { normalize } from '../../utils/normalizeSizes';
import { useSafeArea } from '../../utils/useSafeArea';
import { HERO_MAX_HEIGHT, HERO_MIN_HEIGHT } from './screenUtils';

export const Wrapper = styled.View`
  flex: 1;
  padding-top: ${normalize(30)};
`;

export const NavigationWrapper = styled.View`
  padding-top: ${normalize(20)};
  padding-horizontal: ${normalize(20)};
  position: absolute;
  z-index: 10;
  width: 100%;
  height: ${HERO_MIN_HEIGHT};
  justify-content: center;
`;

export const HeroContentWrapper = styled.View`
  margin-horizontal: ${normalize(20)};
  align-items: center;
`;

export const Content = styled.View`
  padding-top: ${Platform.OS !== 'ios' ? HERO_MAX_HEIGHT : 0};
  padding-bottom: ${useSafeArea(20, 'bottom')};
  padding-horizontal: ${normalize(20)};
  flex: 1;
  justifyContent: flex-start;
`;

export const NavigationTitle = styled.Text`
  font-size: ${normalize(20)};
  color: #fff;
`;

/**
 * Styled components library doesn't have support for passing Animated API config directly,
 * hence the usage of `StyleSheet.create({})`
 * Link: http://tiny.cc/0dv12y
 */
export const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  hero: {
    overflow: 'hidden',
    width: null,
    height: HERO_MAX_HEIGHT,
  },
  backgroundImage: {
    width: null,
    height: HERO_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  gradient: {
    width: null,
    height: HERO_MAX_HEIGHT,
  },
  bar: {
    overflow: 'visible',
    backgroundColor: 'transparent',
    marginTop: normalize(Platform.OS === 'ios' ? 16 : 0),
    height: normalize(72),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navigationTitle: {
    position: 'absolute',
    top: normalize(35),
    left: normalize(50),
    right: normalize(50),
  },
});
