import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('expenses')
class Expense {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({nullable: true})
    description: string; 

    @Column()
    value: number;

    @Column({nullable: true})
    createdAt: Date;

    @Column({nullable: true})
    createdBy: string;

    @Column({nullable: true})
    lastUpdatedAt: Date;

    @Column({nullable: true})
    lastUpdatedBy: string;

};

export default Expense;