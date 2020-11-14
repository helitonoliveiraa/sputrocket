import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

import PersonalProfileImage from './PersonalProfileImage';

@Entity('personal_profile')
export default class PersonalProfile {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

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
  in_a_startup: boolean;

  @Column()
  description: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => PersonalProfileImage, personal_profile_image => personal_profile_image.personal_profile, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'personal_profile_image_id' })
  personal_profile_image: PersonalProfileImage[];
};
