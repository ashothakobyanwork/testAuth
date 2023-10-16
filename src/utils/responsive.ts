import {Dimensions, PixelRatio, Platform} from 'react-native';

const iPhone13Height = 844;
const iPhone13Width = 390;

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');
const defaultAspectRatio = 16 / 9;
const currentScreenAspectRatio = screenHeight / screenWidth;

const IS_IOS = Platform.OS === 'ios';

const k = IS_IOS ? 1 : defaultAspectRatio < currentScreenAspectRatio ? 1 : 0.94;

export const getResponsiveHeight = (dynamicHeight: number): number => {
  const scaleFactor = screenHeight / iPhone13Height;
  const result = Math.round(dynamicHeight * scaleFactor);
  return result;
};

export const getResponsiveWidth = (width: number): number => {
  return (screenWidth * width) / iPhone13Width;
};

export const getResponsiveValue = (size: number): number => {
  return PixelRatio.roundToNearestPixel(
    (screenWidth * size * k) / iPhone13Width,
  );
};
