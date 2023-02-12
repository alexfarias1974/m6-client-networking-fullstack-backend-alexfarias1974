import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer"
import { Contact } from "./contact.entity";

@Entity("users")
export class User{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name:string

    @Column({unique: true})
    email: string

    @Column({unique: true})
    tel: string

    @Column()
    @Exclude()
    password: string

    @Column({default: true, nullable: true})
    isAdm: boolean

    @Column({default: true})
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => Contact, (contact) => contact.user)
    contact: Contact[]
}
