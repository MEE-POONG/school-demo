import { createContext } from 'react';
import { AppContextDataProps } from './types';

export const AppContextData = createContext<AppContextDataProps>({
    courseGroupsCount: 0,
    courseListCount: 0,
    studyingCounts: 0,
    ipAddressesCount: 0,
    contactData: [],

});
