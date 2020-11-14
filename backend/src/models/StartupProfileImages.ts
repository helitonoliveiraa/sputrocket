import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import StartupProfile from './StartupProfile';

@Entity('startup_profile_image')
export default class StartupProfileImage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => StartupProfile, startup_profile => startup_profile.startup_profile_image)
  @JoinColumn({ name: 'startup_profile_image_id' })
  startup_profile: StartupProfile;
};