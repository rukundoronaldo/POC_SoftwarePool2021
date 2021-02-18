import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class Developer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'firstName', nullable : false})
    firstName: string;

    @Column({name: 'lastName', nullable : false})
    lastName: string;

    @Column({name: 'isActive', nullable : false})
    isActive: boolean;

}