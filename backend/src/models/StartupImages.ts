import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

// Importing the model to create the relations between them
import StartupProfile from './StartupProfile';

@Entity('startup_images')
export default class StartupImages {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  /*
    Creating the relation between this model with the StartupProfile to put all in the
    same database  
  */
  @ManyToOne(() => StartupProfile, startup_profile => startup_profile.startup_images)
  @JoinColumn({ name: 'startup_images_id' })
  startup_profile: StartupProfile;
};