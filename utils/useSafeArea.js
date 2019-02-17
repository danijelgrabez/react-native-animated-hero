import memoizeOne from 'memoize-one';
import { Dimensions } from 'react-native';
import { normalize } from './normalizeSizes';

/**
 * useSafeArea (portrait mode)
 * Use this function in cases when spacing (margin/padding/etc)
 * is set to elements close to bottom, or top edge of the screen.
 */
export const useSafeArea = memoizeOne((value, position = 'top') => {
  const { height } = Dimensions.get('window');
  const hasHinge = height >= 812; // iPhone X or, larger

  if (hasHinge) {
    if (position === 'top') {
      return normalize(value + 44);
    }
    if (position === 'bottom') {
      return normalize(value + 34);
    }
  }
  return normalize(value);
});