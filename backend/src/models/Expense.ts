import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('expenses')
class Expense {

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
    lastUpdatedAt: Date;

    @Column()
    lastUpdatedBy: string;

};

export default Expense;