import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';

// Importing the models to create the relations between them
import StartupProfileImage from './StartupProfileImages';
import StartupImages from './StartupImages';

@Entity('startup_profile')
export default class StartupProfile {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  creation_date: string;

  @Column()
  description: string;

  @Column()
  email: string;

  @Column()
  password: string;

  /*
    Creating the relation between this model with the StartupProfileImage to put all in the
    same database  
  */
  @OneToMany(() => StartupProfileImage, startup_profile_image => startup_profile_image.startup_profile, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'startup_profile_image_id' })
  startup_profile_image: StartupProfileImage[];

  // Creating the relation between the model StartupImages and than putting in the same database
  @OneToMany(() => StartupImages, startup_images => startup_images.startup_profile, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'startup_images_id' })
  startup_images: StartupImages[];
};