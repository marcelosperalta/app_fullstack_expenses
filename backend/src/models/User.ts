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

    @Column({nullable: true})
    avatar: string;

    @Column({nullable: true})
    createdAt: Date;

    @Column({nullable: true})
    createdBy: string;

    @Column({nullable: true})
    lastUpdatedAt: string;

    @Column({nullable: true})
    lastUpdatedBy: string;

};

export default User;