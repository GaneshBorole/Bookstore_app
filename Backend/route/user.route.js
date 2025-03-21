import express from 'express';
const router = express.Router();
import { singup } from '../controller/user.controller.js';
import { login } from '../controller/user.controller.js';

router.post('/signup', singup);
router.post('/login', login);

 export default router;
