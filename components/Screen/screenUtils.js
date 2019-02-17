import { Platform } from 'react-native';
import { normalize } from '../../utils/normalizeSizes';

export const HERO_MAX_HEIGHT = normalize(250);
export const HERO_MIN_HEIGHT = normalize(Platform.OS === 'ios' ? 72 : 85);
export const HERO_SCROLL_DISTANCE = HERO_MAX_HEIGHT - HERO_MIN_HEIGHT;
