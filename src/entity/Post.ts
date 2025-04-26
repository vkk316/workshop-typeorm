import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { Profile } from "./Profile"
import { User } from "./User"
import { Tag } from "./Tag"

@Entity()
export class Post {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({type: 'text', nullable: true})
    content: string

    // uni-directional
    @ManyToOne(() => User)
    user: User

    @ManyToMany(() => Tag, (tag) => tag.posts)
    @JoinTable()
    tags: Tag[]

}
