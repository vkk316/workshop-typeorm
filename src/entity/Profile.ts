import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Gender } from "../enum/gender.enum"
import { ThaiAddress } from "./ThaiAddress"
import { User } from "./User"

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    displayName: string

    @Column({type: 'enum', enum: Gender})
    gender: Gender

    @Column({nullable: true})
    image: string

    @Column({type: 'text', nullable: true})
    bio: string

    @Column(() => ThaiAddress)
    address: ThaiAddress

    // test only
    @Column('decimal',{precision: 10, scale: 2, nullable: true})
    cost: number

    @OneToOne(() => User, (user) => user.profile, {onDelete: 'CASCADE', eager: true})
    @JoinColumn()
    user: User

}
