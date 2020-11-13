import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('startup_profile')
export default class StartupProfile {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  creation_date: string;

  @Column()
  email: string;

  @Column()
  password: string;
};