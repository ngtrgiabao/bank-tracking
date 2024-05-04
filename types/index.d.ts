declare type User = {
  $id?: string;
  firstName: string;
  lastName: string;
  email?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  dwalletCustomerUrl?: string;
  dwalletCustomerId?: string;
  postalCode?: string;
  dateOfBirth?: string;
  ssn?: string;
}

declare type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  subtype: string;
  appwriteItemId: string;
  shareableId: string;
};

declare type Bank = {
  $id: string;
  accountId: string;
  bankId: string;
  accessToken: string;
  fundingSourceUrl: string;
  userId: string;
  shareableId: string;
};