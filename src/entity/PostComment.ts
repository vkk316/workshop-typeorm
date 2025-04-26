import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Post } from "./Post"

@Entity()
export class PostComment {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    content: string

    @ManyToOne(() => User)
    commentBy: User

    @ManyToOne(() => Post)
    post: Post

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    commentedAt: Date

}