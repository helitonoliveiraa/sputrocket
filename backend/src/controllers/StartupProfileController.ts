import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import StartupProfile from '../models/StartupProfile';
import startup_profile_views from '../views/startup_profile_views';

export default {
  // To get all the startup's profiles
  async index(request: Request, response: Response) {
    const startupProfileRepository = getRepository(StartupProfile);

    const startupProfiles = await startupProfileRepository.find({
      relations: ['startup_profile_image', 'startup_images']
    });

    return response.json(startup_profile_views.renderMany(startupProfiles));
  },

  // To get a specific startup
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const startupProfileRepository = getRepository(StartupProfile);

    const startupProfile = await startupProfileRepository.findOneOrFail(id, {
      relations: ['startup_profile_image', 'startup_images']
    });

    return response.json(startup_profile_views.render(startupProfile));
  },

  // Creating a new startup
  async create(request: Request, response: Response) {
    const {
      name,
      creation_date,
      description,
      email,
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
    const data = {
      name,
      creation_date,
      description,
      email,
      startup_profile_image,
      startup_images,
    };

    // Validation with Yup
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      creation_date: Yup.string().required(),
      description: Yup.string().required().max(300),
      email: Yup.string().required(),
      startup_profile_image: Yup.array(Yup.object().shape({
        path: Yup.string().required(),
      })),
      startup_images: Yup.array(Yup.object().shape({
        path: Yup.string().required(),
      })),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const startupProfile = startupProfileRepository.create(data);
  
    // Saving the database and than returning a message in json with the status "sent"
    await startupProfileRepository.save(startupProfile);

    return response.status(201).json(startupProfile)
  },
};
