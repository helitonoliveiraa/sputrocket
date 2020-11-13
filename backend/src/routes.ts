import { Router } from 'express';

import PesonalProfileController from './controllers/PersonalProfileController';
import StartupProfileController from './controllers/StartupProfileController';

const routes = Router();

routes.get('/register/personal-profile', PesonalProfileController.index);
routes.get('/register/personal-profile/:id', PesonalProfileController.show);
routes.post('/register/personal-profile', PesonalProfileController.create);

routes.get('/register/startup-profile', StartupProfileController.index);
routes.get('/register/startup-profile/:id', StartupProfileController.show);
routes.post('/register/startup-profile', StartupProfileController.create);

export default routes;
