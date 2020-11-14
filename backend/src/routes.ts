import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import PesonalProfileController from './controllers/PersonalProfileController';
import StartupProfileController from './controllers/StartupProfileController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/register/personal-profile', PesonalProfileController.index);
routes.get('/register/personal-profile/:id', PesonalProfileController.show);
routes.post('/register/personal-profile', upload.single('personal_profile_image'), PesonalProfileController.create);

routes.get('/register/startup-profile', StartupProfileController.index);
routes.get('/register/startup-profile/:id', StartupProfileController.show);
routes.post('/register/startup-profile', upload.single('startup_profile_image'), upload.array('startup_images'), StartupProfileController.create);

export default routes;
