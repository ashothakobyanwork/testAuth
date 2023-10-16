import {PropsWithChildren} from 'react';

export type MainContainerProps = PropsWithChildren<{
  backgroundColor?: string;
  withPadding?: boolean;
  withBottomInset?: boolean;
  statusBarColor?: string;
}>;
