import { Role } from '../role.enum';

export class User {
    username: string;
    name: string;
    surname: string;
    email: string;
    role: Role;
    registrationDate: Date;
    enabled: string;
}