import { Router } from 'express';

import PesonalProfileController from './controllers/PersonalProfileController';

const routes = Router();

routes.post('/register', PesonalProfileController.create);

export default routes;
