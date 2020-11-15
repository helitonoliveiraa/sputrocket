import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import PersonalProfile from '../models/PersonalProfile';

export default {
  // To get all the pesonal's profiles
  async index(request: Request, response: Response) {
    const personalProfileRepository = getRepository(PersonalProfile);

    const personalProfiles = await personalProfileRepository.find();

    return response.json(personalProfiles);
  },

  // To get a specific personal profile
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const personalProfileRepository = getRepository(PersonalProfile);

    const personalProfile = await personalProfileRepository.findOneOrFail(id);

    return response.json(personalProfile);
  },

  // Creating a new personal profile
  async create(request: Request, response: Response) {
    const {
      name,
      nickname,
      gender,
      age,
      address,
      phone_number,
      in_a_startup,
      description,
      email,
      password,
    } = request.body;
  
    const personalProfileRepository = getRepository(PersonalProfile);
    
    // Getting the images and the filename to put on the column "path", which is present in
    // personal_profile_image database
    const requestPersonalProfileImage = request.files as Express.Multer.File[];
    const personal_profile_image = requestPersonalProfileImage.map(personal_profile_images => {
      return { path: personal_profile_images.filename };
    });

    // Putting the personal profile image, and the profile image on the personal profiles database
    const personalProfile = personalProfileRepository.create({
      name,
      nickname,
      gender,
      age,
      address,
      phone_number,
      in_a_startup,
      description,
      email,
      password,
      personal_profile_image,
    });

    console.log(personalProfile)
  
    // Saving the database and than returning a message in json with the status "sent"
    await personalProfileRepository.save(personalProfile);

    return response.status(201).json(personalProfile)
  },
};
