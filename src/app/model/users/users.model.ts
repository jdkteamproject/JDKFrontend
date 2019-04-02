import { userEvent } from '../userEvent/userEvent.model';
import { userNotification } from '../userNotification/userNotification.model';

export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    reportedNum: number;
    region: string;
    category: string;
    favEvents: userEvent[];
    notifications: userNotification[];
    admin: boolean;
    banned: boolean;
}