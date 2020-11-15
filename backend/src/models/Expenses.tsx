import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Expenses {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string; 

    @Column()
    value: number;

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