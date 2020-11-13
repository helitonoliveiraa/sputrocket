import { Router } from 'express';

import PesonalProfileController from './controllers/PersonalProfileController';

const routes = Router();

routes.get('/register', PesonalProfileController.index);
routes.get('/register/:id', PesonalProfileController.show);
routes.post('/register', PesonalProfileController.create);

export default routes;
