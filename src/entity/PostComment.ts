import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { Profile } from "./Profile"
import { User } from "./User"
import { Tag } from "./Tag"
import { Post } from "./Post"

@Entity()
export class PostComment {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text', nullable: true})
    content: string

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    user: User

    @ManyToOne(() => Post, { onDelete: 'CASCADE' })
    post: Post

    @OneToOne(() => PostComment, { onDelete: 'CASCADE' })
    replyTo: PostComment
}
