import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToOne, JoinColumn } from "typeorm"
import { User } from "./User"
import { ThaiAddress } from "./ThaiAddress"

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string

    @Column({nullable: true})
    photo: string

    @Column(() => ThaiAddress)
    address: ThaiAddress

    @OneToOne(() => User, (user) => user.profile, { onDelete: 'CASCADE' })
    @JoinColumn()
    user: User

}
