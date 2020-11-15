import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import PersonalProfile from '../models/PersonalProfile';
import personal_profile_views from '../views/personal_profile_views';

export default {
  // To get all the pesonal's profiles
  async index(request: Request, response: Response) {
    const personalProfileRepository = getRepository(PersonalProfile);

    const personalProfiles = await personalProfileRepository.find({
      relations: ['personal_profile_image']
    });

    return response.json(personal_profile_views.renderMany(personalProfiles));
  },

  // To get a specific personal profile
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const personalProfileRepository = getRepository(PersonalProfile);

    const personalProfile = await personalProfileRepository.findOneOrFail(id, {
      relations: ['personal_profile_image']
    });

    return response.json(personal_profile_views.render(personalProfile));
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
    } = request.body;
  
    const personalProfileRepository = getRepository(PersonalProfile);
    
    // Getting the images and the filename to put on the column "path", which is present in
    // personal_profile_image database
    const requestPersonalProfileImage = request.files as Express.Multer.File[];
    const personal_profile_image = requestPersonalProfileImage.map(personal_profile_images => {
      return { path: personal_profile_images.filename };
    });

    // Putting the personal profile image, and the profile image on the personal profiles database
    const data = {
      name,
      nickname,
      gender,
      age,
      address,
      phone_number,
      in_a_startup,
      description,
      email,
      personal_profile_image,
    };

    // Validation with Yup
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      nickname: Yup.string().required(),
      gender: Yup.boolean().required(),
      age: Yup.string().required(),
      address: Yup.string().required(),
      phone_number: Yup.string().required(),
      in_a_startup: Yup.boolean().required(),
      description: Yup.string().required().max(300),
      email: Yup.string().required(),
      personal_profile_image: Yup.array(Yup.object().shape({
        path: Yup.string().required(),
      })),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const personalProfile = personalProfileRepository.create(data);
  
    // Saving the database and than returning a message in json with the status "sent"
    await personalProfileRepository.save(personalProfile);

    return response.status(201).json(personalProfile)
  },
};
