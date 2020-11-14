import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import PersonalProfileController from './controllers/PersonalProfileController';
import StartupProfileController from './controllers/StartupProfileController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/register/personal-profile', PersonalProfileController.index);
routes.get('/register/personal-profile/:id', PersonalProfileController.show);
routes.post('/register/personal-profile', upload.array('personal_profile_image'), PersonalProfileController.create);

routes.get('/register/startup-profile', StartupProfileController.index);
routes.get('/register/startup-profile/:id', StartupProfileController.show);
routes.post('/register/startup-profile', upload.array('startup_images'), StartupProfileController.create);

export default routes;
