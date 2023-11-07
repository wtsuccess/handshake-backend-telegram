import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BetChannel {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({
    unique: true,
    type: 'varchar',
  })
  betTitle: string;

  @Column({ type: 'varchar' })
  betCreatorAddress: string;

  @Column({ type: 'varchar' })
  betDesc: string;

  @Column({ type: 'integer' })
  minimumBetAmount: number;

  // @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  @Column({ type: 'timestamptz' })
  betStartDate: Date;

  @Column({ type: 'timestamptz' })
  betEndDate: Date;

  // @Column({
  //   unique: true,
  //   type: 'varchar',
  // })
  // betLink: string;

  @Column({ type: 'boolean', default: false })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  isPublished: boolean;

  //   @ManyToMany(
  //     () => User,
  //     (user) => ,user.bets //Optional
  //   )
  //   winners?: User[];
}
