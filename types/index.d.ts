declare interface SidebarProps {
  user: User;
}

declare type User = {
  $id?: string;
  firstName: string;
  lastName: string;
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