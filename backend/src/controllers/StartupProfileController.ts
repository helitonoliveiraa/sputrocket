import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import StartupProfile from '../models/StartupProfile';

export default {
  // To get all the startup's profiles
  async index(request: Request, response: Response) {
    const startupProfileRepository = getRepository(StartupProfile);

    const startuProfiles = await startupProfileRepository.find();

    return response.json(startuProfiles);
  },

  // To get a specific startup
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const startupProfileRepository = getRepository(StartupProfile);

    const startupProfile = await startupProfileRepository.findOneOrFail(id);

    return response.json(startupProfile);
  },

  // Creating a new startup
  async create(request: Request, response: Response) {
    const {
      name,
      creation_date,
      email,
      password,
    } = request.body;
  
    const startupProfileRepository = getRepository(StartupProfile);
  
    // Getting the images and the filename to put on the column "path", which is present in
    // both image's database

    // Set the Startup profile image
    const requestStartupProfileImage = request.files as Express.Multer.File[];
    const startup_profile_image = requestStartupProfileImage.map(startup_profile_images => {
      return { path: startup_profile_images.filename };
    });

    // Set the Startup images
    const requestStartupImages = request.files as Express.Multer.File[];
    const startup_images = requestStartupImages.map(startup_image => {
      return { path: startup_image.filename };
    });

    // Putting the startup profile image, and the startup images on the startup profiles database
    const startupProfile = startupProfileRepository.create({
      name,
      creation_date,
      email,
      password,
      startup_profile_image,
      startup_images,
    });
  
    // Saving the database and than returning a message in json with the status "sent"
    await startupProfileRepository.save(startupProfile);

    return response.status(201).json(startupProfile)
  },
};
