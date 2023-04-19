import {Entity, OneToMany} from 'typeorm';
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import {Post} from "../../post/entities/post.entity";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  create_at: Date;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
