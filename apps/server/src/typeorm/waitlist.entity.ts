import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Waitlist {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'waitlist_id',
  })
  id: number;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    name: 'created_at',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;
}
