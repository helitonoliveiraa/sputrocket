import { Router } from 'express';
import multer from 'multer';

// Importation of the configuration of Multer to upload on a disk storage, the images
import uploadConfig from './config/upload';

import PersonalProfileController from './controllers/PersonalProfileController';
import StartupProfileController from './controllers/StartupProfileController';

const routes = Router();
const upload = multer(uploadConfig);

// Routes to the personal profiles register
routes.get('/register/personal-profile', PersonalProfileController.index);
routes.get('/register/personal-profile/:id', PersonalProfileController.show);
routes.post('/register/personal-profile', upload.array('personal_profile_image'), PersonalProfileController.create);

// Routes to the startup profiles resgiter
routes.get('/register/startup-profile', StartupProfileController.index);
routes.get('/register/startup-profile/:id', StartupProfileController.show);
routes.post('/register/startup-profile', upload.array('startup_profile_image'), StartupProfileController.create);
routes.post('/register/startup-profile/configurations/add-images', upload.array('startup_images'), StartupProfileController.create);

export default routes;
