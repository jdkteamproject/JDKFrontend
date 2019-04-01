export interface Friend {
    id: number;
    email: string;
    username: string;
    password: string;
    reportedNum: number;
    region: string;
    category: string;
    favEvents: any[];
    friends: any[];
    admin: boolean;
    banned: boolean;
}