import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

import PersonalProfile from './PersonalProfile';

@Entity('personal_profile_image')
export default class PersonalProfileImage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @OneToOne(() => PersonalProfile, personal_profile => personal_profile.personal_profile_image)
  @JoinColumn({ name: 'personal_profile_image_id' })
  personal_profile: PersonalProfile;
};