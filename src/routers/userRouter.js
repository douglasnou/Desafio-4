import express from 'express';
import { createUser } from '../controllers/userController';
import { getUser } from '../controllers/getUser';

const Router = express.Router();

Router.post('/', createUser);
Router.get('/', getUser);

export default Router;