import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToOne, JoinColumn } from "typeorm"
import { Profile } from "./Profile"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    username: string

    @OneToOne(() => Profile, (profile) => profile.user, {cascade: true})
    profile: Profile

}
