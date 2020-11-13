import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('personal_profile')
export default class PersonalProfile {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  nickname: string;
  
  @Column()
  gender: boolean;

  @Column()
  age: string;

  @Column()
  address: string;

  @Column()
  phone_number: string;

  @Column()
  description: string;

  @Column()
  email: string;

  @Column()
  password: string;
};
