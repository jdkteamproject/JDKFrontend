export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    reportedNum: number;
    region: string;
    category: string;
    favEvents: any[];
    friends: any[];
    notifications: any[];
    admin: boolean;
    banned: boolean;
}