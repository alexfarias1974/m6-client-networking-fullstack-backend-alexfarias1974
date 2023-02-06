import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
export class Contact{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name:string

    @Column()
    email: string

    @Column()
    tel: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User, {eager: true})
    user: User["id"]
}
