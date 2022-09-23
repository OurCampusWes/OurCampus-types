export type User = {
  token: string;
  incognito: boolean;
  email: string;
  os: string;
  group: string;
  directory: string;
  imageURL: string;
  blocked: boolean;
  displayName: string;
  menuSubscriptions: string[];
  orgSubscriptions: {id:string, type:string}[];
  uid: string
};

export type TruncatedUser = {
  incognito: boolean;
  email: string;
  group: string;
  imageURL: string;
  displayName: string;
};

export type Notifications = {
  data: NotificationData;
  viewed: boolean;
  sender: string;
  string: string;
  type: number;
};

export type NotificationData = {
  body: string;
  restaurantId: string;
  title: string;
};