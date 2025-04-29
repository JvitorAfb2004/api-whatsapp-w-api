import express from 'express';
import { enviar as EnvioController } from '../controllers/envioController.js';
import  Auth  from '../middlewares/Auth.js'
const router = express.Router();

router.post('/enviar', Auth, EnvioController);

export default router;
