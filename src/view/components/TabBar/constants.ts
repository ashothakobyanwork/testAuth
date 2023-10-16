import {svgSprite} from '~/view/assets/icons/svg-sprite';

export const tabIcons: Record<string, keyof typeof svgSprite> = {
  Favorite: 'favoriteTabIcon',
  Home: 'homeTabIcon',
  Profile: 'profileTabIcon',
  Gift: 'giftTabIcon',
};
