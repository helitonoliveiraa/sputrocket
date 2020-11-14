import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';

import StartupProfileImage from './StartupProfileImages';

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

  @OneToMany(() => StartupProfileImage, startup_profile_image => startup_profile_image.startup_profile, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'startup_profile_image_id' })
  startup_profile_image: StartupProfileImage[];
};