export declare type User = {
    token: string;
    incognito: boolean;
    email: string;
    os: string;
    group: string;
    directory: string;
    imageURL: string;
    blocked: boolean;
    displayName: string;
};
export declare type TruncatedUser = {
    incognito: boolean;
    email: string;
    group: string;
    imageURL: string;
    displayName: string;
};
export declare type Notifications = {
    data: NotificationData;
    viewed: boolean;
    sender: string;
    string: string;
    type: number;
};
export declare type NotificationData = {
    body: string;
    restaurantId: string;
    title: string;
};
