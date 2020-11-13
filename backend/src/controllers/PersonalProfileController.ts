import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import PersonalProfile from '../models/PersonalProfile';

export default {
  async index(request: Request, response: Response) {
    const personalProfileRepository = getRepository(PersonalProfile);

    const personalProfiles = await personalProfileRepository.find();

    return response.json(personalProfiles);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const personalProfileRepository = getRepository(PersonalProfile);

    const personalProfile = await personalProfileRepository.findOneOrFail(id);

    return response.json(personalProfile);
  },

  async create(request: Request, response: Response) {
    const {
      first_name,
      last_name,
      nickname,
      gender,
      age,
      address,
      phone_number,
      description,
      email,
      password,
    } = request.body;
  
    const personalProfileRepository = getRepository(PersonalProfile);
  
    const personalProfile = personalProfileRepository.create({
      first_name,
      last_name,
      nickname,
      gender,
      age,
      address,
      phone_number,
      description,
      email,
      password,
    });
  
    await personalProfileRepository.save(personalProfile);

    return response.status(201).json(personalProfile)
  },
};
