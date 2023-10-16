import {createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import {ACCESS_TOKEN_KEY} from '~/constants/auth';
import {getStorageValue} from '~/utils/storage';

export const httpLink = createHttpLink({
  uri: 'https://api.quickclick.online/content/graphql',
});

export const requestLink = setContext(async (_, {headers, ...context}) => {
  try {
    const accessToken = await getStorageValue<string>(ACCESS_TOKEN_KEY);

    return {
      headers: {
        ...headers,
        authorization: accessToken,
      },
    };
  } catch (e) {
    return {
      headers: {
        ...headers,
        Authorization: null,
      },
      ...context,
    };
  }
});
