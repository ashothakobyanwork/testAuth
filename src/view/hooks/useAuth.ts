import React from 'react';
import {AuthContext} from '~/view/context';

export const useAuth = () => React.useContext(AuthContext);
