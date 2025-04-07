import express from 'express';
import { register, login, me } from '../controllers/authController';
import { validateRequest, auth } from '../middleware/authenticators';
import { loginSchema, userSchema } from '../middleware/validators';

const router = express.Router();

router.post( '/register', validateRequest( userSchema ), register );

router.post( '/login', validateRequest( loginSchema ), login );

router.get( '/me', auth, me );

export default router;