import {ObjectID, Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectIdColumn} from 'typeorm';

@Entity('tool')
class Tool {
  @ObjectIdColumn()  
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: string;

  @Column()
  tags: string[];

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default Tool;