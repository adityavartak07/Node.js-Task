import express from 'express';

import { register,addlocation } from '../controllers/location.js'

const router = express.Router();



router.post('/', register); // for registration

router.post('/add',addlocation); // for adding the data for admin //


export default router;