import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { Profile } from "./Profile"
import { User } from "./User"
import { Post } from "./Post"

@Entity()
export class Tag {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    name: string

    @ManyToMany(() => Post, (post) => post.tags)
    posts: Post[]

}
