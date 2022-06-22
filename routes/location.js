import express from 'express';

import { register,addlocation } from '../controllers/location.js'

const router = express.Router();
// import auth from "../middleware/auth.js";


router.post('/', register);

router.post('/add',addlocation);
// router.get('/:id', getBook);

// router.post('/', auth,  createBook);
// router.patch('/:id', auth, updateBook);
// router.delete('/:id', auth, deleteBook);
// router.patch('/:id/likeBook', auth, likeBook);

export default router;