import {
  Column,
  // CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Bet {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  bettorAddress: string;

  @Column({
    type: 'int',
  })
  betChannelId: number;

  @Column({ type: 'int' })
  wager: number;

  @Column({ type: 'boolean' })
  option: boolean;

  // @CreateDateColumn({ name: 'created_at' })
  // createdAt: Date;
}
