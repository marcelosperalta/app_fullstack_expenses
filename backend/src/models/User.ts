import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    surname: string; 

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    @Column()
    createdAt: Date;

    @Column()
    createdBy: string;

    @Column()
    lastUpdatedAt: string;

    @Column()
    lastUpdatedBy: string;

};

export default User;