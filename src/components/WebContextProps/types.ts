import { ContactUS } from "@prisma/client";

export interface AppContextDataProps {
  courseGroupsCount: Number;
  courseListCount: Number;
  studyingCounts: Number;
  ipAddressesCount: Number;
  contactData: ContactUS[];
}
