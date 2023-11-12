// context/AppContextData.js
import React from 'react';
import { ContactUS } from "@prisma/client";

export interface AppContextDataProps {
  courseGroupsCount: number;
  courseListCount: number;
  studyingCounts: number;
  ipAddressesCount: number;
  contactData: ContactUS[];
}

const AppContextData = React.createContext<AppContextDataProps>({
  courseGroupsCount: 0,
  courseListCount: 0,
  studyingCounts: 0,
  ipAddressesCount: 0,
  contactData: [],
  // Initialize with default values
});

export default AppContextData;
