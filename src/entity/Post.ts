import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Tag } from "./Tag";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    title: string

    @Column({type: 'text'})
    content: string

    @ManyToOne(() => User)
    postedBy: User

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    postedAt: Date

    @ManyToMany(() => Tag, (tag) => tag.posts)
    tags: Tag[]

}