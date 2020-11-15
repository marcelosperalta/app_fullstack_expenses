import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Users {

    @PrimaryGeneratedColumn()
    id: number;

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
    createdAt: Date;

    @Column()
    createdBy: string;

    @Column()
    lastUpdatedAt: string;

    @Column()
    lastUpdatedBy: string;

};

export default Expenses;